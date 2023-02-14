import logements from "../../data/logements"
import { Navigate, useParams } from 'react-router-dom'
import Slideshow from "../../components/Slideshow/Slideshow"
import Card from "../../components/Card";
import './Logement.css'
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from 'react';


var arrayid = [];
var i = 0;
logements.forEach(element => {

    arrayid[i]= logements[i].id;
    i++;
});


function Logement ()  {
    const id = useParams()
    console.log(id.id)
    console.log(arrayid)
    const found = arrayid.indexOf(id.id)
    console.log(found)
    const navigate = useNavigate()  
    useEffect(() => {
    if(found === -1){
            navigate('/error')
            console.log("it work")
        }
        
    })
    if (found !== -1){
    return (
        <div className="pageLogement">
            {/* <img alt="aaaaaaa" src={logements[found].pictures[1]} /> */}

            <Card type={2} Logement={logements[found]}/>


            
            
        </div>
    );
}
    // else{
        

    



    }
// }
        //     {/* {logements[found].pictures.map((picture)=> (
        //     <div className="each-slide">
        //     <img src={picture} alt="aaa" />

        // </div>
        //         ))} */}
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