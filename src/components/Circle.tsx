import '../css/Circle.css'
import IWord from '../interfaces/IWord'


export const Circle = ({ name, frequency, circleX, circleY, colour } : IWord) => {

    const circleSizeScaler: number = 40
    const containerScaler: number = 0.3
    const size: number = frequency * circleSizeScaler
    const leftX: number = (circleX ) * containerScaler
    const topY: number = (circleY ) * containerScaler

    console.log('leftX', leftX)
    console.log('topY', topY)
    console.log(colour)

    return (

      <div className="circle"
        style={{
          height: size,
          width: size,
          top: `${topY}px`,
          left: `${leftX}px`,
          borderRadius: size,
          backgroundColor: `#${colour}`
        }}
      ></div>

    )
  }
