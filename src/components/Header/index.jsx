import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import './Header.css'

function Header() {

    return (
        <div className='Header'>
            <div className='logo'>
                <img src={logo} alt="logo" />
            </div>
            <nav className='nav'>
                <Link className='nav__About' to="/about">A propos</Link>
                <Link className='nav__Home'to="/">Accueil </Link>
            </nav>
        </div>
    )
  }
  
  export default Header