import { Link } from 'react-router-dom'
import red__logo from '../assets/red__logo.png'

function Header() {
    return(
        <header className='header'>
            <Link className='header__logo' to='/' ><img src={red__logo} alt='Kasa' /></Link>
            <nav className='header__nav'>
                <ul className='nav__ul'>
                    <li><Link className='nav__a' to="/">Accueil</Link></li>
                    <li><Link className='nav__a' to="/about">A Propos</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header