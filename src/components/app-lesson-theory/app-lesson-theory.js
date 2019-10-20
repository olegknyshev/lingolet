import React from 'react';
import './app-lesson-theory.css';

import AppLesson1 from '../../data/lesson-1';
import AppLesson2 from '../../data/lesson-2';

const AppLessonTheory = (props) => {

        if (props.settings.lessonId !== +props.match.params.id) props.onChange({lessonId:+props.match.params.id});
  
        switch (+props.match.params.id) {
            case 1:  
              return <AppLesson1 />             
          
            case 2: 
              return <AppLesson2 />
          
            default:
              return <AppLesson2 />;
          }
    }
export default AppLessonTheory;