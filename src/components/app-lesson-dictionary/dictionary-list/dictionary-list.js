import React from 'react';

const DictList = ({dataDict, onChange, isTranscR}) => {  

  

  const elements = dataDict.map ((item) => { 
    
    return (
      <tr key={ item.id }><td>{ item.word }</td>
      <td className='transcription'>[{isTranscR ? item.transcription[1] : item.transcription[0] }]</td>
      {/* <td className='sound'><i class="fas fa-headphones"></i></td> */}
      <td>{ item.translate }</td></tr>
    );
});
 
    return (
      <div>
        <h1>Словарь</h1>
        <table>
          <thead>
              <tr>
                <th>Слово</th>
                <th className='transcription'>Транскрипция</th>
                {/* <th className='sound'><i class="fas fa-headphones"></i></th> */}
                <th>Перевод</th>
              </tr>
          </thead>
          <tbody>
            { elements }
          </tbody>
        </table>
        <button 
           onClick={() => onChange({isStart:false})}
          className='begin'>Начнем...</button>
      </div>
    );        
}

export default DictList;