import React, { Component }  from 'react';
import AppNav from '../app-nav';
import AppHeader from '../app-header';
import AppMain from '../app-main';
import AppExam from '../app-exam';
import AppWelcome from '../app-welcome';
import AppLessonDictionary from '../app-lesson-dictionary';
import AppLessonTheory from '../app-lesson-theory';
import AppLessonPractice from '../app-lesson-practice';
import Auth from '../auth';
import AppSettings from '../app-settings';
import AppStatistics from '../app-statistics';
import './app.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

export default class App extends Component {

    state = {
        settings:{
            isDark: false,
            isLogin: false,
            isFirstTime: true,
            lessonId: 0,
            fontSize: 0,
            autoChek: true,
            autoGo: true,
            soundPractik: false,
            soundTwice: false,
            soundDict: false,
            soundDictTwice: false
        }
      };

      onNotFirst = () => {
        this.setState({
            settings:{isFirstTime: false}
          });
        };

    render() {
        let routes = (
            <Switch>
              <Route path="/auth" component={Auth} />
              <Route path="/exam" component={AppExam} />
              <Route path="/lesson/theory/:id" component={AppLessonTheory} />
              <Route path="/lesson/dictionary/:id" component={AppLessonDictionary} />
              <Route path="/lesson/practice/:id" component={AppLessonPractice} />
              <Route path="/settings" component={AppSettings} />
              <Route path="/statistics" component={AppStatistics} />
              <Route exact path="/" component={AppMain} />
              <Redirect to="/" />
            </Switch>
          );
 
        return (
            <div className= {this.state.settings.isDark ? 'Layout dark' : 'Layout'}>
                <div>
                    {this.state.settings.isFirstTime 
                        ? <AppWelcome onChange={ this.onNotFirst }/> 
                        : null}
                    
                    <AppHeader pageStatus = {this.state.settings.lessonId} isLogin = {this.state.settings.isLogin}/>
                    <Router> 
                    <main>                           
                        { routes } 
                    </main>  
                    <AppNav pageStatus = {this.state.settings.lessonId}/>
                    </Router> 
                </div>
            </div>
        );
    }
}