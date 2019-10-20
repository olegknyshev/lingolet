import React from 'react';
import './app-welcome.css';

const AppWelcome = ({onChange}) => {

    return (
        <div className='welcomeBox'>
            <div>
                <h1>Добро пожаловать<br />
                в Lingolet!</h1>
                <p>Ваш бесплатный тренажер <br /> 
                для ежедневного закрепления <br />
                основ английского языка.</p>
                <button onClick={() => onChange({isFirstTime:false})}
                className='buttonWelcome'>
                    Начнем!
                </button>
            </div>
        </div>
        );        
}

export default AppWelcome;