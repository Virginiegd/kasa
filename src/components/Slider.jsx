//import arrow_right from '../assets/arrow_right.png'
//import arrow_left from '../assets/arrow_left.png'
import { useState } from 'react'


function Slider({slides}) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const sliderStyles = {
    height:'100%',
    position:'relative'
  }
  const slideStyles = {
    width:'100%',
    height:'100%',
    borderRadius:'center', }
const leftArrowStyles = {
    position: 'absolute',
    top: '50%',
    transform: 'translate(0, -50%)',
    left:'32px',
    fontSize: '45px',
    color: 'white',
    zIndex: 1,
    cursor: "pointer"
}
const rightArrowStyles = {
    position: 'absolute',
    top: '50%',
    transform: 'translate(0, -50%)',
    right:'32px',
    fontSize: '45px',
    color: 'white',
    zIndex: 1,
    cursor: "pointer"
}

const nextImg = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex -1
    setCurrentIndex(newIndex)
}

const prevImg = () => {
    const isLastSlide = currentIndex === slides.length -1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
}
    return(
        <div style={sliderStyles}>
            <div style={leftArrowStyles} onClick={nextImg} > ❰ </div>
            <div style={rightArrowStyles} onClick={prevImg} > ❱ </div>
        <div style={slideStyles}>
        {slides[currentIndex]}
        </div>
        </div>
    )
}


export default Slider