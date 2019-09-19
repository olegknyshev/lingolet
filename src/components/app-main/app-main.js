import React, {Component} from 'react';
import {LessonsTitel} from '../../data/lessons-titel';
import {NavLink} from 'react-router-dom';
import './app-main.css';

export default class AppMain extends Component {


    render() {

        let dataProgress = [];

        if (localStorage.getItem('dataProgress')) {
            dataProgress = JSON.parse(localStorage.getItem('dataProgress'));
          };  

        const elements = LessonsTitel.map ((item, index) => { 
                     
            let progress = 'Этот урок вы еще не пробовали...';
            if (dataProgress.length!==0) {
                if (dataProgress[index].progress>0) progress = `Ваш прогресс: ${ dataProgress[index].progress }%`;
                if (dataProgress[index].progress===100) progress = 'Ура, этот урок вы прошли!';
            };

            return (
                <NavLink
                    to={`/lesson/theory/${ item.id }`}
                    className='LessonsBox'
                    exact={false}
                    key={ item.id }
                    onClick={() => this.props.onChange({lessonId:item.id})}
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

    };
}
