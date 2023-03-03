import LogementCard from './Card/LogementCard';
import LogementFull from './Full/LogementFull';

function Card ({Logement,type}) {
  return(
    <div className='Cardwrapper'>
      {type=== "Card" &&(
        <LogementCard Logement={Logement}/>
      )}
      { type === "Full" &&(
        <LogementFull Logement={Logement}/>
      )}    
    </div> 
  )
}
export default Card
