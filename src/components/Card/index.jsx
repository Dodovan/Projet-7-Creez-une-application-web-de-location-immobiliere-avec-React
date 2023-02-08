import Logement from '../../pages/Logement';
import './Card.css'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import Card1 from './Card1';
import Card2 from './Card2';
// const urllogement = window.location.href
// console.log(urllogement);

function Card ({id,title,cover,Logement,type}) {
    return(
        <div className='Cardwrapper'>
            {type===1?(
                <Card1 id={id} cover={cover}title={title}/>
                ):(
                <Card2 Logement={Logement}/>
            )
            
            }
         </div>
)
  }
  
  export default Card






// function Card ({id,title,cover}) {
//     return(
//             <div className="card">
//             <Link to={`/logement/${id}`}>
        
//                 <img alt={`cover of ${title}`} src={cover} />
//                 <h2>{title}</h2>
                
        
//             </Link>
//             </div>)
//   }