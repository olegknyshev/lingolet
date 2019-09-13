import React from 'react';
import './app-lesson-theory.css';

import AppLesson1 from './lesson-1';
import AppLesson2 from './lesson-2';

const AppLessonTheory = ({pageStatus}) => {

  console.log(pageStatus);

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