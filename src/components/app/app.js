import React, { Component }  from 'react';
import AppNav from '../app-nav';
import AppHeader from '../app-header';
import AppMain from '../app-main';
import './app.css';
import {LessonsData} from '../../lessons-data';

export default class App extends Component {

    render() {
        return (
            <div className='Layout'>
                <div>
                    <AppHeader />
                    <AppMain lessons = {LessonsData}/>
                    <AppNav />
                </div>
            </div>
        );
    }
}