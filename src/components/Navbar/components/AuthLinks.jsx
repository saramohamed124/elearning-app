import { List, ListItem } from '@mui/material'
import React from 'react'
import { ProverCostum } from '../../../styles/Navbar'
import { LinkCostum } from '../Navbar'
import {FlexboxBetween} from '../../../styles/globalStyles'

// Icons
import register_icon from '../assets/register.svg'
import login_icon from '../assets/login.svg'

const AuthLinks = () => {
  return (
    <List sx={{...ProverCostum}}>
    <ListItem sx={{FlexboxBetween, gap:'20px',justifyContent:'center'}} >
      <LinkCostum to={'/register-instructor'} >إنشاء حساب
      </LinkCostum>
      <img src={register_icon} alt='register'/>
    </ListItem>
    <hr/>
    <ListItem sx={{FlexboxBetween,gap:'20px',justifyContent:'center'}} >
    <LinkCostum to={'/login'} >تسجيل الدخول
    </LinkCostum>
    <img src={login_icon} alt='login'/>
    </ListItem>
    </List>
)
}

export default AuthLinks
