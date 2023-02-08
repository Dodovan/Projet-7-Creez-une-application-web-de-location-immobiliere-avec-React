import { Link } from 'react-router-dom'
import Slideshow from "../../components/Slideshow/Slideshow"
import star from '../../assets/star.png'
import emptyStar from '../../assets/emptyStar.png'
import Accordion from "../../components/Collapse";
import './Card2.css'


function Card2 ({Logement}){
    const range = [1,2,3,4,5]
    const numberemptyStar = 5 - Logement.rating
    return(
    <div className='Card2wrapper'>
        <Slideshow image1={Logement.pictures}  />
        <div className='topofcard2'>
            <div className='title__location__tags'>
                <h1 className='title'>{Logement.title}</h1>
                <div className='location'><p>{Logement.location}</p></div>
                <div className='tags'>
                {Logement.tags.map((tag, index) => (
                <span className='tag' key={index}>{tag}</span>
            ))}
                </div>
            </div>
            <div className='host__rating'>
                <div className='host'><div className='Host__name'>{Logement.host.name}</div><div className='Host__picture'><img alt={Logement.title} src={Logement.host.picture} /></div></div>
                <div className='rating'>
                    {range.map((rangeElem) =>
                        Logement.rating >= rangeElem ? (
                            <span key={rangeElem.toString()}><img src={star} alt="logo" /></span>
                        ) : null
                    )}
                    {range.map((rangeElem) =>
                        numberemptyStar >= rangeElem ? (
                            <span key={rangeElem.toString()}><img src={emptyStar} alt="logo" /></span>
                        ) : null
                    )}
                </div>
            </div>
        </div>
        <div className='collapsegroup'>
            <div className='collapsegroup__description'>
                <Accordion key={Logement.id} heading="Description" content={Logement.description}  />
            </div>
            <div className='collapsegroup__equipment'>
                <Accordion key={Logement.id} heading="Equipement" content={Logement.equipments}  />
            </div>
        </div>
    </div>
    )
}
export default Card2
