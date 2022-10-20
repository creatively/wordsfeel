import '../css/Examples.css'
import React, { MouseEventHandler } from 'react'
import { useGlobals } from '../hooks/useGlobals'
import { starwars } from '../example-transcripts/starwars'
import { americanConstitution } from '../example-transcripts/american-constitution'
import { bibleMatthewsGospel } from '../example-transcripts/bible-matthews-gospel'


export const Examples = () => {

    const { setTranscriptText } = useGlobals()

    const transcripts: any = {
       'starwars': starwars,
       'americanConstitution': americanConstitution,
       'bibleMatthewsGospel': bibleMatthewsGospel
    }

    const copyIntoTextbox = (e: any) => {
        const contentName = e.target.alt
        const transcript = transcripts[contentName]
        setTranscriptText(transcript)
    }


    return (

        <div className="examples">
            <h2>Example transcripts to copy in</h2>
            <ul className="examples__examples">
                <li className="examples__item">
                    <img className="examples__icon-copy" 
                        alt="starwars"
                        src={require('../assets/icon-copy.png')} 
                        onClick={copyIntoTextbox}
                    />
                    <div className="examples__description">Star Wars movie transcript</div>
                 </li>
                <li className="examples__item">
                     <img className="examples__icon-copy" 
                        alt="americanConstitution"
                        src={require('../assets/icon-copy.png')} 
                        onClick={copyIntoTextbox}
                    />
                    <div className="examples__description">American Constitution 1787</div>
                 </li>
                 <li className="examples__item">
                    <img className="examples__icon-copy" 
                        alt="bibleMatthewsGospel"
                        src={require('../assets/icon-copy.png')} 
                        onClick={copyIntoTextbox}
                    />
                    <div className="examples__description">The Bible : Matthew's Gospel</div>
                 </li>
            </ul>
        </div>

    )
}