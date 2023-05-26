import React from 'react'
import { logo } from '../../assets'
import './Navbar.css'
const Navbar = () => {
  return (
    <nav>
        <div id='navlogo'>
          <img src={logo} alt="" />
          <div className='track'>TRACK</div>
        </div>
        <div id='menu'>
            <ul>
              <li><a href="#features">Features</a></li>
              <li><a href="#team"> Our Team</a></li>
              <li><a href="#pricing">Pricing</a></li>
            </ul>
        </div>
        <div className='autorizarion'>
            <a href="./">Sign In</a>
            <a href="./" id='getstarted'>Get Started</a>
        </div>
    </nav>
  )
}

export default Navbar