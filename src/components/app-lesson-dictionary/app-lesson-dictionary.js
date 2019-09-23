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
        lessonId: this.props.match.params.id,        
        isTranscR: this.props.transcrip, 
        isStart: true,
        countWord:0,
        progress: []
    };

    componentDidMount() {

        const dict = LessonsDic.filter((item) => { return item.lesson === +this.state.lessonId}); 
        const stateDict = dict.map (item => {
            let elem = {id: item.id, show: 0, right: 0, wrong: 0};      
            return elem;
        });

        this.setState({progress: stateDict});
    }

    componentDidUpdate() {
        //
    }  



    onToggleChange = (elem) => {
        this.setState((state) => {         
            return elem;
        });
    }; 

    render() {

        let nextTest = 'SHOW';

        if (this.state.countWord < 6)  nextTest = 'SHOW'; 
        
        return (
            <div className='dictionary'>   
            {this.state.isStart 
                        ? <DictList dataDict={LessonsDic} onChange={ this.onToggleChange } isTranscR={ this.state.isTranscR }/> 
                        : null}             
                
                {(nextTest === 'SHOW' && !this.state.isStart) ? <DictShow /> : null}
                {(nextTest === 'ENGRUS' && !this.state.isStart) ? <DictQwest /> : null}
                {(nextTest === 'WRITE' && !this.state.isStart) ? <DictWrite /> : null}
                <ShowProgress />
            </div>
        );        
    }
}