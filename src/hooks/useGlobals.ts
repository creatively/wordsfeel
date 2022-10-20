import IWord from '../interfaces/IWord'
import create from 'zustand'
import { immer } from "zustand/middleware/immer"

type State = {
  words: IWord[],
  text: string,
  transcriptText: string
}

type Actions = {
  setWords: (words: IWord[]) => void,
  setText: (text: string) => void,
  setTranscriptText: (transcriptText: string) => void
}


const states = create(
  immer<State & Actions>((set) => ({

    words: [],
    text: '',
    transcriptText: '',

    setWords: (words: IWord[]) =>
      set((state) => {
        state.words = words
      }),

    setText: (text: string) =>
      set((state) => {
        state.text = text
      }),

    setTranscriptText: (transcriptText: string) =>
      set((state) => {
        state.transcriptText = transcriptText
      })
      
  }))
)


export const useGlobals = () => {
    return {
        text:             states((state) => state.text),
        setText:          states((state) => state.setText),
        words:            states((state) => state.words),
        setWords:         states((state) => state.setWords),
        transcriptText:   states((state) => state.transcriptText),
        setTranscriptText: states((state) => state.setTranscriptText)
    }
}
