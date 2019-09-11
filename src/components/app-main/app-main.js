import React, { Component } from 'react';
import {LessonsData} from '../../lessons-data';
import {NavLink} from 'react-router-dom';
import './app-main.css';

export default class AppMain extends Component {

    render() {
        
        const elements = LessonsData.map ((item) => {

            let progress = 'А здесь вы еще не были...';
            if (item.progress >  0) progress = `Ваш прогресс: ${ item.progress }%`;
            if (item.progress === 100) progress = 'Ура, здесь вы все уже знаете!';
            

            return (
                <NavLink
                    to={`/lesson/theory/${ item.id }`}
                    className='LessonsBox'
                    exact={false}
                    key={ item.id }
                > 
                    <div>
                        <div>
                            <div className='LessonNumer'>{ item.id }</div>
                            <p className='LessonProgress'>{ progress }</p>
                        </div>
                        <h2>{ item.titel }</h2>                        
                        <div className='LessonsBoxProgressB'></div>                  
                        <div className='LessonsBoxProgress' style={{width: item.progress+'%'}}></div>
                    </div>
                </NavLink>
            );
        })
    
        return (
            <div className='LessonsDiv'>
            { elements }
            </div>
        );
    }
}