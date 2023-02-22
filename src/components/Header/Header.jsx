import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import './Header.css'

function Header() {
    return (
        <div className='Header'>
            <div className='logo'>
                <img src={logo} alt="logo" />
            </div>
            <nav className='navi'>
                <Link className='navi__Home'to="/">Accueil </Link>
                <Link className='navi__About' to="/about">A propos</Link>       
            </nav>
        </div>
    )
  }
export default Header