import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div className='nav'>
<ul>
  <li>
    <Link className='link' to="/">Home</Link>
  </li>
  <li>
    <Link className='link' to="/reservations">Reservations</Link>
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
  )
}

export default Nav