import React, { Component }  from 'react';
import AppNav from '../app-nav';
import AppHeader from '../app-header';
import AppMain from '../app-main';
import AppExam from '../app-exam';
import AppLessonDictionary from '../app-lesson-dictionary';
import AppLessonTheory from '../app-lesson-theory';
import AppLessonPractice from '../app-lesson-practice';
import Auth from '../auth';
import AppSettings from '../app-settings';
import AppStatistics from '../app-statistics';
import './app.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

export default class App extends Component {

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
              <Route path="/" exact component={AppMain} />
              <Redirect to="/" />
            </Switch>
          )

        return (
            <div className='Layout'>
                <div>
                    <AppHeader />
                    <Router>                        
                        { routes }
                    </Router>                    
                    <AppNav />
                </div>
            </div>
        );
    }
}