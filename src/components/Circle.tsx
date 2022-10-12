import { useWordsStore } from '../global-state/useWordsStore'
import '../css/Circle.css'
import IWord from '../interfaces/IWord'


export const Circle = ({ word }: IWord) => {

    return (
      <div className="circle"
        style={{
          height: word.frequency,
          width: word.frequency,
          borderRadius: word.frequency,
          top: word.circleY,
          left: word.circleX
        }}
      ></div>
    )
  }