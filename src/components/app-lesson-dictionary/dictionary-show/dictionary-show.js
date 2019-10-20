import React from 'react';

export default class DictShow extends React.Component {  

  state = {
    isKnow: true,
    isAnswer: false, 
    ifIsVerb: 0,
    isFinish: false
  };

  onClickShow(item) {
    const { wordData } = this.props;    
    
    if (wordData.type !== '1. infinitive')
    this.setState((state) => ({
      isAnswer: true, isKnow:false, isFinish:true
    })); 
    else {
      let value = this.state.ifIsVerb+1;
      let finish=false;     
      if (value === 3) finish=true;
      this.setState((state) => ({
        isAnswer: true, isKnow:false, ifIsVerb: value, isFinish: finish
      })); 
    }
  }

  render() {    
    
    let { wordData,  twoForms = [], soundPractik} = this.props;

    let wordThis = wordData;

    if (this.state.ifIsVerb === 2) wordThis = twoForms[0];
    if (this.state.ifIsVerb === 3) wordThis = twoForms[1];
    let buttonName;
    switch(this.state.ifIsVerb) {
      case 0: buttonName ='Не знаю'; break;
      case 1: buttonName ='2 форма'; break;
      case 2: buttonName ='3 форма'; break;
      case 3: buttonName ='теперь знаю'; break;
      default: buttonName ='Чудненько';
    }
    if (soundPractik && this.state.isAnswer) {
      setTimeout(window.responsiveVoice.speak(wordThis.word, "UK English Female"),100);
    }
    return (
      <div className='dictShow'>
        <div className='wordType'>{wordThis.type}</div>
        <div className='word'>{wordThis.word}</div>
        <div className='wordtranscription'>[&nbsp;{this.props.isTranscR ? wordThis.transcription[1] : wordThis.transcription[0] }&nbsp;] </div>
        <div className='wordtranslateQ'>
          {this.state.isAnswer 
            ? wordThis.translate 
            : '_ _ _ _ _ _'
          }
        </div>        
        <div className='buttonknow'>
          <button disabled={this.state.isFinish}
            onClick={() => this.onClickShow(wordThis.word)}
          >{buttonName}</button>
          <button className='yes'
            onClick={() => {this.setState({isKnow: true, isAnswer: false, ifIsVerb: 0, isFinish: false}); this.props.onAnswer('SHOWWORD', wordData.id, this.state.isKnow)}}
          >Дальше</button>

        </div>
      </div>
    ); 
  }       
}