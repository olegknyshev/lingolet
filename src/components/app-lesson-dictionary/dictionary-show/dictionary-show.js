import React from 'react';

export default class DictShow extends React.Component {  

  state = {
    isKnow: true,
    isAnswer: false,
    buttonYes: 'знаю'
  };

  render() {
    

    const { wordData } = this.props;
    
    return (
      <div className='dictShow'>
        <div className='word'>{wordData.word}</div>
        <div className='wordtranscription'>[&nbsp;{this.props.isTranscR ? wordData.transcription[1] : wordData.transcription[0] }&nbsp;] <i className="fas fa-headphones"></i></div>
        <div className='wordtranslateQ'>
          {this.state.isAnswer 
            ? wordData.translate 
            : '_ _ _ _ _ _'
          }
        </div>        
        <div className='buttonknow'>
          <button
            onClick={() => this.setState({isAnswer: true, buttonYes: 'дальше...', isKnow:false})}
          >
            <i className="far fa-surprise fa-2x"></i> не знаю 
          </button>
          <button className='yes'
            onClick={() => {this.setState({isKnow: true, isAnswer: false, buttonYes: 'знаю'}); this.props.onAnswer('SHOWWORD', wordData.id, this.state.isKnow)}}
          >
            <i className="far fa-smile fa-2x"></i> {this.state.buttonYes}
          </button>

        </div>
      </div>
    ); 
  }       
}