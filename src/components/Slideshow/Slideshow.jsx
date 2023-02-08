
import React from 'react';
import { Slide } from 'react-slideshow-image';
import './Slideshow.css'
import image7 from '../../assets/IMG_banner.png'
import 'react-slideshow-image/dist/styles.css'
import vectordown from '../../assets/Vector_down.png'
import vectorup from '../../assets/Vector_up.png'

//         <img src={vectorup} alt="aa" />
//         const PrevArrow = (props) => {
//             const { onClick } = props;
//     return (
//       <div>
//         {/* onClick={onClick} */}
//         yeayya
//         <img src={vectorup} alt="aa" />
//       </div>
//     );
//   };
//   const CustomArrow = ({ direction, onClick }) => {
//     return (
//       <div
//         style={{
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//           height: '100%',
//           width: '50px',
//           backgroundColor: 'rgba(0,0,0,0.5)',
//           color: 'white',
//           cursor: 'pointer'
//         }}
//         onClick={onClick}
//       >
//         <i className={`fas fa-chevron-${direction === 'prev' ? 'left' : 'right'}`} />
//       </div>
//     );
//   };
  
//   const renderArrows = (onClick, direction, isDisabled) => {
//     return <CustomArrow onClick={onClick} direction={direction} />;
//   };



// const properties ={
//     duration: 2000,
//     indicators: false,
//     arrows: true,
//     renderArrows:{renderArrows}
//     // prevArrow:  <PrevArrow />
// }
// const buttonStyle = {
//     width: "30px",
//     background: 'none',
//     border: '0px'
// };
// style={{ ...buttonStyle }}
// style={{ ...buttonStyle }}
const properties = {
    prevArrow: <button ><svg width="48" height="80" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z" fill="white"/></svg></button>,
    nextArrow: <button ><svg width="48" height="80" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458V72.3458Z" fill="white"/></svg></button>
}

function Slideshow ({image1}) {

    return (
        <Slide {...properties}>
            {image1.map((picture)=> (
                <div className="each-slide" key={picture}>
                <img src={picture} alt="aaa" />
                </div>
            ))}
        </Slide>
    );
};

export default Slideshow;