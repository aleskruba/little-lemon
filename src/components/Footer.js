import React from 'react'
//import logo from  '../assets/logo.png'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div className='footer' >
 
        <div className='navigation'>
            <h1>Navigation</h1>
            <ul>
            <li>
                <Link className='link' to="/">Home</Link>
            </li>
    
            <li>
                <Link className='link' to="/menu">Menu</Link>
            </li>
            <li>
                <Link className='link' to="/order">Order Online</Link>
            </li>
            <li>
                <Link className='link' to="/about">About Us</Link>
            </li>
            <li>
                <Link className='link' to="/login">Login</Link>
            </li>
            </ul>
        </div>
        <div className='contact'>
         <h1>Contact</h1>
            <ul>
                <li>Phone Number</li>
                <li>Email</li>
                <li>Address</li>            
            </ul>
        </div>
        <div className='social'>
            <h1>Social Media
            </h1>
            <ul>
                <li>Instagram</li>
                <li>LinkedIn</li>
                <li>Pinterest</li>  
            </ul>
        </div>
 {/*        <div className='image'>
             <img src={logo} alt="logo" /> 
        </div> */}

    </div>
  )
}

export default Footer