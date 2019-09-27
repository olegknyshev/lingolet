import React from 'react';
import {NavLink} from 'react-router-dom';

const DictFinish = () => {
  return (
    <div className='finishTest'>
      <i className="fas fa-medal fa-7x"></i>
      <h2>Поздравляю!<br />
      Вы выучили словарь данного урока!</h2>
      <div>
        <NavLink
                  to='/'
                  exact={true}
                  // onClick={() => onChange({lessonId:0})}
              >  
                  К списку уроков
        </NavLink>
        <NavLink
                  to='/'
                  exact={true}
                  // onClick={() => onChange({lessonId:0})}
              >  
                  К практике урока
        </NavLink>
      </div>      
    </div>
  );
}
export default DictFinish;