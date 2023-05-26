import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Header.css'
import { done,gSym, toyota , barclays, airbnb } from '../../assets'

const Header = () => {
  return (
    <header>
      <div className='wrapper'>
        <Navbar/>
        <div className="section">
            <div className="bigtxt">
              Manage your projects and <br /> collaborate with teams
            </div>
            <div className="smalltxt">
              A tool for visualising , organising and tracking all the work you do
            </div>
            <div className="header-btn">
              <a href="./" id='getstart-header-btn'>Get Started</a>
              <a href="./" id='demo-btn'>Book Demo</a>
            </div>
            
        </div>

        <div className="done">
              <img src={done} alt="" id='done-img'/>
        </div>
        <div className="sponsors">
          <img src={gSym} alt="" id='gsym'/>
          <img src={toyota} alt="" id='toyota' />
          <img src={barclays} alt="" id='barclays' />
          <img src={airbnb} alt="" id='airbnb' />
        </div>
      </div>
    </header>
  )
}

export default Header