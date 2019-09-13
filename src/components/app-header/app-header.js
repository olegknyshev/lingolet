import React from 'react';
import {NavLink} from 'react-router-dom';
import './app-header.css';

const AppHeader = ({pageStatus, isLogin, onChange}) => {

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
            <NavLink
                to='/'
                exact={true}
                onClick={() => onChange({lessonId:0})}
            >  
                <div className='logo'>
                    <h1>Lingolet</h1>
                    <div>En</div>                
                </div>
            </NavLink>
        );
        else return (
            <NavLink
                to='/'
                exact={true}
                onClick={() => onChange({lessonId:0})}
            > 
            <div className='logo'>
                <h1>Lingolet</h1>
                <div>En</div>
               <h2>{pageStatus} урок</h2>
            </div>
            </NavLink>
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