import React from 'react'
import '../Styles/Content.style.css'
import ContentList from './ContentList'
import icon from './Icon.svg';
import icon2 from './Icon-2.svg';
import icon3 from './Icon-3.svg';
import icon4 from './Icon-4.svg';
import icon5 from './Icon-5.svg';
import Payment from './Payment';

const Content = () => {
  return (
    <div className="container">
      <div className='right-content'>
        <div className='Heading'>
            <h1>Access curated courses worth
            <span className='heading-line-2'>
                <span className='strike'>
                  <span className='strike-word'>₹ 18,500 </span>
                </span>
                <span>&nbsp; at just <span className='Blue-word'>₹99</span> per Year! </span>
              </span> 
              </h1>
        </div>
              <ContentList icon={icon} para={<div><span className='Blue-word'>100+</span><span> relevant Job ourses</span></div>} alt={"icon"}/>
              <ContentList icon={icon2} para={<div><span className='Blue-word'>20,000+</span><span> Hours of content </span></div>} alt={"icon"}/>
              <ContentList icon={icon3} para={<div><span className='Blue-word'>Exclusive</span><span> webinar access</span></div>} alt={"icon"}/>
              <ContentList icon={icon4} para={<div><span> Scholarship worth</span><span className='Blue-word'> ₹94,500</span></div>} alt={"icon"}/>
              <ContentList icon={icon5} para={<div><span className='Blue-word'>Ad Free </span><span> learning experience</span></div>} alt={"icon"}/>
      </div>
      <div className='right-side'>
        <Payment/>
      </div>
    </div>
  )
}

export default Content
