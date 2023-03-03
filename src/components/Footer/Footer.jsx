import logo from '../../assets/logo_footer.png'
import './Footer.css'

function Footer() {
    return (
        <footer>
            <div className='footer__logo'>
                <img src={logo} alt="logo du site" />
            </div>
            <div className='footer__texte'>
                © 2020 Kasa. All rights reserved
            </div>
        </footer>
        
    )
}
export default Footer