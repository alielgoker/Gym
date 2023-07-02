import React, { useState } from 'react'
import './Header.css';
import logo from '../../assets/logo.png'
import bars from '../../assets/bars.png'
import { Link } from 'react-scroll';

const Header = () => {


  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpend , setMenuOpend] = useState(false)

  return (
    <div className="Header">
      <img src={logo} alt="" className='logo' />
{(menuOpend === false && mobile === true)? (
<div
onClick={() => {
  setMenuOpend(true)
  
  }}
><img 
className='fixed'
style={{width:'1.8rem' , height:'1.8rem' }}
src={bars} alt=""
 /></div>
)
:
    <ul
    onClick={() => {
      setMenuOpend(false)}}
    className='header-menu fixed'>
      {/* <li onClick={() => setMenuOpend(false)} ><Link>Home</Link></li>
      <li onClick={() => setMenuOpend(false)} >Programs</li>
      <li onClick={() => setMenuOpend(false)} >Why us</li>
      <li onClick={() => setMenuOpend(false)} >Plans</li> */}
      <li><Link
      onClick={() => setMenuOpend(false)}
      to='Hero'
      // span={true}
      smooth={true}
    >Home</Link></li>

      <li><Link
      onClick={() => setMenuOpend(false)}
      to='programs'
      // span={true}
      smooth={true}
    >Programs</Link></li>

      <li><Link
      onClick={() => setMenuOpend(false)}
      to='reasons'
      // span={true}
      smooth={true}
    >Why us</Link></li>

      <li><Link
      onClick={() => setMenuOpend(false)}
      to='plans'
      // span={true}
      smooth={true}
    >Plans</Link></li>

      <li><Link
      onClick={() => setMenuOpend(false)}
      to='Testimonials'
      // span={true}
      smooth={true}
    >Testimonials</Link></li>

      <li><Link
      onClick={() => setMenuOpend(false)}
      to='Footer'
      // span={true}
      smooth={true}
    >Footer</Link></li>
    </ul>
}

    </div>
  )
}

export default Header