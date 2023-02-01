import logements from "../../data/logements"
import { useParams } from 'react-router-dom'
import Slideshow from "../../components/Slideshow/Slideshow"


var arrayid = [];
var i = 0;
logements.forEach(element => {

    arrayid[i]= logements[i].id;
    i++;
});


const Logement = () => {
    const id = useParams()
    console.log(id.id)
    console.log(arrayid)
    const found = arrayid.indexOf(id.id)
    console.log(found)


    return (
        <div>
            {/* <img alt="aaaaaaa" src={logements[found].cover} /> */}
            {/* <img src={logements[found].pictures[3]} alt="aaa" /> */}
            <Slideshow image1={logements[found].pictures} />
            {/* {logements[found].pictures.map((picture)=> (
            <div className="each-slide">
            <img src={picture} alt="aaa" />

        </div>
                ))} */}
            
            
        </div>
    );
}

// image1={logements[found].pictures[1]} image2={logements[found].pictures[1]}
// function Logement () {

//     return (
//         <div>
// yaaaaaaaaaaaaaaaaaaa
//         </div>
//       );

//   }
  
  export default Logement


// function Logement () {
//     const {test} = useParams()
//     console.log(test)
//     return (
//         <div>
//             {logement.id}
//             <img alt="a" src={logement.cover} />
//         </div>
//       );

//   }
  
//   export default Logement