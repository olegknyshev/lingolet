import React, {Component} from 'react';
import {LessonsTitel} from '../../data/lessons-titel';
import {NavLink} from 'react-router-dom';
import './app-main.css';

export default class AppMain extends Component {
    static defaultProps = { maxLoops: 3};

    render() {

        
        const elements = LessonsTitel.map ((item) => { 

            let dataD = {progress:[]};
            let progressD = 0
            if (localStorage.getItem(`lessonDic${item.id}`)) {
                dataD = JSON.parse(localStorage.getItem(`lessonDic${item.id}`));
                const  arr = dataD.progress;
                let total = arr.length*this.props.maxLoops;
                const sum = arr.reduce((partial_sum, a) => partial_sum + a.right,0); 
                let totalProgress= sum*100/total;
                progressD = totalProgress.toFixed();
            } 
            let dataP = {progress:[]};
            let progressP = 0
            if (localStorage.getItem(`lessonPractice${item.id}`)) {
                dataP = JSON.parse(localStorage.getItem(`lessonPractice${item.id}`));
                const  arr = dataP.progress;
                let total = arr.length*this.props.maxLoops;
                const sum = arr.reduce((partial_sum, a) => partial_sum + a.right,0); 
                let totalProgress= sum*100/total;
                progressP = totalProgress.toFixed();
            }              
            let tProgress = (((+progressP) + (+progressD)) / 2).toFixed(1);
            let progress = 'Урок еще не начат.';
            if (tProgress !== 0) {
                if (tProgress > 0) progress = `Ваш прогресс: ${ tProgress }%`;
                if (tProgress === 100) progress = 'Урок пройден.';
            }

            if (this.props.isLogin === true || item.id === 1) return (
                <NavLink
                    to={`/lesson/theory/${ item.id }`}
                    className='LessonsBox'
                    exact={false}
                    key={ item.id }
                    onClick={() => this.props.onChange({lessonId:item.id})}
                > 
                    <div>
                        <div>
                            <div className='LessonNumer'>{ item.id }</div>
                            <p className='LessonProgress'>{ progress }</p>
                        </div>
                        <h2>{ item.titel }</h2>                        
                        <div className='LessonsBoxProgressB'></div>                  
                        <div className='LessonsBoxProgress' style={{width: tProgress+'%'}}></div>
                    </div>
                </NavLink>
            );
            else return (
                <div key={ item.id } className='LessonsBox notlogin'> 
                    <div>
                        <div>
                            <div className='LessonNumer'>{ item.id }</div>
                            <p className='LessonProgress'>{ progress }</p>
                        </div>
                        <h2>{ item.titel }</h2>                        
                        <div className='LessonsBoxProgressB'></div>                  
                        <div className='LessonsBoxProgress' style={{width: tProgress+'%'}}></div>
                    </div>
                </div>

            );
        });
    
        return (
            <div className='LessonsDiv'>
            { elements }
            </div>
        );

    };
}
