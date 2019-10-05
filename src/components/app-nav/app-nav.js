import React from 'react';
import {NavLink} from 'react-router-dom';
import './app-nav.css';

const AppNav = ({pageStatus, onChange}) => {
    
    const AppNavList = () => {
        return (
            <NavLink
                to='/'
                exact={true}
                activeClassName='active'
                onClick={() => onChange({lessonId:0})}
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
                onClick={() => onChange({lessonId:0})}
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
                to={`/lesson/theory/${ pageStatus }`}
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
                to={`/lesson/dictionary/${pageStatus}`}
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
                to={`/lesson/practice/${pageStatus}`}
                exact={false}
                activeClassName='active'
            >
                <i className="fas fa-graduation-cap fa-2x"></i>
                Практика                   
            </NavLink>
        );
    }

    if (pageStatus > 0) 
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

  };
  
export default AppNav;