import React from 'react';

export default class DictWrite extends React.Component {  
  
  state={
    isAnswer: false,
    isTrue: true,
    wordInput: '',
    tipColor: false,
    indexLetter:0,
    nextLetter:'',
    wrongAnswer: 0,
  };
  
  clickAnswer(item) {
     
    const word = this.props.wordData.word;     
    if (item === word[this.state.indexLetter]) {
      let indexLetter = this.state.indexLetter+1;
      const wordInput = this.state.wordInput + item;
      let isAnswer = false;
      const nextLetter = word[indexLetter];
      if (word === wordInput) isAnswer = true;
      this.setState({indexLetter, isAnswer, nextLetter, wordInput, wrongAnswer:0, tipColor:false});      
    }
    else {
      const wrongAnswer = this.state.wrongAnswer+1;
      let tipColor = false;
      if (wrongAnswer >= 3) tipColor = true;
      this.setState({isTrue: false, wrongAnswer, tipColor});
    }; 
       
  }

  onRightAnswer(item) {
    const {autoGo, soundPractik} = this.props;
    const congratulation = ['Супер!', 'Браво!', 'Отлично!', 'Гениально!', 'Прекрасно!', 'Талант!', 'Великолепно!', 'Умница!']
    let idx = Math.floor(Math.random()*congratulation.length);
    
    if (soundPractik) {
      setTimeout(window.responsiveVoice.speak(item, "UK English Female"),100);
    }
    if (autoGo) {
      setTimeout(() => {this.setState({isAnswer: false, isTrue: true, wordInput: '', tipColor: false, indexLetter:0, nextLetter:'', wrongAnswer: 0}); this.props.onAnswer('WRITEWORD', this.props.wordData.id, this.state.isTrue)}, 1000);      
      return (
        <div className='congratulation'>
          <h3>{this.state.isTrue ? congratulation[idx] : null}</h3>        
        </div>);
    } else {        
      return (
      <div className='congratulation'>
        <h3>{this.state.isTrue ? congratulation[idx] : null}</h3>
      <button 
        className='next'
        onClick={() => {this.setState({isAnswer: false, isTrue: true, wordInput: '', tipColor: false, indexLetter:0, nextLetter:'', wrongAnswer: 0}); this.props.onAnswer('WRITEWORD', this.props.wordData.id, this.state.isTrue)}}
        >Дальше</button>
      </div>);
    }
  }

  render() {

    const { wordData, isTranscR, letters } = this.props; 
    const tr = isTranscR ? wordData.transcription[1] : wordData.transcription[0];

    const elements = letters.map ((item, index) => 
      <button className={this.state.tipColor && item === wordData.word[this.state.indexLetter] ? 'tipColor' : null}
      key={item}
      onClick={() => this.clickAnswer(item)}
      >
      {item}
      </button>);

      if (this.state.isAnswer) {
        return (
          <div className='dictShow'>        
            <div className='word'>{wordData.translate}</div>      
            <div className='wordtranslateQwrite'>
              {this.state.wordInput}
            </div>
            <div className='wordtranscription'>[&nbsp;&nbsp; {tr} &nbsp;&nbsp;]</div>
            <div className='wordTypeWrite'>{wordData.type}</div>
            {this.onRightAnswer(this.state.wordInput)}  
          </div>
        ); 
      }
      else 
      return (
        <div className='dictShow'>        
          <div className='word'>{wordData.translate}</div>      
          <div className='wordtranslateQwrite'>
            {this.state.wordInput}
          </div>
          <div className='buttonWrite'>{elements}</div>   
        </div>
      ); 
  }     
}