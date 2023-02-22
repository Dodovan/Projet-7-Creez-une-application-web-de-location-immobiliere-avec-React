import logements from "../../data/logements"
import { useParams } from 'react-router-dom'
import Card from "../../components/Logement/Logement";
import './Logement.css'
import { useNavigate } from "react-router-dom";
import React, { useEffect } from 'react';


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
            <Card type={2} Logement={logements[found]}/>            
        </div>
    );
    }
}  
export default Logement
