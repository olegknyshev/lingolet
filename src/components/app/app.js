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
import {Switch, Route, Redirect} from 'react-router-dom';

export default class App extends Component {

    state = {
        isDark: false,
        isLogin: false,
        isFirstTime: true,
        lessonId: 0,
        transcripR: false,
        autoGo: false,
        soundPractik: true,
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
    }   

    render() { 
                   
        let routes = (
            <Switch>
              <Route path="/auth" component={Auth} />
              <Route path="/statistics" component={AppStatistics} />
              <Route path='/exam' render={(props) => (<AppExam {...props} settings={this.state}/>)}/>
              <Route path='/lesson/theory/:id' render={(props) => (<AppLessonTheory {...props} settings={this.state} onChange={ this.onToggleChange }/>)}/>             
              <Route path='/lesson/dictionary/:id' render={(props) => (<AppLessonDictionary {...props} settings={this.state} onChange={ this.onToggleChange }/>)}/>
              <Route path='/lesson/practice/:id' render={(props) => (<AppLessonPractice {...props} settings={this.state} onChange={ this.onToggleChange }/>)}/>        
              <Route path="/settings" render={(props) => <AppSettings {...props} settings = {this.state} onChange = {this.onToggleChange} />} />              
              <Route exact path="/" render={(props) => <AppMain {...props} onChange = {this.onToggleChange} isLogin = {this.state.isLogin}/>} />
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
}