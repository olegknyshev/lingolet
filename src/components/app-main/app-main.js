import React, { Component } from 'react';
import {LessonsData} from '../../lessons-data';
import './app-main.css';

export default class AppMain extends Component {

    render() {
        
        const elements = LessonsData.map ((item) => {
            return (
                <div key={ item.id } className='LessonsBox'>
                    <p className='LessonNumer'>Урок <span>{ item.id }.</span></p>
                    <h2>{ item.titel }</h2>
                    <p className='LessonProgress'>Ваш прогресс: <span>{ item.progress }</span>%</p>
                    <div className='LessonsBoxProgress' style={{width: item.progress+'%'}}></div>
                </div>
            );
        })
    
        return (
            <div className='LessonsDiv'>
            { elements }
            </div>
        );
    }
}