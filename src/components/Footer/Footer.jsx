import React from 'react'
import { fb, insta, logo, twitter } from '../../assets'
import './Footer.css'
const Footer = () => {
  return (
    <footer id='footer'>
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
        <div className='social'>
            <a href="./"><img src={twitter} alt="" /></a>
            <a href="./" id='getstarted'><img src={fb} alt="" /></a>
            <a href="./"><img src={insta} alt="" /></a>
        </div>
    </footer>
  )
}

export default Footer