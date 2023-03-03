import { Link } from 'react-router-dom'
import './LogementCard.css'

function LogementCard ({Logement}){
    return(
    <div className="card">
        <Link to={`/logement/${Logement.id}`}>
            <img alt={`cover of ${Logement.title}`} src={Logement.cover} />
            <div className='gradient'></div>
            <h2>{Logement.title}</h2>
        </Link>
    </div>
    )
}
export default LogementCard
