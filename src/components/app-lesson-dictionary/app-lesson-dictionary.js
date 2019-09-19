import React, { Component }  from 'react';
// import DictList from './dictionary-list/';
// import DictShow from './dictionary-show/';
// import DictQwest from './dictionary-qwest/';
import DictWrite from './dictionary-write/';
import ShowProgress from './show-progress/';

import './app-lesson-dictionary.css';

export default class AppLessonDictionary extends Component {

    render() {
        
        return (
            <div className='dictionary'>                
                {/* <DictList /> */}
                {/* <DictShow /> */}
                {/* <DictQwest /> */}
                <DictWrite />
                <ShowProgress />
            </div>
        );        
    }
}