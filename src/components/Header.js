import React from 'react'
import logo from  '../assets/logo.png'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='header'>
       <Link to='/' className='header-link'> <img src={logo} alt="logo" /> </Link>
    </div>
  )
}

export default Header