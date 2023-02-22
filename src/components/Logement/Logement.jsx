import './LogementCard.css'
import './LogementFull.css'
import LogementCard from './LogementCard';
import LogementFull from './LogementFull';

function Card ({id,title,cover,Logement,type}) {
    return(
        <div className='Cardwrapper'>
          {type===1?(
              <LogementCard id={id} cover={cover}title={title}/>
              ):(
                <LogementFull Logement={Logement}/>
            )
          }
        </div> 
  )
}
export default Card
