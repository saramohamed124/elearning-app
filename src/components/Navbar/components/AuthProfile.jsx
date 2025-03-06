import { Avatar, Box, Button, List, ListItem, styled, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { ProverCostum } from '../../../styles/Navbar'
import {FlexboxBetween} from '../../../styles/globalStyles'
import avatar from '../assets/imgs/avatar.png';
import logout_icon from '../assets/icons/logout.svg'
import { Link } from 'react-router-dom'
import { getToken, logout } from '../../../services/authServices'
import  { InstructorProvider } from '../../../context/InstructorInfoProvider'

const AuthProfile = () => {
    const { email } = getToken();
    const { instructor } = useContext(InstructorProvider);
    
    // Style 
    const LinkCustom = styled(Link)({
        color:'blue',
        textDecoration:'none'
    });

    const ButtonLogout = styled(Button)({
        width: '100%',
        color:'black',
        ...FlexboxBetween
    })
  return (
    <List sx={{...ProverCostum}}>
      <ListItem sx={{FlexboxBetween, gap:'20px',justifyContent:'center'}}>
        <Avatar src={avatar} alt='avatar'/>
        <Box sx={{textAlign:'right'}}>
        <Typography variant='h6'>
            أهلاً, {instructor.firstName}
        </Typography>
        <LinkCustom to={'/instructor-profile'}>عرض الملف الشخصي</LinkCustom>
        </Box>
      </ListItem>
      <hr/>
      <ListItem>
        <ButtonLogout onClick={() => logout(email)}>
            <Typography>
            تسجيل الخروج
            </Typography>
            <img src={logout_icon} alt='logout'/>
        </ButtonLogout>
      </ListItem>
    </List>
  )
}

export default AuthProfile
