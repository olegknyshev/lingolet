import React, { Component }  from 'react';
import DictList from './dictionary-list/';
import DictShow from './dictionary-show/';
import DictQwest from './dictionary-qwest/';
import DictWrite from './dictionary-write/';
import DictFinish from './dictionary-finish/';
import ShowProgress from './show-progress/';
import './app-lesson-dictionary.css';

import {LessonsDic} from '../../data/lessons-dict';


export default class AppLessonDictionary extends Component { 

    static defaultProps = { maxLoops: 3,  isTranscR: false, isFirst: true};

    state = {        
        isFirst: this.props.isFirst,       
        countWord: 0,
        progress: []
    };


   onlyThisLesson() {
       return LessonsDic.filter((item) => { return item.lesson ===  +this.props.match.params.id}); 
   }

   findItemFromId(idx) { 
       const arr = this.onlyThisLesson(); 
       const id = arr.findIndex((item) => item.id === idx.id);       
       return arr[id];
   }

   findIdxFromId(idx) { 
    const arr = this.onlyThisLesson(); 
    const id = arr.findIndex((item) => item.id === idx);       
    return id;
}

   progressIs() {       
       const  arr =this.state.progress;
       let total = arr.length*this.props.maxLoops;
       const sum = arr.reduce((partial_sum, a) => partial_sum + a.right,0); 
       let totalProgress= sum*100/total;
       return totalProgress.toFixed();   
   }

   fromLocalStorage() {
    if (localStorage.getItem(`lessonDic${+this.props.match.params.id}`)) {
        let data = localStorage.getItem(`lessonDic${+this.props.match.params.id}`);
        data = JSON.parse(data);
        return data; }
        else {
            const dict = this.onlyThisLesson(); 
            const stateDict = dict.map (item => {
                let elem = {id: item.id, show: false, right: 0, wrong: 0, know: false, count: 0, type: item.type};      
                return elem;
            }); 
            let data = {progress: stateDict}; 
            return data;
        }
   }

    componentDidMount() {        
        let stateData = this.fromLocalStorage();
        stateData.isFirst = true;
        this.setState((state) => {         
            return stateData;
        });
    }

    componentDidUpdate() {
        localStorage.setItem(`lessonDic${+this.props.match.params.id}`, JSON.stringify(this.state));
    }

    isOldWord() {
        const Arr = this.state.progress;             
        const ArrShowedWord = Arr.filter((item) => item.show === true && item.right < this.props.maxLoops);        
        const idx = Math.floor(Math.random()*ArrShowedWord.length);  
        const data = this.findItemFromId(ArrShowedWord[idx]);        
        return data;               
    }

    isNewWordForShow() { 
        const idx = this.state.progress.findIndex((item) => item.show === false 
                                                            && item.right < this.props.maxLoops
                                                            && item.type !== '2. past' 
                                                            && item.type !== '3. perfect');
        return this.onlyThisLesson()[idx]; 
    }

