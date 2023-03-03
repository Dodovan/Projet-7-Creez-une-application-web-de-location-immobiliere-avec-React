
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png'
import './Header.css'

function Header() {
    return (
        <div className='Header'>
            <div className='logo'>
                <img src={logo} alt="logo" />
            </div>
            <nav className='navi'>
                <NavLink to="/" className={({ isActive }) => (isActive ? 'nav__active' : 'nav__inactive')}>Accueil</NavLink>    
                <NavLink to="/about" className={({ isActive }) => (isActive ? 'nav__active' : 'nav__inactive')}>A propos</NavLink>     
            </nav>
        </div>
    )
  }
export default Header