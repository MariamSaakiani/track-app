import React from 'react'
import './Team.css'
import { ceotag, star, team1, team2, team3, team4, team5, user1, user2 } from '../../assets'
const Team = () => {
  return (
    <section id='team'>
      <div className="wrapper">
        <h2>Your favorite project management team now flexible enough to take on any
           <br /> project. Work how you want and where you want.</h2>
           <div className='ceotag'><img src={ceotag} alt="" /></div>
        <div className="team-members">
          <div className="member-circle" id='team1' ><img src={team1} alt="" id='team1-img' /></div>
          <div className="member-circle" id='team2'><img src={team2} alt="" id='team2-img' /></div>
          <div className="member-circle" id='ceo'><img src={team3} alt="" id='ceo-img' /></div>
          <div className="member-circle" id='team4'><img src={team4} alt="" id='team4-img' /></div>
          <div className="member-circle" id='team5'><img src={team5} alt="" id='team5-img' /></div>
        </div>
        <h2>2000+ Happy users</h2>
        <div className="reviews">
          <div className="rev-1">
            <div className="imgdiv-rev">
              <img src={user2} alt="" className='rev-img'/>
            </div>
            <div className="txtdiv">
              <div className="stardiv">
                <img src={star} alt="" id='star' />
                <img src={star} alt="" id='star' />
                <img src={star} alt="" id='star' />
                <img src={star} alt="" id='star' />
                <img src={star} alt="" id='star' />
              </div>
              <h3>Track has simplified all my tasks.Managing my work has become easier.”</h3>
              <h4>Jenny Wilson <span>Grower.io</span></h4>
            </div>
          </div>
          <div className="rev-1">
            <div className="imgdiv-rev">
              <img src={user1} alt="" className='rev-img'/>
            </div>
            <div className="txtdiv">
              <div className="stardiv">
                <img src={star} alt="" id='star' />
                <img src={star} alt="" id='star' />
                <img src={star} alt="" id='star' />
                <img src={star} alt="" id='star' />
                <img src={star} alt="" id='star' />
              </div>
              <h3>No more switching between taks .Time management has become efficient for my team</h3>
              <h4>Devon Lane <span>DLDesign.co</span></h4>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Team