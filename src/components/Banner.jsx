import banner1 from '../assets/banner1.png'

function Banner() {
    const banner_text="Chez vous, partout et ailleurs";
    return(
        <div className='banner'>
            <img src={banner1} alt="Paysage" className='banner__img' />
            <div><p className='banner__text'>{banner_text}</p></div>
            
        </div>
    )
}

export default Banner