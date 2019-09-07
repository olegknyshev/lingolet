import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './app-nav.css';

export default class AppNav extends Component {

    render() {
        const AppNavList = () => {
            return (
                <NavLink
                    to='/'
                    exact='true'
                    activeClassName='active'
                >                    
                        <i className="far fa-list-alt fa-2x"></i>
                        Уроки                   
                </NavLink>
            );
        }
        
        const AppNavSettings = () => {
            return (
                <NavLink
                    to='/settings'
                    exact='false'
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
                    exact='false'
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
                    exact='false'
                    activeClassName='active'
                >
                    <i className="far fa-file-alt fa-2x"></i>
                    Экзамен                   
                </NavLink>
            );
        }

        return (
            <nav>
                <AppNavList />
                <AppNavProgress />
                <AppNavTest />
                <AppNavSettings />
            </nav>
        );
    }
}