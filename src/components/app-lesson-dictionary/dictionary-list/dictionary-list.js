import React from 'react';

export default class DictList extends React.Component { 
  
  makeElements(arr) {
    const {isTranscR} = this.props;
    const elements = arr.map ((item) => {     
      return (
        <tr key={ item.id }><td>{ item.word }</td>
        <td className='transcription'>[&nbsp;
        {isTranscR 
          ? item.transcription[1] 
          : item.transcription[0]}
          &nbsp;]</td>
        <td>{ item.translate }</td></tr>
      );
    },isTranscR);
    return elements;
  }

  render() {
    const {dataDict, onChange} = this.props;

    const dataDictClean = dataDict.filter((item) => item.type !== '2. past' && item.type !== '3. perfect');
    const dataPronoun = dataDictClean.filter((item) => item.type === 'pronoun');
    const dataVerb = dataDictClean.filter((item) => item.type === '1. infinitive' || item.type === 'verb');
    const dataNoun = dataDictClean.filter((item) => item.type === 'noun');
    const dataAdjective = dataDictClean.filter((item) => item.type === 'adjective');

    const dataRest = dataDictClean.filter((item) => item.type !== 'adjective' 
                                                  && item.type !== '1. infinitive' 
                                                  && item.type !== 'verb'
                                                  && item.type !== 'noun'
                                                  && item.type !== 'pronoun');

    const elementsPronoun = this.makeElements(dataPronoun);
    const elementsNoun = this.makeElements(dataNoun);
    const elementsVerb = this.makeElements(dataVerb);    
    const elementsAdjective = this.makeElements(dataAdjective);
    const elementsRest = this.makeElements(dataRest);
   
      return (
        <>
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
              {elementsPronoun.length ? <tr className='trName'><td colSpan='3'>Местоимения</td></tr> : null}              
              { elementsPronoun }
              {elementsNoun.length ? <tr className='trName'><td colSpan='3'>Существительные</td></tr> : null}               
              { elementsNoun }
              {elementsVerb.length ? <tr className='trName'><td colSpan='3'>Глаголы</td></tr> : null}
              { elementsVerb }
              {elementsAdjective.length ? <tr className='trName'><td colSpan='3'>Прилагательные</td></tr> : null}              
              { elementsAdjective }
              {elementsRest.length ? <tr className='trName'><td colSpan='3'>Всякое</td></tr> : null}
              { elementsRest }
            </tbody>
          </table>
          <button 
             onClick={() => onChange('SHOWALL')}
            className='begin'>Начнем</button>
        </>
      ); 
  }       
}