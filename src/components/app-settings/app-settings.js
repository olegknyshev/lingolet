import React from 'react';
import './app-settings.css';

const AppSettings = ({settings, onChange}) => {  
    
    return (
        <div className='divMain'>
            <h1>Настройки</h1>
            <div className='tips'
                style={settings.isLogin ? {display: 'none'} : null }>
                Авторизация в приложении, откроет Вам 
                новый функционал: доступ ко всем урокам, статистику Вашего прогресса, ночную тему оформления.
            </div>
            <div className='settings-box theme'>
                <div className='settings-box-tab'>                    
                    <div className='left-settings'>Темная тема</div>
                    <div className='right-settings'>
                        <input 
                            className="checkbox" 
                            id="checkbox-1" 
                            type="checkbox" 
                            checked={settings.isDark ? true : false}
                            onChange={() => onChange({isDark:!settings.isDark})}
                            />
                        <label htmlFor="checkbox-1"></label>
                    </div>
                </div>                
                
            </div>
                <div className='settings-box test'>                    
                    <div className='settings-box-tab'>                    
                        <div className='left-settings'>Автопереход</div>
                        <div className='right-settings'>
                            <input 
                                className="checkbox" 
                                id="checkbox-3" 
                                type="checkbox"
                                checked={settings.autoGo ? true : false}
                                onChange={() => onChange({autoGo:!settings.autoGo})} />
                            <label htmlFor="checkbox-3"></label>
                        </div>
                    </div>
                    <div className='settings-box-tab'>                    
                    <div className='left-settings'>Транскрипция</div>
                    <div className='right-settings'>
                        <div>
                            <input 
                                className="radio" 
                                id="radio-11" 
                                type="radio" 
                                name="radio1"
                                checked={!settings.transcripR ? true : false} 
                                onChange={() => onChange({transcripR:false})}/>
                            <label htmlFor="radio-11">[ vɔ:t tʌk ]</label>
                        </div>
                        <div>
                            <input 
                                className="radio" 
                                id="radio-12" 
                                type="radio" 
                                name="radio1"
                                checked={settings.transcripR ? true : false} 
                                onChange={() => onChange({transcripR:true})} />
    	                    <label htmlFor="radio-12">[ или так ]</label>
                        </div>                   
                    </div>
                </div>
                </div>
                <div className='settings-box prononsiation'>                    
                <div className='settings-box-tab'>                    
                    <div className='left-settings'>Озвучивать ответ</div>
                    <div className='right-settings'>
                        <input className="checkbox" id="checkbox-4" type="checkbox"
                         checked={settings.soundPractik ? true : false}
                         onChange={() => onChange({soundPractik:!settings.soundPractik})}/>
                        <label htmlFor="checkbox-4"></label>
                    </div>
                </div>
                </div>
        </div>
    );        
}

export default AppSettings;