import React, { ChangeEvent } from 'react';
import '../css/InputText.css'
import { useWordsStore } from '../global-state/useWordsStore'


export const InputText = () => {
    const text = useWordsStore((state) => state.text)
    const setText = useWordsStore((state) => state.setText)
   
    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => setText(e.target.value)
  
    return (
        <section className="input-text">
          <textarea className="input-textarea" value={text} onChange={handleChange}/>
        </section>
    )
}