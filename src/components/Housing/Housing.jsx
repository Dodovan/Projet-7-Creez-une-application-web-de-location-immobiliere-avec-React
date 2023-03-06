import HousingCard from './Card/HousingCard';
import HousingFull from './Full/HousingFull';

function Housing ({Logement,type}) {
  return(
    <div className='Cardwrapper'>
      {type=== "Card" &&(
        <HousingCard Logement={Logement}/>
      )}
      { type === "Full" &&(
        <HousingFull Logement={Logement}/>
      )}    
    </div> 
  )
}
export default Housing
