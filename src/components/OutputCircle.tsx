import '../css/OutputCircle.css'
import { Circle } from './Circle'
import IWord from '../interfaces/IWord'
import { useGlobals } from '../hooks/useGlobals'


export const OutputCircle = () => {

  const { words, text } = useGlobals()


  return (
    <section className="output-circle">
{text}
      { words.map((word: IWord) => (
          <Circle word={word} />
      ))}

    </section>
  )
}