import React, { useState } from 'react'
import { Link } from 'react-router-dom';

// Components
import Links from './components/Links';
import AuthLinks from './components/AuthLinks';

// Navbar Styles
import { AccountIconCostum, NavbarContainer, ProverCostum } from '../../styles/Navbar';

// Global Styles
import { FlexboxBetween, TextDecorationNone } from '../../styles/globalStyles';

// MUI
import { AppBar, Box, List, ListItem, Popover } from '@mui/material';
import styled from '@emotion/styled';

// Img
import logo from '../assets/logo.png';

// icon
import account_icon from './assets/account.svg';
import bar_icon from './assets/bar.svg';
import courses_icon from './assets/courses.svg'
import category_icon from './assets/category.svg'
import instructor_icon from './assets/instructor.svg'

const Navbar = () => {
    const [AnchorEl, setAnchorEl] = useState(null);
    const [AnchorElAcc, setAnchorElAcc] = useState(null);


    // Handle Open Prover Links
    const handleOpenProver = (event) => {
        setAnchorEl(event.currentTarget)
    }

    // Handle Close
    const handleClose = () => {
        setAnchorEl(null);
    }

    const isOpen = Boolean(AnchorEl)

    // Handle Open Acc
    const handleOpenProverAuth = (event) => {
        setAnchorElAcc(event.currentTarget)
    }
    // Handle Close Auth Acc
    const handleCloseAuth = () => {
        setAnchorElAcc(null);
    }

    const isOpenAuth = Boolean(AnchorElAcc)
  return (
    <AppBar sx={NavbarContainer}>
        <Link to={'/'}>
        <img style={{maxWidth:'5rem'}} src={logo} alt='logo'/>
        </Link>
        <Links/>
        <Popover
        sx={{top:'10px'}}
        open={isOpen}
        anchorEl={AnchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <List sx={{...ProverCostum}}>
        {pages.map((item) => (
            <ListItem sx={FlexboxBetween}  key={item.link} onClick={handleClose}>
              <LinkCostum to={item.link} >{item.name}</LinkCostum>
              <img src={item.src} alt={item.name}/>
            </ListItem>
          ))}
           <hr/>
            <AuthLinks/>
        </List>
      </Popover>
        <Box sx={{...AccountIconCostum,
            display:{xs:'none',md:'block'},
            '&:hover':{
                backgroundColor:'#ded1d1'
            }}}
            onClick={handleOpenProverAuth}
            >
        <img style={{maxWidth:'2rem'}} src={account_icon} alt='account'/>
        </Box>
        <Popover
        sx={{top:'10px'}}
        open={isOpenAuth}
        anchorEl={AnchorElAcc}
        onClose={handleCloseAuth}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <AuthLinks/>
      </Popover>

        <Box 
        sx={{
            display: {
                xs: 'block',
                md: 'none'},
            padding:'10px 12px',
            transition:'0.3s',
            '&:hover': {
                backgroundColor:'var(--main-color-light-blue)',
                borderRadius:'50%', cursor:'pointer'}}}
        onClick={handleOpenProver}
        >
            <img style={{maxWidth:'2rem'}} src={bar_icon} alt='bar'/>
        </Box>
    </AppBar>
  )
}

export default Navbar

export const LinkCostum = styled(Link)({
    ...TextDecorationNone,
    whiteSpace:'nowrap',
    color:'black',
    position:'relative',
    fontWeight:'bold',
    '&::after':{
        position:'absolute',
        content:'""',
        left:'50%',
        transform: 'translateX(-50%)',
        bottom:'-10px',
        width:'0%',
        height:'2px',
        transition:'0.3s',
        backgroundColor:'var(--main-color-vibrant-orange)'
    },
    '&:hover::after':{
        width:'100%',
    }
});

export const pages = [
    {
        name:'الكورسات',
        link:'/courses',
        src: courses_icon
    },{
        name:'الأقسام الرائجة',
        link:'/trending',
        src: category_icon
    },{
        name:'المحاضرين',
        link:'/instructors',
        src: instructor_icon
    }
]
