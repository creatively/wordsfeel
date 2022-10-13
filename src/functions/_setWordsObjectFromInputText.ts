import { useWordsStore } from '../global-state/useWordsStore'


export const useSetWordsObjectFromInputText = (text: string) => void {
    const setWords = useWordsStore((state) => state.setWords)

    const cleanedInput: string[] = 
            text
                .split(' ')
                .map(cleanText)
                .filter(includeOnlyPreScoredWords)

    const words: Word[] = 
            cleanedInput
                .map(getWordObjectsFromTextArray)
                .map(addFrequency)
                .map(addXY)
                .map(addColor)
                .map(scaleNumbers)
                                    
    setWords(words)
}