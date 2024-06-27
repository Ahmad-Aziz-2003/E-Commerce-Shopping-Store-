// import React from 'react'
// import './Hero.css'
// import hand_icon from '../Assets/hand_icon.png';
// import arrow_icon from '../Assets/arrow.png';
// import hero_image from '../Assets/hero_image.png';
// const Hero = () => {
//   return (
//     <div className='hero'>
//       <div className='hero-left'>
//                 <h2>NEW ARRIVALS ONLY</h2>

//             <div>
//                 <div className='hero-hand-icon'>
//                     <div><p>new</p></div>
//                    <div> <img src={hand_icon} alt="" /></div>
//                 </div>
//                 <p>collections</p>
//                 <p>for everyone</p>
//             </div>

//             <div className='hero-latest-btn'>
//                     <div>Latest Collection</div>
//                     <img src={arrow_icon} alt="" />
//             </div>
//         </div>

//         <div className='hero-right'>
//             {/* <img src={hero_image} alt="" /> */}
//         </div>
//     </div>
//   )
// }

// export default Hero


import React, { useState, useEffect } from 'react';
import './Hero.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch } from '@fortawesome/free-solid-svg-icons'; // Added FontAwesome icon for search

const Hero = () => {
  return (
    <div className='hero'>
      <div className="frontBox container">
        <div className="frontText">
          <h1>Fashion Finds Await </h1>
            <h1> Step Inside Our Store!</h1> {/* Main Headline */}
          <p>Discover your new favorite styles. Explore our wide collection of clothing and accessories for men, women, and children.</p> {/* Descriptive paragraph */}
          <div className="inputBox">
            <input type="text" name="" id="" placeholder="Search for your perfect outfit..." /> {/* Updated placeholder text */}
            <div className="search" id="search-bar-color">
              {/* <FontAwesomeIcon icon={faSearch} size="2x" /> Added search icon */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

