import React from 'react';

export default class DictQwest extends React.Component { 

  state={
    isAnswer: false,
    isTrue: true,
    words:[],
    idxAnswer:-1,
    wrongAnswer: 0,
    tipColor: false
  };

  componentDidMount() {
    
    const { wordData, route, wrongData} = this.props;
    let word = '';
    let arr=[];
    if (route === 'RUSENG') {
      word = wordData.word;
      arr = wrongData[0];
   }
   else {
      word = wordData.translate;
      arr = wrongData[1];
   } 

   let idx = Math.floor(Math.random()*5.9999); 
 
   if (arr.includes(word)) idx = arr.indexOf(word);              
    else arr[idx] = word;

  this.setState({words: arr, idxAnswer: idx});
  }

  clickAnswer(index) {
    if (index === this.state.idxAnswer) {
      this.setState({isAnswer: true});
    }
    else {
      let tip = false;
      const value = this.state.wrongAnswer+1;
      if (value === 3) tip = true;
      this.setState({wrongAnswer: value, tipColor: tip, isTrue: false});
    }
  }

  onRightAnswer() {
    const congratulation = ['Супер!', 'Браво!', 'Отлично!', 'Гениально!', 'Прекрасно!', 'Талант!', 'Великолепно!', 'Умница!']
    let idx = Math.floor(Math.random()*congratulation.length);
        
    return (
    <div className='congratulation'>
      <h3>{this.state.isTrue ? congratulation[idx] : null}</h3>
    <button 
      className='next'
      onClick={() => {this.props.onAnswer('QWESTWORD', this.props.wordData.id, this.state.isTrue)}}
      >Дальше</button>
    </div>)
  }
  
  render() {
    const { wordData, route, isTranscR} = this.props;    
    let bodyWord = '';

    if (route === 'ENGRUS') 
      bodyWord = (
        <>
        <div className='word'>{wordData.word}</div>
        <div className='wordtranscription'>[&nbsp;&nbsp;
        {this.state.isAnswer 
          ? isTranscR ? wordData.transcription[1]  : wordData.transcription[0]
          : '_ _ _ _ _ _'
        }&nbsp;&nbsp;]             
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
      
      <div className='wordtranscription'>[&nbsp;&nbsp;
        {this.state.isAnswer 
          ? isTranscR ? wordData.transcription[1] : wordData.transcription[0]
          : '_ _ _ _ _ _'
        }  &nbsp;&nbsp;]              
        </div>
      <div className='wordtranslateQ'>
        {this.state.isAnswer 
          ? wordData.word 
          : '_ _ _ _ _ _'
        }
      </div>
      </>
    );
    
    const elements = this.state.words.map ((item, index) => 
      <button className={this.state.tipColor && index === this.state.idxAnswer ? 'tipColor' : null}
      key={index}
      onClick={() => this.clickAnswer(index)}
      >
      {item}
      </button>); 
      
      if (this.state.isAnswer) return   (
        <div className='dictShow'>
          {bodyWord}
          {this.onRightAnswer()}          
        </div>
      );  
      else return (
      <div className='dictShow'>
        {bodyWord}
        {/* {this.onRightAnswer()} */}
        <div className='buttonQwest'>
          {elements}
        </div>
      </div>
    ); 
    
  }
}