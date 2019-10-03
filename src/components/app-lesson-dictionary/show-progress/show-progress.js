import React from 'react';

const ShowProgress = ({progress}) => {  
    
    return (
      <div className='sProgress'>
        <div className='showProgressB'> 
        </div>
        <div className='showProgress' style={{width: `${progress}%`}}> 
          <div className='showProgressP'> 
          {progress}%
          </div>
        </div>
        
      </div>
    );        
}

export default ShowProgress;