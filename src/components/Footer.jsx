import white__logo from '../assets/white__logo.png'

function Footer() {
    const cop= "© 2020 Kasa. All rights reserved";
    return(
        <footer className='footer'>
            <div className='footer__contend'>
            <img src={white__logo} alt='Kasa' className='footer__logo' />
            </div>
            <p>{cop}</p>
        </footer>
    )
}

export default Footer