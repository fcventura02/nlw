import React from 'react';

import PageHeader from '../../components/PageHeader'
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import './styles.css';


function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis.">
                <form id="search-teachers">
                <Select
                    options={[
                        {value: 'Artes', label:'Artes'},
                        {value: 'Biologia', label:'Biologia'},
                        {value: 'Filosofia', label:'Filosofia'},
                        {value: 'Português', label:'Português'},
                        {value: 'Matématica', label:'Matématica'},
                        {value: 'Quimica', label:'Quimica'},
                    ]}
                        name="subject"
                        label="Matéria"
                    />
                <Select
                    options={[
                        {value: '0', label:'Domingo'},
                        {value: '1', label:'Segunda'},
                        {value: '2', label:'Terça'},
                        {value: '3', label:'Quarta'},
                        {value: '4', label:'Matématica'},
                        {value: '5', label:'Sexta'},
                        {value: '6', label:'Sabado'},
                    ]}
                        name="week_day"
                        label="Dia da semana"
                    />
                    <Input name="time" type="time" label="Hora" />
                </form>
            </PageHeader>
            <main>
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </main>
        </div>
    )
};

export default TeacherList;