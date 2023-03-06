import React from 'react';
import { Slide } from 'react-slideshow-image';
import './Slideshow.css'
import 'react-slideshow-image/dist/styles.css'

// flèches personalisé
const Arrows = {
    prevArrow: <button ><svg width="48" height="80" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z" fill="white"/></svg></button>,
    nextArrow: <button ><svg width="48" height="80" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458V72.3458Z" fill="white"/></svg></button>,

}
const properties = {
    arrows: false
}
// indicateurs personalisé
var Indicators = (scale) => {
    return (index) => (<div className="indicator">{index + 1}/{scale}</div>)
};

function Slideshow ({LogementPicture}) {
    return (
        <div>
            {LogementPicture.length === 1 &&(
                <Slide {...properties} indicators={Indicators(LogementPicture.length)}>
                    {LogementPicture.map((picture)=> (
                        <div className="each-slide" key={picture}>
                            <img src={picture} alt="Visualisation du logement"/>
                        </div>
                    ))}
                </Slide>
            )}
            {LogementPicture.length !== 1 &&(
                <Slide {...Arrows} indicators={Indicators(LogementPicture.length)}>
                    {LogementPicture.map((picture)=> (
                        <div className="each-slide" key={picture}>
                            <img src={picture} alt="Visualisation du logement"/>
                        </div>
                    ))}
                </Slide>
            )}                       
        </div>
    );
};
export default Slideshow;
