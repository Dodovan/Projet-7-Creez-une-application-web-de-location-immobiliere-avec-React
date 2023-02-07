// import { Link } from 'react-router-dom'
// import logo from '../../assets/logo.png'
import './Banner.css'
import IMG_banner from '../../assets/IMG_banner.png'
import React, { Component } from 'react'

// class badou extends Component{
//     constructor(props){
//         super(props)
//         this.state={
//             isLoggedIn : true
//         }
//     }
//     render(){
//         return this.state.isLoggedIn ? (
//             <div>yooo</div>
//         ) :(
//             <div>ganagan</div>
//         )
//     }
// }
// export default badou


// function Banner(type) {
//  const number = 1
//     return(
//         {number === 1 ? <yo/> : type===2 <div/> }
//     )
//     if (type===1){
    // return (

    //     <div className='Banner'>
    //         <div className='Banner__texte'>
    //             Chez vous, partout et ailleurs
    //         </div>
    //         <div className='Banner__img'>
    //         </div>
    //     </div>
    // )
//   }
//   if (type === 2){
//     return(
//         <div>
//             yabadabadou
//         </div>
//     )
//   }
// }
function Banner ({type}){
    return (

        <div className='wrap-Banner'>
            {type===1?(
                <div className='Banner'>
            <div className='Banner__texte'>
                Chez vous, partout et ailleurs
            </div>
            <div className='Banner__img'></div>
            </div>):(
                <div className='Banner'>
                    <div className='Banner__img2'></div>
                </div>
            )
            
            }
         </div>
        
    )
    // return(
    //     <p>{type===2?("okkkkkkk"):(
    //         "nanan")}</p>
    //     )
}

  
  export default Banner