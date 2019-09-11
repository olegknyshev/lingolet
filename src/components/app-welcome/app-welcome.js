import React, { Component }  from 'react';
import './app-welcome.css';

export default class AppWelcome extends Component {

    render() {
        
        return (
            <div className='welcomeBox'>
                <div>
                    <h1>Добро пожаловать<br />
                    в Lingolet!</h1>
                    <p>Ваш бесплатный тренажер <br /> 
                    для ежедневного закрепления <br />
                    основ английского языка.</p>
                    <button className='buttonWelcome'>Начнем!</button>

                    <div className='arrowBox'>
                        Авторизация, открывает для вас 
                        новый функционал: полный доступ к урокам, 
                        статистику Вашего прогресса, ночной режим.
                    </div>
                </div>
            </div>
        );        
    }
}