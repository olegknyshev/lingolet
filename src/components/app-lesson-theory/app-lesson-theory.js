import React, { Component }  from 'react';
import './app-lesson-theory.css';

import AppLesson1 from './lesson-1';
import AppLesson2 from './lesson-1';

export default class AppLessonTheory extends Component {  
    
    state = {
        lessonId:1     
      };


    render() {

        switch (this.state.lessonId) {
            case 1:  
              return <AppLesson1 />
             
          
            case 2: 
              return <AppLesson2 />
          
            default:
              return null;
          }
    }
}