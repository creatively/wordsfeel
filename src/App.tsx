import React, { ChangeEvent, useState, useRef } from 'react';
import './css/App.css';
import IWordProperties from './interfaces/IWordProperties'
import IWord from './interfaces/IWord'
import ScoredWords from './data/scored-words'
import { useWordsStore } from './global-state/useWordsStore'
import { getValue } from '@testing-library/user-event/dist/utils';
import { InputText } from './components/InputText'


export default function App() {

  return (
    <div className="App">

      <InputText/>
      <OutputCircle />

    </div>
  )
}





const OutputCircle = () => {
  const words = useWordsStore((state) => state.words);
  const setWords = useWordsStore((state) => state.setWords);


  return (
    <>
      <div className="circle-image">
        
      </div>
    </>
  )
}

const Circle = () => {
  const words = useWordsStore((state) => state.words);
  const setWords = useWordsStore((state) => state.setWords);


  return (
    <>
      <div className="circle-image">

      </div>
    </>
  )
}

