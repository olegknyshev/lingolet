import React, { Component }  from 'react';
import DictList from './dictionary-list/';
import DictShow from './dictionary-show/';
import {LessonsDic} from '../../data/lessons-dict';
import DictQwest from './dictionary-qwest/';
import DictWrite from './dictionary-write/';
import ShowProgress from './show-progress/';

import './app-lesson-dictionary.css';

export default class AppLessonDictionary extends Component {

    state = {
        lessonId: +this.props.match.params.id,        
        isStart: true,
        isTranscR: true,
        countWord: 0,
        progress: []
    };

   onlyThisLesson() {
       return LessonsDic.filter((item) => { return item.lesson === this.state.lessonId}); 
   };

   progressIs() {
       let total = this.state.progress.length;
       let right = this.state.progress.filter((item) => { return item.right === 5}).length;
       let totalProgress= right*100/total;
       return totalProgress.toFixed();   
   };

   fromLocalStorage() {
    if (localStorage.getItem(`lessonDic${this.state.lessonId}`)) {
        let data = localStorage.getItem(`lessonDic${this.state.lessonId}`);
        data = JSON.parse(data);
        return data; }
        else {
            const dict = this.onlyThisLesson(); 
            const stateDict = dict.map (item => {
                let elem = {id: item.id, show: false, right: 0, wrong: 0, know: false, count: 0};      
                return elem;
            }); 
            let data = {progress: stateDict}; 
            return data;
        }
   };

    componentDidMount() {
        let stateData = this.fromLocalStorage();
        stateData.isStart = true;
        this.setState((state) => {         
            return stateData;
        });
    }

    componentDidUpdate() {
        localStorage.setItem(`lessonDic${this.state.lessonId}`, JSON.stringify(this.state));
    }

    onToggleChange = (elem) => {
        this.setState((state) => {         
            return elem;
        });
    }; 
    
    onNextWord = (id, type, answer) => {
        const idx = this.state.progress.findIndex((item) => item.id === id);        
        // const oldItem = this.state.progress[idx]; 
        let item = {};
        if (type === 'SHOW') item = { ...this.state.progress[idx], 'show': true, 'know': answer, count: this.state.progress[idx].count+1} ;     
        // const value = oldItem.show+1;    
        // item = { ...this.state.progress[idx], 'show': value } ;
        const newState = [
          ...this.state.progress.slice(0, idx),
          item,
          ...this.state.progress.slice(idx + 1)
        ];        
        let count = this.state.countWord+1;     
        this.setState({countWord: count, progress:newState});
    };

    render() {
        let nextTest = '';
        let wordData={};        
        const idxNew = this.state.progress.findIndex((item) => item.show === false);        
        const idxOldArr = this.state.progress.map((item) => item.show === true);
        const idxOld = Math.floor(Math.random()*idxOldArr.length);
        wordData = this.onlyThisLesson()[idxOld]; 
        let wrongDataE=[]; 
        let wrongDataR=[];

        // if (this.state.isStart===false) {
        //     wrongDataE[Math.floor(Math.random()*5.9999)] = wordData.word;
        //     wrongDataR[Math.floor(Math.random()*5.9999)] = wordData.translate;
        // };

        while (wrongDataE.length < 6) {            
            const idxx = Math.floor(Math.random()*idxOldArr.length);
            const idxxW = this.onlyThisLesson()[idxx].word;
            wrongDataE.push(idxxW);      
            if (wrongDataE.includes(idxxW)) {
                console.log('dfdfdffd');                
            }            
        }

        console.log(wrongDataE, wrongDataR)

        
        
        
        
        
        if (this.state.countWord < 6) {nextTest = 'SHOWWORD'; wordData = this.onlyThisLesson()[idxNew];}
        else {
            
            switch (Math.floor(Math.random()*4.9999)) {
                case 1: 
                    nextTest = 'SHOWWORD';                    
                    if (idxNew!==-1) wordData = this.onlyThisLesson()[idxNew];
                    else nextTest = 'SHOWAGAIN';                  
                    break;
                case 2: nextTest = 'SHOWAGAIN'; break;
                case 3: nextTest = 'QWESTWORDA'; break;
                case 4: nextTest = 'QWESTWORDR'; break;
                case 5: nextTest = 'WRITEWORD'; break;
                default: nextTest = 'SHOWAGAIN';
            };
        };

        if (this.state.isStart===true) nextTest = 'SHOWLIST';

        let body = '';
        switch (nextTest) {
            case 'SHOWWORD': body = (<DictShow onAnswer={this.onNextWord} wordData={wordData} isOld={false} isTranscR={ this.state.isTranscR }/>); break;
            case 'QWESTWORDA': body = (<DictQwest onAnswer={this.onNextWord} wordData={wordData} isTranscR={ this.state.isTranscR } route={'ENGRUS'} wrongData={wrongDataE}/>); break;
            case 'QWESTWORDR': body = (<DictQwest onAnswer={this.onNextWord} wordData={wordData} isTranscR={ this.state.isTranscR } route={'RUSENG'} wrongData={wrongDataR}/>); break;
            case 'WRITEWORD': body = (<DictWrite onAnswer={this.onNextWord} wordData={wordData} isTranscR={ this.state.isTranscR }/>); break;
            case 'SHOWAGAIN': body = (<DictShow onAnswer={this.onNextWord} wordData={wordData} isOld={true} isTranscR={ this.state.isTranscR }/>); break;
            default: body = (<DictList dataDict={this.onlyThisLesson()} onChange={ this.onToggleChange } isTranscR={ this.state.isTranscR }/>);
        }

        return (
            <div className='dictionary'>   
              {body}
              <ShowProgress progress={this.progressIs()}/>
            </div>
        );        
    }
}