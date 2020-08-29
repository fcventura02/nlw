import { Response, Request, response } from 'express';
import db from '../database/connection';
import convertHourToMinutes from '../utils/convertHourToMinutes';

interface ScheduleItem {
    id?: number,
    week_day: number;
    from: string;
    to: string;
}


export default class ClassesController {

    async index(req: Request, res: Response) {
        const filters = req.query;

        const subject = filters.subject as string
        const week_day = filters.week_day as string
        const time = filters.time as string

        if (!filters.week_day || !filters.subject || !filters.time) {
            return response.status(400).json({
                error: 'Missing filters to search classes'
            })
        }

        const timeinMinutes = convertHourToMinutes(time);

        const classes = await db('classes')
            .whereExists(function () {
                this.select('class_schedule.*')
                    .from('class_schedule')
                    .whereRaw('`class_schedule`.`class_id` = `classes`.`id`')
                    .whereRaw('`class_schedule`.`week_day` = ??', [Number(week_day)])
                    .whereRaw('`class_schedule`.`from` <= ??', [timeinMinutes])
                    .whereRaw('`class_schedule`.`to` > ??', [timeinMinutes])
            })
            .where('classes.subject', '=', subject)
            .join('users', 'classes.user_id', '=', 'users.id')
            .select(['classes.*', 'users.name', 'users.email', 'users.whatsapp', 'users.bio']);

        return res.json(classes)
    }

    async createClasses(req: Request, res: Response) {
        const {
            user_id,
            subject,
            cost,
            schedule
        } = req.body;

        const trx = await db.transaction();
        try {
            const insertedClassesId = await trx('classes').insert({
                subject,
                cost,
                user_id,
            });
            const class_id = insertedClassesId[0];

            const classSchedule = schedule.map((scheduleItem: ScheduleItem) => {
                return {
                    week_day: scheduleItem.week_day,
                    from: convertHourToMinutes(scheduleItem.from),
                    to: convertHourToMinutes(scheduleItem.to),
                    class_id,
                }
            });

            await trx('class_schedule').insert(classSchedule);

            await trx.commit();

            return res.status(201).send('ok')

        } catch (error) {
            console.log(error)
            trx.rollback();

            return response.status(400).json({
                error: "Unexpected error while creating new class"
            })
        }
    }

    async updateClasses(req: Request, res: Response) {
        const {
            class_id,
            subject,
            cost,
            schedule,
        } = req.body;
        const { user_id } = req.currentUser
        //Verifica se o usuário que solicitou é o mesmo que criou 
        const checkedUser = await db('classes')
            .select('*')
            .where({
                id: class_id,
                user_id
            });

        //Valida o usuário
        if (!!checkedUser.length) {
            const trx = await db.transaction();
            try {
                await trx('classes').where('id', '=', class_id).update({
                    subject,
                    cost,
                });

                //Formata os itens para a classe schedule
                const classSchedule = schedule.map((scheduleItem: ScheduleItem) => {
                    return {
                        id: scheduleItem.id,
                        week_day: scheduleItem.week_day,
                        from: convertHourToMinutes(scheduleItem.from),
                        to: convertHourToMinutes(scheduleItem.to),
                    }
                });

                //Atualiza todos os schedules
                for (let item in classSchedule) {
                    await trx('class_schedule')
                        .where('id', '=', schedule[item].id)
                        .update(classSchedule[item]);
                }
                await trx.commit();

                return res.status(201).send('ok')

            } catch (error) {
                console.log(error)
                trx.rollback();

                return res.status(400).json({
                    error: "Unexpected error while update class"
                })
            }
        }
        return res.status(401).json({
            err: "User not authorization"
        })
    }
    async deleteClasses(req: Request, res: Response) {
        const {
            id,
        } = req.params;
        const { user_id } = req.currentUser
        //Verifica se o usuário que solicitou é o mesmo que criou 
        const checkedUser = await db('classes')
            .select('*')
            .where({
                id,
                user_id
            });
        const schedule = await db('class_schedule')
            .select('*')
            .where({
                class_id: checkedUser[0].id,
            });
        console.log({ checkedUser, schedule })

        //Valida o usuário
        if (!!checkedUser.length) {
            const trx = await db.transaction();
            try {

                for (let item in schedule) {
                    await trx('class_schedule')
                        .where('id', '=', schedule[item].id)
                        .del().catch(err => console.log(err));
                }

                await trx('classes').where('id', '=', id).del();

                await trx.commit();

                return res.status(201).send('ok')

            } catch (error) {
                console.log(error)
                trx.rollback();

                return res.status(400).json({
                    error: "Unexpected error while update class"
                })
            }
        }
        return res.status(401).json({
            err: "User not authorization"
        })
    }
}