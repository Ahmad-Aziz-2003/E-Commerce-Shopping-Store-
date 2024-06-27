import React, { useRef, useState } from 'react';
import { useContext,useEffect } from 'react';
import { ShopContext } from '../../context/ShopContext';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Navbar.css';

import logo from '../Assets/logo0.png';
import cart from '../Assets/cart_icon.png';
import nav_dropdown from '../Assets/nav_dropdown.png'

const Navbar = () => {

    
    // useEffect(() => {
    //     const colors = ['#e26398', '#65a9e0', '#78d4a4', '#f4d160']; // Define the colors to transition
    //     let currentIndex = 0;
    
    //     const interval = setInterval(() => {
    //       currentIndex = (currentIndex + 1) % colors.length; // Increment index and loop back to start if needed
    //       const navbar = document.querySelector('.Navbar');
    //       navbar.style.backgroundColor = colors[currentIndex]; // Update navbar background color
    
    //       // Update button background color
    //       const buttons = document.querySelectorAll('.btn');
    //       buttons.forEach(button => {
    //         button.style.backgroundColor = colors[currentIndex];
    //       });
    //     }, 12500); // Change color every 12.5 seconds (50 seconds / 4 colors)
    //     return () => clearInterval(interval);
    //   }, []);


    const [menu, setMenu] = useState("Shop");
    const {getTotalCartItems} = useContext(ShopContext);
    const menuRef=useRef();
    const dropdown_toggle=(e)=>{
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    }
    return (
        <div className='Navbar'>
            <div className="nav-logo">
                <img src={logo} alt="" />
            </div>
            <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" />
            <ul ref={menuRef} className='nav-menu'>
                <li className="atag" onClick={() => { setMenu("shop") }}> <Link className='styl' to='/'>Shop</Link>{menu === "shop" ? <hr /> : <></>}</li>
                <li className="atag" onClick={() => { setMenu("men") }}> <Link className='styl' to='/mens'> Men</Link>{menu === "men" ? <hr /> : <></>}</li>
                <li className="atag" onClick={() => { setMenu("women") }}><Link className='styl' to='/womens'> Women</Link>{menu === "women" ? <hr /> : <></>}</li>
                <li className="atag" onClick={() => { setMenu("kids") }}><Link className='styl' to='/kids'> Kid</Link>{menu === "kids" ? <hr /> : <></>}</li>
                <li className="atag" onClick={() => { setMenu("foot wear") }}><Link className='styl' to='/foot wear'> Foot wear</Link>{menu === "foot wear" ? <hr /> : <></>}</li>
                <li className="atag" onClick={() => { setMenu("Fragrence") }}><Link className='styl' to='/Fragrence'> Fragrence</Link>{menu === "Fragrence" ? <hr /> : <></>}</li>
            </ul>

            <div className="nav-login-cart">
                {localStorage.getItem('auth-token')
                ?<button className='btn' onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>
                :<Link to='/login'><button className='btn'>log in</button></Link>}
                
                <Link to='/cart'><img src={cart} alt="" /></Link>
                <div className="cart_count">{getTotalCartItems()}</div>
            </div>
        </div>
    );
}

export default Navbar;
