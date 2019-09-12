import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './app-nav.css';

export default class AppNav extends Component {

    state = {
        lessonId: 0
      };

    render() {
        const AppNavList = () => {
            return (
                <NavLink
                    to='/'
                    exact={true}
                    activeClassName='active'
                >                    
                        <i className="far fa-list-alt fa-2x"></i>
                        Уроки                                     
                </NavLink>
            );
        }

        const AppNavBack = () => {
            return (
                <NavLink
                    to='/'
                    exact={true}
                    activeClassName='active'
                >                    
                        <i className="fas fa-chevron-circle-left fa-2x"></i>  
                        К урокам

                                         
                </NavLink>
            );
        }
        
        const AppNavSettings = () => {
            return (
                <NavLink
                    to='/settings'
                    exact={false}
                    activeClassName='active'
                >                    
                        <i className="fas fa-cogs fa-2x"></i>
                        Настройки                    
                </NavLink>
            );
        }
        
        const AppNavProgress = () => {
            return (
                <NavLink
                    to='/statistics'
                    exact={false}
                    activeClassName='active'
                >                   
                        <i className="fas fa-chart-line fa-2x"></i>
                        Статистика                  
                </NavLink>
            );
        }
        
        const AppNavTest = () => {
            return (
                <NavLink
                    to='/exam'
                    exact={false}
                    activeClassName='active'
                >
                    <i className="far fa-file-alt fa-2x"></i>
                    Экзамен                   
                </NavLink>
            );
        }

        const AppNavLessonTheory = () => {
            return (
                <NavLink
                    to={`/lesson/theory/${ this.state.lessonId }`}
                    exact={false}
                    activeClassName='active'
                >
                    <i className="fas fa-lightbulb fa-2x"></i>
                    Теория                   
                </NavLink>
            );
        }

        const AppNavLessonDictionary = () => {
            return (
                <NavLink
                    to={`/lesson/dictionary/${ this.state.lessonId }`}
                    exact={false}
                    activeClassName='active'
                >
                    <i className="fas fa-book fa-2x"></i>
                    Словарь                   
                </NavLink>
            );
        }

        const AppNavLessonPractice = () => {
            return (
                <NavLink
                    to={`/lesson/practice/${ this.state.lessonId }`}
                    exact={false}
                    activeClassName='active'
                >
                    <i className="fas fa-graduation-cap fa-2x"></i>
                    Практика                   
                </NavLink>
            );
        }

        if (this.state.lessonId > 0) 
            return (
                <nav>
                    <AppNavBack />
                    <AppNavLessonTheory />
                    <AppNavLessonDictionary />
                    <AppNavLessonPractice />
                </nav>
            )

            else return (
            <nav>
                <AppNavList />
                <AppNavProgress />
                <AppNavTest />
                <AppNavSettings />
            </nav>
        );
    }
}