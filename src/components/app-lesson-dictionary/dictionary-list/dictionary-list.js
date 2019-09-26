import React from 'react';

const DictList = ({dataDict, onChange, isTranscR}) => {  

  

  const elements = dataDict.map ((item) => { 
    
    return (
      <tr key={ item.id }><td>{ item.word }</td>
      <td className='transcription'>[&nbsp;{isTranscR ? item.transcription[1] : item.transcription[0]}&nbsp;]</td>
      {/* <td className='sound'><i class="fas fa-headphones"></i></td> */}
      <td>{ item.translate }</td></tr>
    );
});
 
    return (
      <>
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
           onClick={() => onChange('SHOWALL')}
          className='begin'>Начнем...</button>
      </>
    );        
}

export default DictList;