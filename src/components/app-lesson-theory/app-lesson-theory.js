import React from 'react';
import './app-lesson-theory.css';

import AppLesson1 from '../../data/lesson-1';
import AppLesson2 from '../../data/lesson-2';

const AppLessonTheory = ({pageStatus}) => {
  
        switch (pageStatus) {
            case 1:  
              return <AppLesson1 />             
          
            case 2: 
              return <AppLesson2 />
          
            default:
              return <AppLesson2 />;
          }
    }
export default AppLessonTheory;