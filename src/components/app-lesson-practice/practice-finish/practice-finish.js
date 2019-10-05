import React from 'react';
import {NavLink} from 'react-router-dom';

const PracticeFinish = ({lessonId}) => {
  return (
    <div className='finishTest'>
      <i className="fas fa-medal fa-5x"></i>
      <h2>Поздравляю!<br />
      Вы прошли данный урок!</h2>
      <div>
        <NavLink
                  to='/'
                  exact={true}
                  // onClick={() => onChange({lessonId:0})}
              >  
                  К списку уроков
        </NavLink>
        <NavLink
                  to={`/lesson/dictionary/${ lessonId }`}
                  exact={true}
                  // onClick={() => onChange({lessonId:0})}
              >  
                  Повторить слова
        </NavLink>
      </div>      
    </div>
  );
}
export default PracticeFinish;