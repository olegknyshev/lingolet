export const LessonsDic =  [
  {
      id: 1, 
      lesson: 1,
      word: 'we',
      transcription: ['wi:','ви'],      
      translate: 'мы',
      type: 'pronoun'
  },
  {
      id: 2, 
      lesson: 1,
      word: 'show',
      transcription: ['ʃəu','шоу'],      
      translate: 'показать',
      type: '1. infinitive',
      also: [3,4]
  },
  {
    id: 3, 
    lesson: 1,
    word: 'showed',
    transcription: ['ʃəʊd','шовед'],      
    translate: 'показал',
    type: '2. past',
    from: 2
  },
  {
    id: 4, 
    lesson: 1,
    word: 'shown',
    transcription: ['ʃəʊn','шовен'],      
    translate: 'показал',
    type: '3. perfect',
    from: 2
  },
  {
      id: 5, 
      lesson: 1,
      word: 'recive',
      transcription: ['rɪˈsiːv','рисив'],      
      translate: 'получать, принимать',
      type: 'verb',
  },
  {
      id: 6, 
      lesson: 1,
      word: 'know',
      transcription: ['nəʊ','ноу'],      
      translate: 'знать, узнавать',
      type: '1. infinitive',
      also: [7,8]
  },
  {
    id: 7, 
    lesson: 1,
    word: 'knew',
    transcription: ['njuː','нью'],      
    translate: 'узнал',
    type: '2. past',
    from: 6
  },
  {
    id: 8, 
    lesson: 1,
    word: 'known',
    transcription: ['nəʊn','ноун'],      
    translate: 'узнал',
    type: '3. perfect',
    from: 6
  },
  {
      id: 9, 
      lesson: 1,
      word: 'go',
      transcription: ['ɡəʊ','гоу'],      
      translate: 'идти, ехать, ходить',
      type: '1. infinitive',
      also: [10,11]
  },
  {
    id: 10, 
    lesson: 1,
    word: 'went',
    transcription: ['went','вент'],      
    translate: 'пошел, поехал, ходил',
    type: '2. past',
    from: 9
  },
  {
    id: 11, 
    lesson: 1,
    word: 'gone',
    transcription: ['ɡɒn','гоун'],      
    translate: 'пошел, поехал, ходил',
    type: '3. perfect',
    from: 9
  },
  {
      id: 12, 
      lesson: 1,
      word: 'bring',
      transcription: ['brɪŋ','бринг'],      
      translate: 'приносить, приводить',
      type: '1. infinitive',
      also: [13,14]
  },
  {
    id: 13, 
    lesson: 1,
    word: 'brought',
    transcription: ['brɔːt','брот'],      
    translate: 'принес, привел',
    type: '2. past',
    from: 12
  },
  {
    id: 14, 
    lesson: 1,
    word: 'brought',
    transcription: ['brɔːt','брот'],      
    translate: 'принес, привел',
    type: '3. perfect',
    from: 12
  },
  {
    id: 15, 
    lesson: 1,
    word: 'I',
    transcription: ['aɪ','ай'],      
    translate: 'я',
    type: 'pronoun'
  },
  {
    id: 16, 
    lesson: 1,
    word: 'set',
    transcription: ['set','сэт'],      
    translate: 'установить',
    type: '1. infinitive',
    also: [17,18]
  },
  {
    id: 17, 
    lesson: 1,
    word: 'set',
    transcription: ['set','сэт'],      
    translate: 'установил',
    type: '2. past',
    from: 16
  },
  {
    id: 18, 
    lesson: 1,
    word: 'set',
    transcription: ['set','сэт'],      
    translate: 'установил',
    type: '3. perfect',
    from: 16
  },
  {
    id: 19, 
    lesson: 1,
    word: 'begin',
    transcription: ['bɪˈɡɪn','бигин'],      
    translate: 'начинать',
    type: '1. infinitive',
    also: [20,21]
  },
  {
    id: 20, 
    lesson: 1,
    word: 'began',
    transcription: ['bɪˈɡæn','бигэн'],      
    translate: 'начал',
    type: '2. past',
    from: 19
  },
  {
    id: 21, 
    lesson: 1,
    word: 'begun',
    transcription: ['bɪˈɡʌn','биган'],      
    translate: 'начал',
    type: '3. perfect',
    from: 19
  },
];