import React from 'react'
import './Program.css';
import { programsData } from '../../data/programsData'
import RightArrow from '../../assets/rightArrow.png'
const Program = () => {
  return (
    <div className='program' id="programs">
{/* header */}

      <div className="heading-text">
        <span className='stroke-text'>Explore our</span>
        <span>Programs</span>
        <span className='stroke-text'>to shape you</span>
      </div>

{/* catigories */}

      <div className="programs-catigories">
      {programsData.map( (prog , i) => (
        <div key={i} className="catigory">
          {prog.image}
          <span>{prog.heading}</span>
          <span>{prog.details}</span>
          <div className="join-now">
            <span>Join Now</span>
            <img src={RightArrow} alt="" />
            </div>
        </div>
      ) )}
      </div>



    </div>
  )
}

export default Program