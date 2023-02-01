
import React from 'react';
import { Slide } from 'react-slideshow-image';
import './Slideshow.css'
import image7 from '../../assets/IMG_banner.png'
import 'react-slideshow-image/dist/styles.css'

function Slideshow ({image1}) {
    var i =0;
    return (
        <Slide>

            {image1.map((picture)=> (
            <div className="each-slide">
            <img src={picture} alt="aaa" />

        </div>
                ))}
            

            {/* <div className="each-slide">
            <img src={image2} alt="aaa" />

            </div> */}
        </Slide>
    );
};

export default Slideshow;