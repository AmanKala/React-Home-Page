import React from 'react'
import '../Styles/Payment.style.css'
import Progressitem from './Progressitem';

const Progressbar = () => {
  return (
    <div className='progressbar'>
        <Progressitem step={1} text={'Sign Up'}></Progressitem>
        <Progressitem step={2} text={'Subscribe'}></Progressitem>
    </div> 
  )
}

export default Progressbar;
