import IWord from '../interfaces/IWord'
import create from 'zustand'
import { immer } from "zustand/middleware/immer"

type State = {
  words: IWord[],
  text: string
}

type Actions = {
  setWords: (words: IWord[]) => void
  setText: (text: string) => void
}


const states = create(
  immer<State & Actions>((set) => ({

    words: [],
    text: '',

    setWords: (words: IWord[]) =>
      set((state) => {
        state.words = words
      }),

    setText: (text: string) =>
      set((state) => {
        state.text = text
      })
      
  }))
)


export const useGlobals = () => {
    return {
        text:       states((state) => state.text),
        setText:    states((state) => state.setText),
        words:      states((state) => state.words),
        setWords:   states((state) => state.setWords)
    }
}
