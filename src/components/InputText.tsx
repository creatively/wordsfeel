import React, { useState, useMemo, useEffect, ChangeEvent } from 'react';
import '../css/InputText.css'
import IWord from '../interfaces/IWord'
import { useGlobals } from '../hooks/useGlobals'
import { getUpdatedWordObjects } from '../functions/getUpdatedWordObjects'
import { useDebounce } from '../hooks/useDebounce'


export const InputText = () => {

    const { setWords } = useGlobals()
    const { transcriptText } = useGlobals()
    const [ localText, setLocalText ] = useState('')


    useEffect(() => {
        const words: IWord[] = getUpdatedWordObjects(localText)
        setWords(words)
    }, [ localText, setWords ])

    useEffect(() => {
        setLocalText(transcriptText)
    }, [ transcriptText ])


    return (
        <section className="input-text">
            <textarea className="input-textarea" 
                name="localText" 
                placeholder="Paste any text in here"
                value={localText} 
                onChange={e => setLocalText(e.target.value)}
            />
        </section>
    )
}