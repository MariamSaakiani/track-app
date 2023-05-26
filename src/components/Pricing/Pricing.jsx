import React from 'react'
import './Pricing.css'

const Pricing = () => {
  return (
    <section id='pricing'>
      <div className="wrapper">
        <div className="txt-pricing">
          <h1>It's free,
           it's easy and it's fun
            to use for your first project.</h1>
          
        </div>

        <div className="price-card">
          <div className="card" id='blue'>
            <div id='hh2'>Premium Pack</div>
            <div id='hh3'>Small teams</div>
            <div id='hh4'>$20/Month</div>
            <div id='hh5'>5 team members <br />  file sharing <br />Financial Service Features</div>
            <button id='but-white' >$ 20/ Month</button>
          </div>

          <div className="card" id='white'>
            <div id='hh2'>Free pack</div>
            <div id='hh3'>Customer Reach & Budget</div>
            <div id='hh4'>$0/Month</div>
            <div id='hh5'>1 team member <br /> No file sharing<br />100 Mb storage</div>
            <button id='but-blue' >Try for Free</button>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Pricing