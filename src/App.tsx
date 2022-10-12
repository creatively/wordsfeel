import React, { ChangeEvent, useState, useRef } from 'react';
import './css/App.css';
import IWordProperties from './interfaces/IWordProperties'
import IWord from './interfaces/IWord'
import ScoredWords from './data/scored-words'
import { useWordsStore } from './global-state/useWordsStore'
import { getValue } from '@testing-library/user-event/dist/utils';
import { InputText } from './components/InputText'
import { getWordsFromText } from './functions/getWordsFromText'
import { OutputCircle } from './components/OutputCircle'

export default function App() {

  const text: string = useWordsStore((state) => state.text)
  const setWords = useWordsStore((state) => state.setWords)

  setWords(getWordsFromText(text))

  return (
    <div className="App">

      <InputText/>
      <OutputCircle />

    </div>
  )
}
