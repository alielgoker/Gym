import React from 'react'
import  {PlansData}  from '../../data/plansData'
import whiteTick from "../../assets/whiteTick.png"
import './Plans.css'
const Plans = () => {
  return (
    <div id='plans' className="plans-container">
<div className="blur blur-p-1 "></div>
<div className="blur blur-p-2 "></div>
{/* header */}
  <div className="heading-text m">
    <span className='stroke-text'>READY TO START</span>
    <span>YOUR JOURNEY</span>
    <span className='stroke-text'>NOW WITHUS</span>
  </div>

  <div className="plans">
    {PlansData.map( ( plan , i) => (

      <div key={i}  className="plan">
        {plan.icon}
        <span>{plan.name}</span>
        <span>$ {plan.price}</span>

        <div className="features">
          {plan.features.map( (feat , i ) => (
              <div key={i} className="feature">
                <img src={whiteTick} alt="" />
                <span>{feat}</span>
              </div>
          ) )}
        </div>

            <div>
              <span>See more benefits {"->"} </span>
            </div>
            <button className='btn' > Join Now</button>
      </div>
    ) )}
  </div>

    </div>
  )
}

export default Plans