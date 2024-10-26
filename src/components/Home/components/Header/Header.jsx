import React from 'react'
import Waves from './components/Waves'
import ImgHeader from './components/ImgHeader'
import './styles/Waves.css'

const Header = () => {
  return (
    <div className="header">
      <Waves/>
      <ImgHeader/>
    </div>
  )
}

export default Header
