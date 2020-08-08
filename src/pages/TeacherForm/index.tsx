import React from 'react';

import PageHeader from '../../components/PageHeader'
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg'

import './styles.css';


function TeacherForm() {
    return (
        <div id="page-teacher-form" className="container">
            <PageHeader
                title="Que incrivel você quer dar aulas."
                description="O primeiro passo é preencher esse formulário de inscrição"
            />
            <main>
                <fieldset>
                    <legend>Seus Dados</legend>
                    <Input name="name" type="text" label="Nome completo" />
                    <Input name="avatar" type="text" label="Avatar" />
                    <Input name="whatsapp" type="text" label="Whatsapp" />
                    <Textarea name="bio" label="Biografia" />
                </fieldset>
                <fieldset>
                    <legend>Sobre a aula</legend>
                    <Select
                        options={[
                            { value: 'Artes', label: 'Artes' },
                            { value: 'Biologia', label: 'Biologia' },
                            { value: 'Filosofia', label: 'Filosofia' },
                            { value: 'Português', label: 'Português' },
                            { value: 'Matématica', label: 'Matématica' },
                            { value: 'Quimica', label: 'Quimica' },
                        ]}
                        name="subject"
                        label="Matéria"
                    />
                    <Input name="cost" type="text" label="Custo da sua hora por aula" />
                </fieldset>
                <fieldset>
                    <legend>
                        Horários disponíveis
                        <button type="button">
                            + Novo Horário
                        </button>
                    </legend>

                    <div className="schedule-item">
                        <Select
                            options={[
                                { value: '0', label: 'Domingo' },
                                { value: '1', label: 'Segunda' },
                                { value: '2', label: 'Terça' },
                                { value: '3', label: 'Quarta' },
                                { value: '4', label: 'Matématica' },
                                { value: '5', label: 'Sexta' },
                                { value: '6', label: 'Sabado' },
                            ]}
                            name="week_day"
                            label="Dia da semana"
                        />
                        <Input name="from" type="time" label="Das" />
                        <Input name="to" type="time" label="Até" />
                    </div>

                </fieldset>
                <footer>
                    <p>
                        <img src={warningIcon} alt="Aviso importante" />
                        Importante <br />
                        Preencha todos os dados.
                    </p>
                    <button type="button">
                        Salvar cadastro
                    </button>
                </footer>
            </main>
        </div>
    )
};

export default TeacherForm;