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
        isDark: false,
        isLogin: false,
        isFirstTime: false,
        pageStatus: 0,
        isLoggin: false,
        lessonId: 0,
        fontSize: 0,
        autoChek: true,
        autoGo: true,
        soundPractik: false,
        soundTwice: false,
        soundDict: false,
        soundDictTwice: false
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
            <div className= {this.state.isDark ? 'Layout dark' : 'Layout'}>
                <div>
                    {this.state.isFirstTime ? <AppWelcome /> : null}
                    
                    <AppHeader pageStatus = {this.state.pageStatus}/>
                    <Router> 
                    <main>                           
                        { routes } 
                    </main>  
                    <AppNav />
                    </Router> 
                </div>
            </div>
        );
    }
}