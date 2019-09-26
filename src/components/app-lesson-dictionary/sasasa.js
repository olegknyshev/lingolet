import React, { Component }  from 'react';
import DictList from './dictionary-list/';
import DictShow from './dictionary-show/';
import DictQwest from './dictionary-qwest/';
import DictWrite from './dictionary-write/';
import ShowProgress from './show-progress/';
import './app-lesson-dictionary.css';

import {LessonsDic} from '../../data/lessons-dict';


export default class AppLessonDictionary extends Component {

    state = {
        lessonId: +this.props.match.params.id,        
        nextTest: 'SHOWALL',
        isTranscR: true,
        countWord: 0,
        progress: [],
        actualWord: {}
    };

   onlyThisLesson() {
       return LessonsDic.filter((item) => { return item.lesson === this.state.lessonId}); 
   }

   findItemFromId(idx) { 
       const arr = this.onlyThisLesson();    
       const id = arr.findIndex((item) => item.id === idx.id);
       return arr[id];
   }

   progressIs() {
       let total = this.state.progress.length;
       let right = this.state.progress.filter((item) => { return item.right === 5}).length;
       let totalProgress= right*100/total;
       return totalProgress.toFixed();   
   }

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
   }

    componentDidMount() {
        let stateData = this.fromLocalStorage();
        stateData.nextTest = 'SHOWALL';
        this.setState((state) => {         
            return stateData;
        });
    }

    componentDidUpdate() {
        localStorage.setItem(`lessonDic${this.state.lessonId}`, JSON.stringify(this.state));
    }
    
    isNewWord() {            
        const idx = this.state.progress.findIndex((item) => item.show === false);        

        return this.onlyThisLesson()[idx]; 
    }

    isOldWord() {
        const Arr = this.state.progress;
        const ArrShowedWord = Arr.filter((item) => item.show === true);
        const idx = Math.floor(Math.random()*ArrShowedWord.length);        
        const data = this.findItemFromId(ArrShowedWord[idx]);
        return data;               
    }

    wrongData() {
        let wrongDataE=[]; 
        let wrongDataR=[]; 
        const ArrShowedWord = this.state.progress.filter((item) => item.show === true);
        while (wrongDataE.length < 6) {            
            const idx = Math.floor(Math.random()*ArrShowedWord.length);
            const data = this.findItemFromId(ArrShowedWord[idx]);

            if (!wrongDataE.includes(data.word)) { 
                wrongDataE.push(data.word); wrongDataR.push(data.translate);                
            }            
        }
        let wrongData = [wrongDataE, wrongDataR];        
        return wrongData;
    }
    
    handleNext = (type, id, answer) => {
        let nextTest = 'SHOWALL';    
              
        if (this.state.countWord < 6) nextTest = 'SHOWWORD';
        else {            
            switch (Math.floor(Math.random()*6)) {
                case 1: nextTest = 'SHOWWORD'; break;
                case 2: nextTest = 'SHOWAGAIN'; break;
                case 3: nextTest = 'QWESTWORDA'; break;
                case 4: nextTest = 'QWESTWORDR'; break;
                case 5: nextTest = 'WRITEWORD'; break;
                default: nextTest = 'QWESTWORDA';
            }
        };
        const haveNew = this.state.progress.findIndex((item) => item.show === false);
        if (haveNew === -1) nextTest = 'QWESTWORDA';

        if (type !== 'SHOWALL') {
            let countWord = this.state.countWord+1; 
            const idx = this.state.progress.findIndex((item) => item.id === id);        
            let item = {};
            if (type === 'SHOWWORD' || type === 'SHOWAGAIN') 
                item = { ...this.state.progress[idx], 
                    'show': true, 
                    'know': answer, 
                    'count': this.state.progress[idx].count+1
                    };  
            else {
                let isRight;
                let isWrong;
                if (answer) {isRight = this.state.progress[idx].right+1; isWrong = this.state.progress[idx].wrong;}
                else {isRight = this.state.progress[idx].right; isWrong = this.state.progress[idx].wrong+1;}
                item = { ...this.state.progress[idx], 
                    'right': isRight, 
                    'wrong': isWrong, 
                    'count': this.state.progress[idx].count+1
                    };
            }         
            
               const progress = [
                  ...this.state.progress.slice(0, idx),
                  item,
                  ...this.state.progress.slice(idx + 1)
                ];        
                 
               this.setState({countWord, progress, nextTest});
        }

        else this.setState({nextTest});        
    }

    render() {
        
        let body = '';
        switch (this.state.nextTest) {
            case 'SHOWALL': body = (<DictList dataDict={this.onlyThisLesson()} onChange={ this.handleNext } isTranscR={ this.state.isTranscR }/>); break;
            case 'SHOWWORD': body = (<DictShow onAnswer={this.handleNext} wordData={this.isNewWord()} isOld={false} isTranscR={ this.state.isTranscR }/>); break;
            case 'SHOWAGAIN': body = (<DictShow onAnswer={this.handleNext} wordData={this.isOldWord()} isOld={true} isTranscR={ this.state.isTranscR }/>); break;
            case 'QWESTWORDA': body = (<DictQwest onAnswer={this.handleNext} wordData={this.isOldWord()} isTranscR={ this.state.isTranscR } route={'ENGRUS'} wrongData={this.wrongData()}/>); break;
            case 'QWESTWORDR': body = (<DictQwest onAnswer={this.handleNext} wordData={this.isOldWord()} isTranscR={ this.state.isTranscR } route={'RUSENG'} wrongData={this.wrongData()}/>); break;
            case 'WRITEWORD': body = (<DictWrite onAnswer={this.handleNext} wordData={this.isOldWord()} isTranscR={ this.state.isTranscR }/>); break;
            default: body = 'что-то пошло не так...';
        }

        return (
            <div className='dictionary'>   
              {body}
              <ShowProgress progress={this.progressIs()}/>
            </div>
        );        
    }
}