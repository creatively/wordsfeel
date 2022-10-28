import { scoredWords, scoredWordsArray } from '../data/scoredWordsArray'
import IWord from '../interfaces/IWord'
import { getColorFromXY } from './getColorFromXY'


export const getUpdatedWordObjects = (text: string): IWord[] => {

    const cleanedInputWords: string[] = 
        text
            .split(' ')
            .map(cleanText)
            .filter(includeOnlyPreScoredWords)

    const updatedWordObjects: IWord[] = 
        scoredWordsArray
            .filter((scoredWord) => cleanedInputWords.includes(scoredWord))
            .map(addWordProperties)

    return updatedWordObjects


    // functions
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

    function addWordProperties(scoredWord: string) {
        const wordCount = cleanedInputWords.filter((cleanedInputWord) => cleanedInputWord === scoredWord).length
        const wordInfo: number[] = scoredWords.get(scoredWord) || [0, 0]
        const x: number = wordInfo[0]
        const y: number = wordInfo[1]
        const colour: string = getColorFromXY(x, y)

        return {
            name: scoredWord,
            frequency: wordCount,
            circleX: x,
            circleY: y,
            colour: colour
        }
    }
}
