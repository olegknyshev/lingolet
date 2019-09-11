import React, { Component }  from 'react';
import Lesson1 from '../../html/1';
import './app-lesson-theory.css';

export default class AppLessonTheory extends Component {  
    
    state = {
        lessonId:1     
      };


    render() {

        return (
            <Lesson1 />
        );  
    }
}