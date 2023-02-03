import arrow_right from '../assets/arrow_right.png'
import arrow_left from '../assets/arrow_left.png'
import { useState } from 'react'


function Slider({slides}) {
  const [currentIndex, setCurrentIndex] = useState(0)




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
        <div className='container__slider'>
            {slides[currentIndex]}
            <span className="leftArrowStyles" onClick={nextImg} > <img src={arrow_left} alt='flèche'/> </span>
            <span className='rightArrowStyles' onClick={prevImg} > <img src={arrow_right} alt='flèche'/> </span>
            <div className='slider__counter'>
                <p>{currentIndex + 1}/{slides.length}</p>
            </div>
        </div>
    )
}


export default Slider

