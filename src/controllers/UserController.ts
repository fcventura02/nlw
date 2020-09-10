import { Response, Request } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import db from '../database/connection';


export default class UserController {

    async authUser(req: Request, res: Response) {
        const { email, password } = req.body;
        console.log({ email, password })
        try {
            const user = await db('users').select('*').where('email', '=', email).then((user) => {
                return user
            });

            //se tem email válido
            if (!user)
                return res.status(401).json({ err: 'Falha na autenticação' });

            //Validando senha
            const authCompare = await bcrypt.compare(password, user[0].password_hash)
            if (!authCompare)
                return res.status(401).json({ err: 'Falha na autenticação' });
            //se tudo Ok retonar usuário
            const token: string = jwt.sign({
                user_id: user[0].id
            },
                process.env.JWT_TOKEN || 'DarthVader',
                {
                    expiresIn: "1d",
                });

            return res.status(200).json({
                token,
                user: {
                    name: user[0].name,
                    lastname: user[0].lastname,
                    avatar: user[0].avatar,
                    whatsapp: user[0].whatsapp,
                    email: user[0].email,
                    bio: user[0].bio
                }
            });
        } catch (err) {
            //caso tenha falha na busca do BD
            return res.status(401).json({ err: 'Falha na autenticação' });
        }
    };

    async createUser(req: Request, res: Response) {
        const {
            name,
            lastname,
            avatar,
            whatsapp,
            email,
            password,
            bio,
        } = req.body;
        
        try {
            await bcrypt.hash(password, 10, async (errBcrypt, password_hash) => {
                if (errBcrypt)
                    return res.status(500).json({ err: errBcrypt })
                await db('users').insert({
                    name,
                    lastname,
                    avatar,
                    whatsapp,
                    email,
                    password_hash,
                    bio,
                }).catch(err=>{
                    console.log({err})
                    
                    return res.status(401).send('erro a cadastrar o usuário')
                });
                return res.status(201).send('ok')
            })    
        } catch (error) {
            return res.status(401).send('erro ao cadastrar usuário')
        }
        
    };

    async updateUser(req: Request, res: Response) {
        const { user_id } = req.currentUser

        const {
            name,
            avatar,
            whatsapp,
            email,
            bio,
        } = req.body;

        try {
            await db('users').where('id', '=', user_id).update({
                name,
                avatar,
                whatsapp,
                email,
                bio,
            });
            return res.status(201).send('ok')
        } catch (error) {
            return res.status(401).send('ok')
        }

    };

}