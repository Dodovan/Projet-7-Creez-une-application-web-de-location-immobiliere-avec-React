import './Card.css'
function Card ({id,title,cover}) {
    return(
        <li key={id} className="card">
            <h2>{title}</h2>
            <img alt={`cover of ${title}`} src={cover} />
        </li>
  )
  }
  
  export default Card