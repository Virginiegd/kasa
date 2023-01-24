import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

function Header() {
    return(
        <header className='header'>
            <img src={logo} alt='Kasa' />
            <nav className='nav'>
                <ul className='nav__ul'>
                    <li ><Link className='nav__li' to="/">Accueil</Link></li>
                    <li><Link className='nav__li' to="/about">A propos</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header