import React from 'react'
import '../styles/Waves.css'

// img
import header from '../assets/header.png';

const ImgHeader = () => {
  return (
    <div>
      <img className='img-header' src={header} alt='header'/>
    </div>
  )
}

export default ImgHeader
