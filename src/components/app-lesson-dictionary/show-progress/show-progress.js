import React from 'react';

const ShowProgress = ({progress}) => {  
    
    return (
      <div className='sProgress'>
        <div className='showProgressB'> 
        </div>
        <div className='showProgress' style={{width: `calc(${progress}% - 60px)`}}> 
          <div className='showProgressP'> 
          {progress}%
          </div>
        </div>
        
      </div>
    );        
}

export default ShowProgress;