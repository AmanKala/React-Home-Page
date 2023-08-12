import React from 'react'
import '../Styles/Payment.style.css'
import icon1 from './Icon1.svg';
import icon2 from './Icon2.svg';

const Progressitem = ({step,text}) => {
  return (
    <>
        <span className='progressitem'>
            <span className=''>
                <img src={step===1?icon1:icon2} alt='icon'></img>
            </span>
            <p className='text'>{text}</p>
        </span>
    </>
  )
}

export default Progressitem;
