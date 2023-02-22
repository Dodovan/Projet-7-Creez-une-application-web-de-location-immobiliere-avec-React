import { Link } from 'react-router-dom'
function LogementCard ({id,title,cover}){
    return(
    <div className="card">
    <Link to={`/logement/${id}`}>

        <img alt={`cover of ${title}`} src={cover} />
        <div className='gradient'></div>
        <h2>{title}</h2>
        

    </Link>
    </div>
    )
}
export default LogementCard