import React from 'react'
import './Navbar.css'
import navlogo from '../../assets/logo0.png'
import navProfile from '../../assets/nav-profile.svg'


const Navbar = () => {
  return (
    <div className='navbar'>
      <div><img src={navlogo} alt="" className='nav-logo' /></div>
        
        <div className='one-line'>
          <h2>Admin Panel</h2>
          <img src={navProfile} alt=""  className='nav-profile'/>
        </div>
        
      
    </div>
  )
}

export default Navbar
