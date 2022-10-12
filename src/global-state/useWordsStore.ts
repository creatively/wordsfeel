import IWordProperties from '../interfaces/IWordProperties'
import IWord from '../interfaces/IWord'
import create from 'zustand'
import { immer } from "zustand/middleware/immer"

type State = {
  words: IWord[],
  text: string | undefined
}

type Actions = {
  setWords: (words: IWord[]) => void
  setText: (text: string | undefined) => void
}

export const useWordsStore = create(
  immer<State & Actions>((set) => ({
    words: [],
    text: '',
    setWords: (words: IWord[]) =>
      set((state) => {
        state.words = words
      }),
    setText: (text: string | undefined) =>
      set((state) => {
        state.text = text
      })
  }))
)