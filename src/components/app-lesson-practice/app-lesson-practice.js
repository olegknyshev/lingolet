import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import './app-lesson-practice.css';

const propTypes = {
    id: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    text: PropTypes.string,
  };
  
  const defaultProps = {
    text: 'Hello World',
  };


export default class AppPractice extends Component {

    render() {
        
        return (           
            <div className='divMain'>
                <h1>Практика</h1>
                <p>Здесь скоро все будет!</p>
            </div>
        );        
    }
}

AppPractice.propTypes = propTypes;
AppPractice.defaultProps = defaultProps;
