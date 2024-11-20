import styled from '@emotion/styled'
import { Box } from '@mui/material'
import React from 'react'
import Logo from './components/Logo'
import Categories from './components/Categories'
import SocialLinks from './components/SocialLinks'

const Footer = () => {
    const FooterCustom = styled(Box)(({theme})=>({
        backgroundColor:'var(--main-color-dark-teal)',
        padding:'20px 15px',
        display:'flex',
        flexDirection:'row',
        gap:'25px 30px',
        justifyContent:'space-around',
        alignItems:"center",
        color:'white',
        textAlign:'center',
        [theme.breakpoints.down('sm')]: {
            justifyContent:'center',
            flexDirection:'column'
        },
    }))
  return (
    <FooterCustom>
      <Logo/>
      <Categories/>
      <SocialLinks/>
    </FooterCustom>
  )
}

export default Footer
