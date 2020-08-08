import React from 'react';

import PageHeader from '../../components/PageHeader'
import Input from '../../components/Input';

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
                    <Input name="bio" type="text" label="Biografia" />
                </fieldset>
                <fieldset>
                    <legend>Sobre a aula</legend>
                    <Input name="subject" type="text" label="Matéria" />
                    <Input name="cost" type="text" label="Custo da sua hora por aula" />
                </fieldset>
                <fieldset>
                    <legend>Hora</legend>
                    <Input name="subject" type="text" label="Matéria" />
                    <Input name="cost" type="text" label="Custo da sua hora por aula" />
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