    isOldWordForShow() {
        const Arr = this.state.progress;             
        const ArrShowedWord = Arr.filter((item) => item.show === true 
                                                    && item.right < this.props.maxLoops
                                                    && item.type !== '2. past' 
                                                    && item.type !== '3. perfect');      
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
            const eng = data.word;
            const rus = data.translate;
            // const p = /\s\(\d форма\)/;
            // const rus = data.translate.replace(p,'');
            
            if (!wrongDataE.includes(eng) && !wrongDataR.includes(rus)) { 
                wrongDataE.push(eng); wrongDataR.push(rus);                
            }            
        }
        let wrongData = [wrongDataE, wrongDataR];        
        return wrongData;
    }
    
    handleNext = (type, id, answer) => { 
        
        if (type !== 'SHOWALL') {
            
            let countWord = this.state.countWord+1; 
            const idx = this.state.progress.findIndex((item) => item.id === id);  
            const count = this.state.progress[idx].count+1;      
            let item = {};            
            if (type === 'SHOWWORD') 
                {item = { ...this.state.progress[idx], 
                    'show': true, 
                    'know': answer, 
                    'count': count
                    };
                }
            else { 
                let isRight = this.state.progress[idx].right;
                let isWrong = this.state.progress[idx].wrong;
                if (answer) isRight++; else {isRight=0; isWrong++;}
                item = { ...this.state.progress[idx], 
                     'right': isRight, 
                     'wrong': isWrong, 
                    'count': count
                    }; 
            };
               
                let progress =[];
                if (this.onlyThisLesson()[idx].also) {
                    const [a,b] = this.onlyThisLesson()[idx].also;
                    let item2 = {};  
                    let item3 = {};                     
                    item2 = { ...this.state.progress[this.findIdxFromId(a)], 
                        'show': true, 
                        'know': answer, 
                        'count': count
                        };
                    item3 = { ...this.state.progress[this.findIdxFromId(b)], 
                        'show': true, 
                        'know': answer, 
                        'count': count
                        };

                    progress = [
                        ...this.state.progress.slice(0, idx),
                        item, item2, item3,
                        ...this.state.progress.slice(this.findIdxFromId(b) + 1)
                      ];                       
                }
                else 
                progress = [
                    ...this.state.progress.slice(0, idx),
                    item,
                    ...this.state.progress.slice(idx + 1)
                  ]; 


               this.setState((state) => ({
                countWord, progress
              }));
        } 
        else this.setState((state) => ({
            isFirst: false
          })); 
    }

    isFinish() {
        const isAllLearned = this.state.progress.findIndex((item) => item.right < this.props.maxLoops);
        if (isAllLearned === -1) return true; else return false;
    }

    chooseNextTest() {
        let nextTest;
        if (this.state.isFirst) nextTest = 'SHOWALL'; 
        else {
            if (this.state.countWord < 6) nextTest = 'SHOWWORD';
            else {            
                switch (Math.floor(Math.random()*10)) {
                    case 0:
                    case 1:
                    case 2:
                    case 3: nextTest = 'QWESTWORDA'; break;
                    case 4:
                    case 5:
                    case 6: nextTest = 'QWESTWORDR'; break;
                    case 7: nextTest = 'SHOWAGAIN'; break; 
                    case 8: 
                    case 9:              
                    case 10: nextTest = 'WRITEWORD'; break;
                    default: nextTest = 'QWESTWORDA';
                }
            }
        } 
        if (!this.state.countWord%5) nextTest = 'SHOWWORD';
        const ArrShowedWord = this.state.progress.filter((item) => item.show === true && item.right < this.props.maxLoops);    
        if (ArrShowedWord.length === 0) nextTest = 'SHOWWORD';
        if (this.isFinish()) nextTest = 'FINISH';
        if (this.state.isFirst) nextTest = 'SHOWALL'; 
        console.log(nextTest);             
        return nextTest;
    }

    chooseNextWord(nextTest) {
        let word;
        if (nextTest === 'SHOWALL' || nextTest === 'FINISH') return null;
        else {
            const haveNew = this.state.progress.findIndex((item) => 
                                                        item.show === false 
                                                        && item.right < this.props.maxLoops
                                                        && item.type !== '2. past' 
                                                        && item.type !== '3. perfect');
            if (nextTest === 'SHOWWORD') {
                if (haveNew === -1) word = this.isOldWordForShow(); else word = this.isNewWordForShow();
            }
            else {
                if (nextTest === 'SHOWAGAIN') word = this.isOldWordForShow();
                else word = this.isOldWord();
            }
        }
        return word;
    }

    addTwoFormsVerb(word) {
        const arrW = word.also;
        const arr = this.onlyThisLesson(); 
        const id = arr.findIndex((item) => item.id === arrW[0]);       
        const v1 = arr[id];
        const id2 = arr.findIndex((item) => item.id === arrW[1]); 
        const v2 = arr[id2];        
        return [v1, v2];
    }

    makeLettersArr(word) {
        let arr = [...new Set([...word])];
        const characters = 'abcdefghijklmnopqrstuvwxyz';
        
        while (arr.length < 10) {            
        const letter = characters.charAt(Math.floor(Math.random() * characters.length));

            if (!arr.includes(letter)) { 
                arr.push(letter);              
            }            
        }
        // const shuffledArr = arr.sort(function(){
        //     return Math.random() - 0.5;
        //   });

        let j, temp;
	    for(let i = arr.length - 1; i > 0; i--){
		j = Math.floor(Math.random()*(i + 1));
		temp = arr[j];
		arr[j] = arr[i];
		arr[i] = temp;
        }
	    return arr;
    }

    render() {
        let nextTest = this.chooseNextTest();       
        let word = this.chooseNextWord(nextTest);        
        let twoForms = {};
        if (word !== null && word.type === '1. infinitive') twoForms = this.addTwoFormsVerb(word);        
        let wrongData = [];
        let letters = [];
        if (nextTest === 'QWESTWORDA' || nextTest === 'QWESTWORDR') wrongData = this.wrongData(); 
        if (nextTest === 'WRITEWORD') letters = this.makeLettersArr(word.word);       
        let body;
        switch (nextTest) {
            case 'SHOWALL': body = (<DictList dataDict={this.onlyThisLesson()} onChange={ this.handleNext } isTranscR={ this.props.isTranscR }/>); break;
            case 'SHOWWORD': body = (<DictShow onAnswer={this.handleNext} wordData={word} isTranscR={ this.props.isTranscR } twoForms={twoForms}/>); break;
            case 'SHOWAGAIN': body = (<DictShow onAnswer={this.handleNext} wordData={word} isTranscR={ this.props.isTranscR } twoForms={twoForms}/>); break;
            case 'QWESTWORDA': body = (<DictQwest onAnswer={this.handleNext} wordData={word} isTranscR={ this.props.isTranscR } route={'ENGRUS'} wrongData={wrongData}/>); break;
            case 'QWESTWORDR': body = (<DictQwest onAnswer={this.handleNext} wordData={word} isTranscR={ this.props.isTranscR } route={'RUSENG'} wrongData={wrongData}/>); break;
            case 'WRITEWORD': body = (<DictWrite onAnswer={this.handleNext} wordData={word} isTranscR={ this.props.isTranscR } letters={letters}/>); break;
            case 'FINISH': body = (<DictFinish lessonId = {+this.props.match.params.id}/>); break;
            default: body = 'что-то пошло не так...';
        }

        return (
            <div className='divDict'>
            <div className='dictionary'>   
              {body}              
            </div>
            <ShowProgress progress={this.progressIs()}/>
            </div>
        );        
    }
}