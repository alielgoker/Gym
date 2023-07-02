import React from 'react'
import Header from '../Header/Header'
import './Hero.css'
import hero_image from "../../assets/hero_image.png"
import hero_image_back from "../../assets/hero_image_back.png"
import heart from '../../assets/heart.png'
import calories from '../../assets/calories.png'
import {motion} from 'framer-motion'
import NumberCounter from 'number-counter'

const Hero = () => {

  const mobile = window.innerWidth <= 768 ? true : false;
  const transtions = {type: 'string' , duration: 2}

  return (
    <div id='Hero' className="Hero">
        <div className="blur blur-h"></div>
        <div className="left"> 
        < Header />
  {/* {the best add "start"} */}
      <div className="the-best-ad">

      <motion.div
      initial={{left: mobile? "165" : "238"}}
      whileInView={{left:'8px'}}
      transition={{...transtions , type:'tween'}}
      ></motion.div>

      <span>the best fitness club in the towm</span>
      </div>
  {/* {the best add end} */}
  {/* {Hero Heding start} */}
  <div className="hero-text">
  <div>
      <span className='stroke-text'> shape </span>
      <span> your </span>
  </div>

  <div>
      <span>Ideal body</span>
  </div>

  <div >
    <span>in here we will help you to shape and build your ideal body and live up your life to fullest</span>
  </div>

  </div>
{/* figures start */}

  <div className="figures">
    <div>
    <span>
      <NumberCounter  end={140} start={100} delay={4} preFix="+"/>
    </span>
    <span>expert coaches</span>
      </div>
    <div>
    <span>
      <NumberCounter  end={978} start={900} delay={4} preFix="+"/>
      </span>
    <span>members joined</span>
      </div>
    <div>
    <span>
    <NumberCounter end={185} start={100} delay={4} preFix="+"/>
      </span>
    <span>fitness programs</span>
      </div>
  </div>
{/* hero buttons */}
<div className="hero-buttons">
    <button className='btn'>Get Started</button>
    <button className='btn'>Learn More</button>
</div>

      </div>
      <div className="right">
        <button className='btn'> Join Now </button> 

      <motion.div
      initial={{right:'-1rem'}}
      whileInView={{right:'4rem'}}
      transition={transtions}
      className="heart-rate">
        <img src={heart} alt="" />
        <span>Heart Rate</span>
        <span>116 bpm </span>
      </motion.div>
{/* hero image */}
        <img className='hero-image'  src={hero_image} alt=""/>
        <motion.img
        initial={{right:'11rem'}}
        whileInView={{right:'20rem'}}
        transition={transtions}
        
        className='hero-image-back'  src={hero_image_back} alt=""/>
{/* calories */}
      <motion.div
            initial={{right:'37rem'}}
            whileInView={{right:'28rem'}}
            transition={transtions}
      className="calories">
        <img src={calories} alt="" />
        <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
        </div>
      </motion.div>

      </div>
    </div>
  )
}

export default Hero


//rafce

