import React, { useState } from 'react'
import './testimonials.css';
import {testimonialsData} from '../../data/testimonialsData'
import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'
import {motion} from 'framer-motion'
const Testimonials = () => {
const transtions = {type: 'string' , duration: 0.5}
const [selected , setSelected] = useState(0)
const tLength = testimonialsData.length;
  return (
    <div id='Testimonials' className="Testimonials">
      <div className="left-t">
        <span>TESTIMONIALS</span>
        <span className='stroke-text'>WHAT THEY</span>
        <span>SAY ABOUT US</span>
        <motion.span
        key={selected}
        initial={ {opacity: 0 , x:-100}}
        animate= {{opacity:1 , x:0}}
        exit={{opacity:0 , x:100}}
        transition={transtions}
        >{testimonialsData[selected].review}</motion.span>
        <span>
          <span>
            {testimonialsData[selected].name}
          </span>
          {" "}- {testimonialsData[selected].status}
        </span>
      </div>
      <div className="right-t">

        <motion.div
        initial={{ opacity: 0 , x:-100 }}
        whileInView={{opacity:1 , x:0}}
        transition={{...transtions , duration: 2}}
        ></motion.div>

        <motion.div
        initial={{ opacity: 0 , x:100 }}
        transition={{...transtions , duration: 2}}
        whileInView={{opacity:1 , x:0}}
        ></motion.div>

        <motion.img
        key={selected}
        initial={ {opacity: 0 , x:100}}
        animate= {{opacity:1 , x:0}}
        exit={{opacity:0 , x:-100}}
        transition={transtions}
        src={testimonialsData[selected].image} alt="" />
        <div className="arrows">
          <img
          onClick={ () => {
            selected === 0 
            ?setSelected(tLength - 1 )
            :setSelected( (pev) => pev - 1 )
          }  }
          src={leftArrow} alt="" />
          <img
            onClick={ () => {
              selected === tLength - 1  
              ?setSelected(0 )
              :setSelected( (pev) => pev + 1 )
            }  }
          src={rightArrow} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Testimonials