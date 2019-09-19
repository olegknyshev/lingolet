import React from 'react';

const DictShow = () => {  
 
    return (
      <div className='dictShow'>
        <div className='word'>show</div>
        <div className='wordtranscription'>[show] <i class="fas fa-headphones"></i></div>
        <div className='wordtranslate'>показывать</div>
        <div className='buttonknow'>
          <button><i class="far fa-surprise fa-2x"></i><br />Вау, новое слово...</button>
          <button className='yes'><i class="far fa-smile fa-2x"></i><br />Знакомо, можно дальше!</button>

        </div>


        
      </div>
    );        
}

export default DictShow;