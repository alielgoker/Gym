import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import './join.css';
const Join = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_mv9u62d', 'template_o4etuxc', form.current, 'lAHcZErbF-OU6iB7X')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div id='join' className='join' >
<div className='left-j'>
  <hr />
        <div>
        <span className='stroke-text'>READY TO</span>
        <span>LEVEL UP</span>
        </div>
        <div>
        <span>YOUR BODY</span>
        <span className='stroke-text'>WITH US?</span>
        </div>
</div>
<div className='right-j'>
    <form 
    ref={form} 
    className="email-container"
    onSubmit={sendEmail}
    >

      <input type="email"
      placeholder="Enter your email address"
      name='user_email'/>
  <button className='btn btn-j' >Join Now</button>
    </form>
</div>
    </div>
  )
}

export default Join