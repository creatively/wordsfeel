import { useEffect } from 'react'
import { useGlobals } from './useGlobals'
import { scoredWords, scoredWordsArray } from '../data/scoredWordsArray'
import IWordProperties from '../interfaces/IWordProperties'
import IWord from '../interfaces/IWord'

// scoredWords: Map<string, number[]>

export const useWordObjects = (): void => {

    const { text, setWords } = useGlobals()

    const cleanedInput: string[] = 
            text
                .split(' ')
                .map(cleanText)
                .filter(includeOnlyPreScoredWords)


// ------ Functions for cleanedInput ------

function cleanText(_text: string) {
    return _text
            .replaceAll('.', '')
            .replaceAll(',', '')
            .replaceAll('-', '')
            .replaceAll(':', '')
            .replaceAll(';', '')
            .replaceAll('?', '')
            .replaceAll('"', '')
}

function includeOnlyPreScoredWords(_word: string) {
    return scoredWordsArray.includes(_word)
}


// ------ Functions for cleanedInput ------

console.log(cleanedInput)

    const words: IWord[] = 
            cleanedInput
                .map(getWordObjectFromText)
                //.map(addFrequency)
                //.map(addXY)
                //.map(addColor)
                //.map(scaleNumbers)

   console.log(words)

    //setWords(words)


    function getWordObjectFromText(text: string) {
        const wordObject: IWord = {
             text: {}
        }
        return wordObject
    }
/*
    function addFrequency(wordObject: IWord) {
        const wordName: string = Object.keys(wordObject)[0]
        const newWordObject: IWord = wordObject[0].frequency = 
            scoredWordsArray.filter((scoredWord) => scoredWord === wordName).length

        return newWordObject
    }
*/



}
