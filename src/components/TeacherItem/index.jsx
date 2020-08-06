import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';
const TeacherItem = () => {
    return (
        <article className="teacher-item">
            <header>
                <img
                    src="https://avatars1.githubusercontent.com/u/54460658?s=460&u=157daf379a18cc6c2135de8d353b442c5d880710&v=4"
                    alt="Filipe"
                />
                <div>
                    <strong>Filipe Ventura</strong>
                    <span>Química</span>
                </div>
            </header>
            <p>
                Entusiasta das melhores tecnologias de química avançada.
                            <br /><br />
                        Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
                    </p>

            <footer>
                <p>
                    Preço/Hora
                            <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="whatsapp" />
                            Entrar em contato
                        </button>
            </footer>
        </article>
    )
}

export default TeacherItem;