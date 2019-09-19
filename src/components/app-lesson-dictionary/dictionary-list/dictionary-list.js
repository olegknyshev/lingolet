import React from 'react';

const DictList = () => {  
 
    return (
      <div>
        <h1>Словарь</h1>
        <table>
          <thead>
              <tr>
                <th>Слово</th>
                <th className='transcription'>Транскрипция</th>
                <th className='sound'><i class="fas fa-headphones"></i></th>
                <th>Перевод</th>
              </tr>
          </thead>
          <tbody>
            <tr><td>I</td><td className='transcription'>[ai]</td><td className='sound'><i class="fas fa-headphones"></i></td><td>я</td></tr>
            <tr><td>I</td><td className='transcription'>[ai]</td><td className='sound'><i class="fas fa-headphones"></i></td><td>я</td></tr>
            <tr><td>I</td><td className='transcription'>[ai]</td><td className='sound'><i class="fas fa-headphones"></i></td><td>я</td></tr>
          </tbody>
        </table>
        <button className='begin'>Начнем...</button>
      </div>
    );        
}

export default DictList;