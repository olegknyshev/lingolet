import React, { Component }  from 'react';
import DictList from './dictionary-list/';
import DictShow from './dictionary-show/';
// import DictQwest from './dictionary-qwest/';
// import DictWrite from './dictionary-write/';
import ShowProgress from './show-progress/';

import './app-lesson-dictionary.css';

export default class AppLessonDictionary extends Component {

    state = {
        lessonId: this.props.pageStatus,
        isStart: true, 
        isTranscR: this.props.transcrip,  
        progress: [],     
    };

    componentDidMount() {
        this.setState((state) => {         
            return null;
        });
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

        return (
            <div className='dictionary'>   
            {this.state.isStart 
                        ? <DictList onChange={ this.onToggleChange } isTranscR={ this.isTranscR }/> 
                        : <DictShow />}             
                
                {/* <DictQwest /> */}
                {/* <DictWrite /> */}
                <ShowProgress />
            </div>
        );        
    }
}