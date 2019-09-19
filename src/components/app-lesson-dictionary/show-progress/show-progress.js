import React from 'react';

const ShowProgress = () => {  
 
    return (
      <div>
        <div className='showProgressB'> 
        </div>
        <div className='showProgress' style={{width: 'calc(30% - 40px)'}}> 
        </div>
        <div className='showProgressP'> 
        30%
        </div>
      </div>
    );        
}

export default ShowProgress;