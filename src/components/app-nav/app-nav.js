import React, { Component } from 'react';
import './app-nav.css';

export default class AppNav extends Component {

    render() {
        const AppNavList = () => {
            return (
                <div className='AppNavTab Active'>
                    <i className="far fa-list-alt fa-2x"></i>
                    Уроки
                </div>
            );
        }
        
        const AppNavSettings = () => {
            return (
                <div className='AppNavTab'>
                    <i className="fas fa-cogs fa-2x"></i>
                    Настройки
                </div>
            );
        }
        
        const AppNavProgress = () => {
            return (
                <div className='AppNavTab'>
                    <i className="fas fa-chart-line fa-2x"></i>
                    Статистика
                </div>
            );
        }
        
        const AppNavTest = () => {
            return (
                <div className='AppNavTab'>
                    <i className="far fa-file-alt fa-2x"></i>
                    Экзамен
                </div>
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