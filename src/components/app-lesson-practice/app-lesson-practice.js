import React, { Component }  from 'react';
import PracticeTest from './practice-test/';
import ShowProgress from '../app-lesson-dictionary/show-progress/';
import PracticeFinish from './practice-finish';
import './app-lesson-practice.css';

import {LessonsPractice} from '../../data/lessons-practice';


export default class AppPractice extends Component {

    static defaultProps = { maxLoops: 3};

    state = {           
        countTest: 0,
        progress: [{id: 1, right: 5, wrong: 0, count: 0}]
    };

    onlyThisLesson() {
        return LessonsPractice.filter((item) => { return item.lesson ===  +this.props.match.params.id}); 
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
        if (localStorage.getItem(`lessonPractice${+this.props.match.params.id}`)) {
            let data = localStorage.getItem(`lessonPractice${+this.props.match.params.id}`);
            data = JSON.parse(data);
            return data; 
        } else {
            const practice = this.onlyThisLesson(); 
            const statePr = practice.map (item => {
                let elem = {id: item.id, right: 0, wrong: 0, count: 0};      
                return elem;
            }); 
            let data = {progress: statePr}; 
            return data;
        }
    }

    componentDidMount() {         
        let stateData = this.fromLocalStorage();        
        this.setState((state) => {         
            return stateData;
        });
    }

    componentDidUpdate() {
        localStorage.setItem(`lessonPractice${+this.props.match.params.id}`, JSON.stringify(this.state));
    }

    isFinish() {
        const isAllLearned = this.state.progress.findIndex((item) => item.right < this.props.maxLoops);
        return (isAllLearned === -1) ? true : false;
    }

    chooseButtons(rightWord, arrButton) {
        let dataButton = [];
        while (dataButton.length < 6) {
            const word = arrButton[Math.floor(Math.random()*arrButton.length)];            
            if (!dataButton.includes(word)) { 
                dataButton.push(word);                
            }            
        }

        let idx = Math.floor(Math.random()*5.9999); 
 
        if (!dataButton.includes(rightWord)) dataButton[idx] = rightWord;             
         
         return dataButton;
    }

    chooseNextTest() {
        const Arr = this.state.progress;             
        const ArrFiltered = Arr.filter((item) => item.right < this.props.maxLoops);      
        const idx = Math.floor(Math.random()*ArrFiltered.length);  
        const data = this.findItemFromId(ArrFiltered[idx]);        

        data.indexRightButtons = data.phrase.slice(0,-1).toLowerCase().split('_');
        data.buttons=[];
        for (let i=0; i < data.indexRightButtons.length; i+=1) {
            data.buttons[i]=this.chooseButtons(data.indexRightButtons[i], data.words);
        }
        return data; 
    }

    handleNext = (id, answer) => {  
        const countTest = this.state.countTest+1;         
        const idx = this.state.progress.findIndex((item) => item.id === id);  
        const count = this.state.progress[idx].count+1;      
        
        let item = {};           
        let isRight = this.state.progress[idx].right;
        let isWrong = this.state.progress[idx].wrong;
        if (answer) isRight++; else {isRight=0; isWrong++;}
        item = { ...this.state.progress[idx], 
             'right': isRight, 
             'wrong': isWrong, 
            'count': count
            }; 
         let progress = [
            ...this.state.progress.slice(0, idx),
            item,
            ...this.state.progress.slice(idx + 1)
          ]; 
       this.setState((state) => ({
        countTest, progress
      }));
    }

    render() {  
        if (this.props.settings.lessonId !== +this.props.match.params.id) this.props.onChange({lessonId:+this.props.match.params.id});
         let body;
        if (this.isFinish()) body = (<PracticeFinish lessonId = {+this.props.match.params.id}/>); 
        else body = (<PracticeTest phrase={this.chooseNextTest()} 
                                   onAnswer={this.handleNext} 
                                   isTranscR={ this.props.settings.transcripR }
                                   autoGo={ this.props.settings.autoGo }
                                   soundPractik={ this.props.settings.soundPractik }
                                   />);
        
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