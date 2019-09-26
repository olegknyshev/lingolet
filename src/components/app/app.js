import React, { Component }  from 'react';
import AppNav from '../app-nav';
import AppHeader from '../app-header';
import AppMain from '../app-main';
import AppExam from '../app-exam';
import FromLocalStorage from '../../service/from-local-storage';
import AppWelcome from '../app-welcome';
import AppLessonDictionary from '../app-lesson-dictionary';
import AppLessonTheory from '../app-lesson-theory';
import AppLessonPractice from '../app-lesson-practice';
import Auth from '../auth';
import AppSettings from '../app-settings';
import AppStatistics from '../app-statistics';
import './app.css';
import {Switch, Route, Redirect, withRouter } from 'react-router-dom';

class App extends Component {

    state = {
        isDark: false,
        isLogin: false,
        isFirstTime: true,
        lessonId:  0,
        fontSize: 0,
        transcripR: false,
        autoChek: true,
        autoGo: true,
        soundPractik: false,
        soundTwice: false
    };

    componentDidMount() {
        let data = FromLocalStorage();

        this.setState((state) => {                       
            return data;
        });
        
    }

    componentDidUpdate() {
        
        localStorage.setItem('settings', JSON.stringify(this.state));
    }    
    
    onToggleChange = (elem) => {
        this.setState((state) => {         
            return elem;
        });
    }; 

    onToggleFont = (elem) => {
        
        this.setState((state) => { 
            if (elem.fontSize === 0)
            document.body.style.fontSize = '16px';
            if (elem.fontSize === -1)
            document.body.style.fontSize = '13px';
            if (elem.fontSize === 1)
            document.body.style.fontSize = '20px';
            return elem;
        });
        
    };         

    render() {  
        
        let routes = (
            <Switch>
              <Route path="/auth" component={Auth} />
              <Route path="/exam" component={AppExam} />              
              <Route path="/lesson/theory/:id" component={AppLessonTheory} /> 
              <Route path="/lesson/dictionary/:id" component={AppLessonDictionary} />               
              <Route path="/lesson/practice/:id" render={() => <AppLessonPractice  pageStatus = {this.state.lessonId}/>} />              
              <Route path="/settings" render={() => <AppSettings  settings = {this.state} onChange = {this.onToggleChange} onChangeFont = {this.onToggleFont}/>} />              <Route path="/statistics" component={AppStatistics} />              
              <Route exact path="/" render={() => <AppMain onChange = {this.onToggleChange}/>} />
              <Redirect to="/" />
            </Switch>
        );
 
        return (
            <div className= {this.state.isDark ? 'Layout dark' : 'Layout'}>
                <div>
                    {this.state.isFirstTime 
                        ? <AppWelcome onChange={ this.onToggleChange }/> 
                        : null}
                    
                        <AppHeader pageStatus = {this.state.lessonId} isLogin = {this.state.isLogin} onChange={ this.onToggleChange }/>                        
                        <main>                           
                            { routes } 
                        </main>                                        
                        <AppNav pageStatus = {this.state.lessonId} onChange={ this.onToggleChange }/>
                    
                </div>
            </div>
        );
    }
};

export default withRouter(App);