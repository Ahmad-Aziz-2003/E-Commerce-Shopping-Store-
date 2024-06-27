import React from 'react'
import './Offer.css'
// import exclusive_image from '../Assets/exclusive_image.png'
import exclusive_image from '../Assets/banercol.png'
const Offers = () => {
  return (
    <div className='offers'>
    <div className="offers-left">
      <h1>Exclusive</h1>
      <h1>Offers For You</h1>
      <p>ONLY ON BEST SELLERS PRODUCTS</p> {/* Close the <p> tag */}
      <button>Check Now</button>
    </div>
    <div className="offers-right">
      <img src={exclusive_image} alt="" />
    </div>
  </div>
  
  )
}

export default Offers
