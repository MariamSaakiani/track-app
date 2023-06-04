import React, { useState } from 'react'
import "./Navbar.css";

import Modal from 'react-modal';
import { logo } from '../../assets'
  // Modal.setAppElement('#login');

const Navbar = () => {
  const [visible , setVisible] = useState(false);
  const [visibleUp, setVisibleUp] = useState(false);

  const customStyles = {
     content: {
    borderRadius: "25px",
    background: '#8b80f7',

    }
  }
  return (
    <>
      <nav>
        <div id="navlogo">
          <img src={logo} alt="" />
          <div className="track">TRACK</div>
        </div>
        <div id="menu">
          <ul>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#team"> Our Team</a>
            </li>
            <li>
              <a href="#pricing">Pricing</a>
            </li>
          </ul>
        </div>
        <div className="autorizarion">
          <button onClick={() => setVisible(true)}>Sign In</button>
          <button onClick={() => setVisibleUp(true)} id="getstarted">
            Get Started
          </button>
        </div>
      </nav>
      {/* className="modal" overlayClassName="overlay" */}
      <Modal
        isOpen={visible}
        onRequestClose={() => setVisible(false)}
        style={customStyles}
      >
        <form action="" className="loginform" id="login">
          <div className="login-txt">Log In</div>
          <div className="inpt-div">
            <input type="text" name="" id="username" placeholder="Username" />
            <input
              type="password"
              name=""
              id="password"
              placeholder="Password"
            />
          </div>

          <div className="buttons">
            <button id="back-btn" onClick={() => setVisible(false)}>
              Close form
            </button>
            <button id="login-btn" onClick={() => setVisible(false)}>
              login
            </button>
          </div>
        </form>
      </Modal>
      <Modal
        isOpen={visibleUp}
        onRequestClose={() => setVisibleUp(false)}
        style={customStyles}
      >
        <form action="" className="loginform" id="login">
          <div className="login-txt">Sign Up</div>
          <div className="inpt-div">
            <input type="text" name="" id="username" placeholder="Username" />
            <input
              type="password"
              name=""
              id="password"
              placeholder="Password"
              required
            />
            <input
              type="email"
              name=""
              id="email"
              placeholder="email"
              required
            />
          </div>

          <div className="buttons">
            <button id="back-btn" onClick={() => setVisibleUp(false)}>
             Back
            </button>
            <button id="login-btn" onClick={() => setVisibleUp(false)}>
              Sign Up
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
}

export default Navbar