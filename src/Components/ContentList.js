import React from 'react'
import '../Styles/Content.style.css'

const ContentList = ({icon, para, alt}) => {
  return (
    <div className='ContentList'>
      <div className='icon'><img src={icon} alt={alt} width='60px' height='60px'></img></div>
      <div className='para'>{para}</div>
    </div>
  )
}

export default ContentList
