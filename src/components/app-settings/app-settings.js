import React, { Component }  from 'react';
import './app-settings.css';

export default class AppSettings extends Component {

    state = {
        isDark: false,
        isLogin: false,
        isFirstTime: false,
        pageStatus: 0,
        isLoggin: false,
        lessonId: 0,
        fontSize: 0,
        autoChek: true,
        autoGo: true,
        soundPractic: false,
        soundTwice: false,
        soundDict: false,
        soundDictTwice: false,
      };

    render() {        
        return (
            <div className='settings'>
                <h1>Настройки</h1>
                <div className='tips'
                    style={this.state.isLoggin ? {display: 'none'} : null }>
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
                                class="checkbox" 
                                id="checkbox-1" 
                                type="checkbox" 
                                checked={this.state.isDark ? true : false}
                                />
		                    <label for="checkbox-1"></label>
                        </div>
                    </div>
                    <div className='settings-box-tab'>                    
                        <div className='left-settings'>Размер шрифта</div>
                        <div className='right-settings'>
                            <div>
                                <input 
                                    class="radio" 
                                    id="radio-1" 
                                    type="radio" 
                                    name="radio"
                                    checked={this.state.fontSize === -1 ? true : false} />
		                        <label htmlFor="radio-1">мелкий</label>
                            </div>
                            <div>
                                <input 
                                    class="radio" 
                                    id="radio-2" 
                                    type="radio" 
                                    name="radio"
                                    checked={this.state.fontSize === 0 ? true : false} />
    		                    <label htmlFor="radio-2">средний</label>
                            </div>
                            <div>
                                <input 
                                    class="radio" 
                                    id="radio-3" 
                                    type="radio" 
                                    name="radio" 
                                    checked={this.state.fontSize === 1 ? true : false} />
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
                                class="checkbox" 
                                id="checkbox-2" 
                                type="checkbox"
                                checked={this.state.autoChek ? true : false} />
		                    <label for="checkbox-2"></label>
                        </div>
                    </div>
                    <div className='settings-box-tab'>                    
                        <div className='left-settings'>Автопереход</div>
                        <div className='right-settings'>
                            <input 
                                class="checkbox" 
                                id="checkbox-3" 
                                type="checkbox"
                                checked={this.state.autoGo ? true : false} />
		                    <label for="checkbox-3"></label>
                        </div>
                    </div>
                    </div>
                    <div className='settings-box prononsiation'>                    
                    <div className='settings-box-tab'>                    
                        <div className='left-settings'>Озвучивать правильный ответ</div>
                        <div className='right-settings'>
                            <input class="checkbox" id="checkbox-4" type="checkbox"
                             checked={this.state.soundPractic ? true : false}/>
		                    <label for="checkbox-4"></label>
                        </div>
                    </div>
                    <div className='settings-box-tab'>                    
                        <div className='left-settings'>Повторять дважды</div>
                        <div className='right-settings'>
                            <input class="checkbox" id="checkbox-5" type="checkbox"
                            checked={this.state.soundTwice ? true : false} />
		                    <label for="checkbox-5"></label>
                        </div>
                    </div>
                    </div>
                    <div className='settings-box prononsiation2'>                    
                    <div className='settings-box-tab'>                    
                        <div className='left-settings'>Озвучивать выбранное слово</div>
                        <div className='right-settings'>
                            <input class="checkbox" id="checkbox-4" type="checkbox"
                            checked={this.state.soundDict ? true : false} />
		                    <label for="checkbox-4"></label>
                        </div>
                    </div> 
                    <div className='settings-box-tab'>                    
                        <div className='left-settings'>Повторять дважды</div>
                        <div className='right-settings'>
                            <input class="checkbox" id="checkbox-6" type="checkbox"
                            checked={this.state.soundTwiceTwice ? true : false} />
		                    <label for="checkbox-6"></label>
                        </div>
                    </div>                  
                    </div>
                


            </div>
        );        
    }
}