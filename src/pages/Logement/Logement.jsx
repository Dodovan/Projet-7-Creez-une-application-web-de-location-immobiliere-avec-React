import logements from "../../data/logements"
import { useParams } from 'react-router-dom'
import Housing from "../../components/Housing/Housing";
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
    const idfound = arrayid.indexOf(id.id)
    const navigate = useNavigate()
    // Si l'id  passé dans l'url ne correspond pas a un logement alors je renvoie sur la page d'erreur
    useEffect(() => {
    if(idfound === -1){
            navigate('/error')
        }        
    })
    // sinon je renvoie sur la page du logement
    if (idfound !== -1){
    return (
        <div className="pageLogement">
            <Housing type={"Full"} Logement={logements[idfound]}/>            
        </div>
    );
    }
}  
export default Logement
