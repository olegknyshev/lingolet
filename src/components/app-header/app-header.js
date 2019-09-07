import React, { Component }  from 'react';
import './app-header.css';

export default class AppHeader extends Component {

    render() {

        const AppHeaderUser =()=> {
            return (
                <div className="AppHeaderUser">
                    <button>вход</button>
                </div>
                
            );
        }
        
        const AppHeaderLogo =()=> {
            return <h1>Lingolet: <span>итальянский язык</span></h1>;
        }
        
        return (
            <header>
                <AppHeaderLogo />
                <AppHeaderUser />
            </header>
        );        
    }
}