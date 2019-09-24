import React from 'react';

export default class DictQwest extends React.Component { 

  state={
    isAnswer: false,
    isWrong: 0
  };
  
  render() {

    const { wordData, route, wrongData, isTranscR} = this.props;
    
    let bodyWord = '';

    if (route === 'ENGRUS') 
      bodyWord = (
        <>
        <div className='word'>{wordData.word}</div>
        <div className='wordtranscription'>[
        {this.state.isAnswer 
          ? isTranscR ? wordData.transcription[1] + '<i className="fas fa-headphones"></i>' : wordData.transcription[0]  + '<i className="fas fa-headphones"></i>'
          : '_ _ _ _ _ _'
        }   ]             
        </div>
        <div className='wordtranslateQ'>
          {this.state.isAnswer 
            ? wordData.translate 
            : '_ _ _ _ _ _'
          }
        </div>
        </>
    );
    
    else bodyWord = (
      <>
      <div className='word'>{wordData.translate}</div>
      
      <div className='wordtranscription'>[
        {this.state.isAnswer 
          ? isTranscR ? wordData.transcription[1] + '<i className="fas fa-headphones"></i>' : wordData.transcription[0] + '<i className="fas fa-headphones"></i>'
          : '_ _ _ _ _ _'
        }  ]              
        </div>
      <div className='wordtranslateQ'>
        {this.state.isAnswer 
          ? wordData.word 
          : '_ _ _ _ _ _'
        }
      </div>
      </>
  );
  
    return (
      <div className='dictShow'>
        {bodyWord}
        <div className='buttonQwest'>
          <button>сказать</button>
          <button>ты</button>
          <button>брать</button>
          <button>я</button>
          <button>сидеть</button>
          <button>нуждаться</button> 
      </div>


        
      </div>
    ); 
    
  }
}