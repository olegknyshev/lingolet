import React from 'react';
import './app-header.css';

const AppHeader = ({pageStatus, isLogin}) => {

    const AppHeaderUser =()=> {
        return (
            <div className="AppHeaderUser">
                {isLogin ? <i class="fas fa-user-circle fa-2x"></i> : <button>вход</button>}
            </div>
            
        );
    }
    
    const AppHeaderLogo =()=> {
        if (pageStatus === 0) 
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
               <h2>{pageStatus} урок</h2>
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

export default AppHeader;