import '../css/Circle.css'
import IWord from '../interfaces/IWord'


export const Circle = ({ name, frequency, circleX, circleY, colour } : IWord) => {

    const circleSizeScaler: number = 40
    const circleSizeLimit: number = 500
    const containerScaler: number = 0.44 // this should match OutputCircle.css's h/w, eg. 0.5 matching 500px
    const circleOpacity: number = 0.2
    let size: number = frequency * circleSizeScaler
    size = (size > circleSizeLimit) ? circleSizeLimit : size
    const leftX: number = (circleX - (size / 2)) * containerScaler
    const topY: number = (circleY - (size / 2)) * containerScaler


    return (

      <div className="circle"
        style={{
          height: size,
          width: size,
          top: `${topY}px`,
          left: `${leftX}px`,
          borderRadius: size,
          backgroundColor: `#${colour}`,
          opacity: circleOpacity,
          transition: 'opacity 1s'
        }}
      ></div>

    )
  }
