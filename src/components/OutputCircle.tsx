import { Circle } from './Circle'
import '../css/OutputCircle.css'
import { useWordsStore } from '../global-state/useWordsStore'
import IWord from '../interfaces/IWord'


export const OutputCircle = () => {
    const words = useWordsStore((state) => state.words)

    return (
      <section className="output-circle">
  
        { words.map((word: IWord) => (
            <Circle word={word} />
        ))}
  
      </section>
    )
}