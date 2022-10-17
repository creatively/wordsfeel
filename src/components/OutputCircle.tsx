import '../css/OutputCircle.css'
import { Circle } from './Circle'
import IWord from '../interfaces/IWord'
import { useGlobals } from '../hooks/useGlobals'
import { randomkey } from '../hooks/useRandomkey'


export const OutputCircle = () => {

  const { words } = useGlobals()
  
  return (

    <section className="output-circle">
 
      { words.map((word: IWord) => (

          <Circle key={randomkey()} {...word}  />

      ))}

      <div className="output-circle__plutchiks-wheel"></div>

    </section>
  )
}