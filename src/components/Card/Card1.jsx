import { Link } from 'react-router-dom'
function Card1 ({id,title,cover}){
    return(
    <div className="card">
    <Link to={`/logement/${id}`}>

        <img alt={`cover of ${title}`} src={cover} />
        <h2>{title}</h2>
        

    </Link>
    </div>
    )
}
export default Card1