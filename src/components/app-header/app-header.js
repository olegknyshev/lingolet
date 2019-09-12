import React, { Component }  from 'react';
import './app-header.css';

export default class AppHeader extends Component {

    state = {
        pageStatus: 0,
        isLoggin: false
      };

    render() {

        const AppHeaderUser =()=> {
            return (
                <div className="AppHeaderUser">
                    {this.state.isLoggin ? <i class="fas fa-user-circle fa-2x"></i> : <button>вход</button>}
                </div>
                
            );
        }
        
        const AppHeaderLogo =()=> {
            if (this.state.pageStatus === 0) 
            return (
                <div className='logo'>
                    <h1>Lingolet</h1>
                    <div>En</div>                
                </div>
            );
            else return (
                <div className='logo'>
                    <h1>Lingolet</h1>
                    <div>En</div>
                   <h2>{this.state.pageStatus} урок</h2>
                </div>
            );
        }
        
        return (
            <header>
                <AppHeaderLogo />
                <AppHeaderUser />
            </header>
        );        
    }
}