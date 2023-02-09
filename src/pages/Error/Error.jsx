import './Error.css'
import { Link } from 'react-router-dom'
function Error () {
    return (
        <div className='pageError'>
            <div className='Error__404'>404</div>
            <div className='Error__description'>Oups! La page que vous demandez n'existe pas.</div>
            <Link to={`/`}> Retourner sur la page d'accueil</Link>

        </div>
      );

  }
  
  export default Error

