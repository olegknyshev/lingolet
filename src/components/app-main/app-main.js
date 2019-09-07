import React, { Component } from 'react';
import './app-main.css';

export default class AppMain extends Component {

    render() {
        const { lessons } = this.props;

        const elements = lessons.map ((item) => {
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
            <main>
                <div className='LessonsDiv'>
                { elements }
                </div>
            </main>
        );
    }
}