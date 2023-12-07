import React from 'react'

function LoadingScreen() {
    
  return (
    <div className='loading'>
      <div className="loading__content">
        <img src="images/aclogo.png" alt="" className='loading__logo'/>
        <p className='loading__text'> | Academy Students</p>
      </div>
    </div>
  )
}

export default LoadingScreen