import React from 'react';
import './Features.css'

import { headphones, twentyseven, backup, flexibility, interfac, storage } from '../../assets';

const Features = () => {
  return (
    <section id='features'>
          <div className='wrapper'>
            <h2>Bring team collaboration and productivity like never before.</h2>
                <div className="features-grid">
                      <div id='support' className='card'>
                          <img src={headphones} alt="" />
                          <h3>Support</h3>
                          <p>Centralize your data from multiple sources and process it in real time</p>
                      </div>
                      <div id='twentyseven' className='card'>
                          <img src={twentyseven} alt="" />
                          <h3>24/7</h3>
                          <p>Real time feedback for all your queries </p>
                      </div>
                      <div id='interfac' className='card'>
                          <img src={interfac} alt="" />
                          <h3>Interface</h3>
                          <p>Auto backup,smooth interface ensures you complete your scheduled tasks</p>
                      </div>
                      <div id='backup' className='card'>
                          <img src={backup} alt="" />
                          <h3>Backup</h3>
                          <p>Ensure no data is lost with our auto AI powered backup systems</p>
                      </div>
                      <div id='flexibility' className='card'>
                          <img src={flexibility} alt="" />
                          <h3>Flexibility</h3>
                          <p>Track’s world class interface built for speed and delight</p>
                      </div>
                      <div id='storage' className='card'>
                          <img src={storage} alt="" />
                          <h3>Storage</h3>
                          <p>Unlimited storage for your teams </p>
                      </div>

                </div>
          </div>
    </section>
  )
}

export default Features