import React from 'react';

export default class PracticeTest extends React.Component {  

  state={
    isAnswer: false,
    isTrue: true,
    tipColor: false,
    wrongAnswer: 0,    
    phraseInput: '',
    indexWord: 0
  };

  clickAnswer(item, rightItem) {    
    if (item === rightItem) {
      const phrase = this.state.phraseInput + item + ' ';
      if (phrase.trim() === this.props.phrase.phrase.replace( /_/g, " " ).slice(0,-1).toLowerCase()) {
        this.setState({isAnswer: true, phraseInput: phrase});
      } else {
        const indexWord = this.state.indexWord + 1;
        this.setState({indexWord,  phraseInput: phrase, tipColor: false, wrongAnswer: 0});
      }      
    }
    else {
      let tip = false;
      const value = this.state.wrongAnswer+1;
      if (value >= 3) tip = true;
      this.setState({wrongAnswer: value, tipColor: tip, isTrue: false});
    }
  }

  onRightAnswer(item) {
    const congratulation = ['Супер!', 'Браво!', 'Отлично!', 'Гениально!', 'Прекрасно!', 'Талант!', 'Великолепно!', 'Умница!']
    let idx = Math.floor(Math.random()*congratulation.length);
    setTimeout(window.responsiveVoice.speak(item, "UK English Female", {}),100);
    return (
    <div className='congratulation'>
      <h3>{this.state.isTrue ? congratulation[idx] : null}</h3>
      
    <button 
      className='next'
      onClick={() => {this.setState({isAnswer: false, isTrue: true, tipColor: false, wrongAnswer: 0, phraseInput: '', indexWord: 0}); this.props.onAnswer(this.props.phrase.id, this.state.isTrue)}}
      >Дальше</button>
    </div>)
  }
  
  render() {    
    const { phrase, isTranscR} = this.props;

    if (this.state.isAnswer) {
      return (
        <div className='dictShow'>        
          <div className='word'>{phrase.translate}</div>      
          <div className='wordtranslateQwrite'>
            {phrase.phrase.replace( /_/g, " " )}
          </div>
          <div className='wordtranscription'>[&nbsp;&nbsp; {phrase.transcription[+isTranscR]} &nbsp;&nbsp;]</div>
          <div className='phraseType'>{phrase.type}</div>
          {this.onRightAnswer(phrase.phrase.replace( /_/g, " " ))}  
        </div>
      ); 
    }
    else {
      const elements = phrase.buttons[this.state.indexWord].map ((item, index) => 
      <button className={this.state.tipColor && item === phrase.indexRightButtons[this.state.indexWord] ? 'tipColor' : null}
      key={item}
      onClick={() => this.clickAnswer(item, phrase.indexRightButtons[this.state.indexWord])}
      >
      {item}
      </button>);
      return (
        <div className='dictShow'>        
          <div className='word'>{phrase.translate}</div>      
          <div className='wordtranslateQwrite'>
            {this.state.phraseInput}
          </div>
          <div className='phraseType'>{phrase.type}</div>
          <div className='buttonPractice'>{elements}</div>   
        </div>
      ); 
    }
  }
}