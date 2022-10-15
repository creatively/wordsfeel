import '../css/Circle.css'
import IWord from '../interfaces/IWord'


export const Circle = ({ word }: IWord) => {

    const size: number = word.frequency || 0
    const leftX: number = word.circleX || 0 + (size / 2)
    const topY: number = word.circleX || 0 + (size / 2)

    
    return (

      <div className="circle"
        style={{
          height: size,
          width: size,
          borderRadius: size,
          left: leftX,
          top: topY
        }}
      ></div>

    )
  }
