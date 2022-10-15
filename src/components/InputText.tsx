import React, { useEffect, useState, useRef, ChangeEvent } from 'react';
import '../css/InputText.css'
import { useGlobals } from '../hooks/useGlobals'
import { useWordObjects } from '../hooks/useWordObjects'


export const InputText = () => {

    const { text, setText } = useGlobals()
    const [ localText, setLocalText ] = useState<string>(``)

    useWordObjects()

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.currentTarget.value)
    }

  
    return (
        <section className="input-text">
          <textarea className="input-textarea" value={text} onChange={handleChange}/>
        </section>
    )
}