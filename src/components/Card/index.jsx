import Logement from '../../pages/Logement';
import './Card.css'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
// const urllogement = window.location.href
// console.log(urllogement);

function Card ({id,title,cover}) {
    return(
        // <li key={{id}} className="card">
            <div className="card">
        <Link to={`/logement/${id}`}>


            <h2>{title}</h2>
            <img alt={`cover of ${title}`} src={cover} />


        </Link>
        </div>
        // {/* </li> */}
  )
  }
  
  export default Card

//   <a href = {window.location.href + "logement?id=" + id} >
//             </a>