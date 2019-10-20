import React, { Component }  from 'react';
import {LessonsTitel} from '../../data/lessons-titel';
import './app-statistics.css';

export default class AppStatistics extends Component {

    static defaultProps = { maxLoops: 3};

    totalProgress(item) {
        const sum = item.reduce((partial_sum, a) => partial_sum + +a,0);
        console.log(item, sum)
        return (sum/item.length).toFixed(2);
    }

    render() {

        let total = [];

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
            const tProgress = ((+progressP) + (+progressD)) / 2;            
            total.push(tProgress.toFixed());
            return (
                <div className='statDiv'>
                    <h2><span>Урок №{item.id}:</span> {item.titel}</h2>               
                    <p><span>Практика:</span> пройден на {progressP}%</p>
                    <p><span>Словарь:</span> изучен на {progressD}%</p>
                </div>
            );
        });
        console.log(total);
        return (
            <div className='divMain'>
                <h1>Статистика</h1>
                {elements}
                <div className='statDiv itog'>
                    <h2>Общий прогресс: {this.totalProgress(total)}%</h2>                    
                </div><br />
            </div>
        );        
    }
}