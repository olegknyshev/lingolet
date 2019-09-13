import React from 'react';
import './app-settings.css';

const AppSettings = ({settings, onChange, onChangeFont}) => {  
 
    return (
        <div className='settings'>
            <h1>Настройки</h1>
            <div className='tips'
                style={settings.isLogin ? {display: 'none'} : null }>
                Авторизация в приложении, откроет Вам 
                новый функционал:<br />
                доступ ко всем урокам, 
                статистику Вашего прогресса, ночную тему оформления.
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
                <div className='settings-box-tab'>                    
                    <div className='left-settings'>Размер шрифта</div>
                    <div className='right-settings'>
                        <div>
                            <input 
                                className="radio" 
                                id="radio-1" 
                                type="radio" 
                                name="radio"
                                checked={settings.fontSize === -1 ? true : false} 
                                onChange={() => onChangeFont({fontSize:-1})}/>
                            <label htmlFor="radio-1">мелкий</label>
                        </div>
                        <div>
                            <input 
                                className="radio" 
                                id="radio-2" 
                                type="radio" 
                                name="radio"
                                checked={settings.fontSize === 0 ? true : false}
                                onChange={() => onChangeFont({fontSize:0})} />
    	                    <label htmlFor="radio-2">средний</label>
                        </div>
                        <div>
                            <input 
                                className="radio" 
                                id="radio-3" 
                                type="radio" 
                                name="radio" 
                                checked={settings.fontSize === 1 ? true : false}
                                onChange={() => onChangeFont({fontSize:1})} />
    	                    <label htmlFor="radio-3">крупный</label>
                        </div>
                    </div>
                </div>
                
            </div>
                <div className='settings-box test'>                    
                    <div className='settings-box-tab'>                    
                        <div className='left-settings'>Автопроверка</div>
                        <div className='right-settings'>
                            <input 
                                className="checkbox" 
                                id="checkbox-2" 
                                type="checkbox"
                                checked={settings.autoChek ? true : false}
                                onChange={() => onChange({autoChek:!settings.autoChek})} />
                            <label htmlFor="checkbox-2"></label>
                        </div>
                    </div>
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
                                onChange={() => onChangeFont({transcripR:false})}/>
                            <label htmlFor="radio-11">[ 'ai ]</label>
                        </div>
                        <div>
                            <input 
                                className="radio" 
                                id="radio-12" 
                                type="radio" 
                                name="radio1"
                                checked={settings.transcripR ? true : false} 
                                onChange={() => onChangeFont({transcripR:true})} />
    	                    <label htmlFor="radio-12">[ ай ]</label>
                        </div>                   
                    </div>
                </div>
                </div>
                <div className='settings-box prononsiation'>                    
                <div className='settings-box-tab'>                    
                    <div className='left-settings'>Озвучивать правильный ответ</div>
                    <div className='right-settings'>
                        <input className="checkbox" id="checkbox-4" type="checkbox"
                         checked={settings.soundPractic ? true : false}
                         onChange={() => onChange({soundPractic:!settings.soundPractic})}/>
                        <label htmlFor="checkbox-4"></label>
                    </div>
                </div>
                <div className='settings-box-tab'>                    
                    <div className='left-settings'>Повторять дважды</div>
                    <div className='right-settings'>
                        <input className="checkbox" id="checkbox-5" type="checkbox"
                        checked={settings.soundTwice ? true : false}
                        onChange={() => onChange({soundTwice:!settings.soundTwice})} />
                        <label htmlFor="checkbox-5"></label>
                    </div>
                </div>
                </div>
                <div className='settings-box prononsiation2'>                    
                <div className='settings-box-tab'>                    
                    <div className='left-settings'>Озвучивать выбранное слово</div>
                    <div className='right-settings'>
                        <input className="checkbox" id="checkbox-6" type="checkbox"
                        checked={settings.soundDict ? true : false}
                        onChange={() => onChange({soundDict:!settings.soundDict})} />
                        <label htmlFor="checkbox-6"></label>
                    </div>
                </div> 
                <div className='settings-box-tab'>                    
                    <div className='left-settings'>Повторять дважды</div>
                    <div className='right-settings'>
                        <input className="checkbox" id="checkbox-7" type="checkbox"
                        checked={settings.soundDictTwice ? true : false}
                        onChange={() => onChange({soundDictTwice:!settings.soundDictTwice})} />
                        <label htmlFor="checkbox-7"></label>
                    </div>
                </div>                  
                </div>
            


        </div>
    );        
}

export default AppSettings;