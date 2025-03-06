import { Avatar, Box, Button, List, ListItem, styled, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { ProverCostum } from '../../../styles/Navbar'
import {FlexboxBetween} from '../../../styles/globalStyles'
import avatar_instructor from '../assets/imgs/avatar_instructor.png';
import avatar_student from '../assets/imgs/avatar_student.png';
import courses from '../assets/icons/courses.svg';
import settings from '../assets/icons/settings.svg';
import logout_icon from '../assets/icons/logout.svg'
import { Link } from 'react-router-dom'
import { getToken, logout } from '../../../services/authServices'
import  { InstructorProvider } from '../../../context/InstructorInfoProvider'
import { LinkCostum } from '../Navbar';
// Cookies
import Cookies from 'js-cookie';

const AuthProfile = () => {
    const { email } = getToken();
    const { instructor } = useContext(InstructorProvider);
    // Role
    const role = Cookies.get('role')

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
    <>
    {
    role === 'Instructor' ?
    <List sx={{...ProverCostum}}>
      <ListItem sx={{FlexboxBetween, gap:'20px',justifyContent:'center'}}>
        <Avatar
          sx={{ width: 65, height: 65 }}
          src={avatar_instructor} alt='avatar instructor'/>
        <Box sx={{textAlign:'right'}}>
        <Typography variant='h6'>
            أهلاً, {instructor?.firstName}
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
    :
    <List sx={{...ProverCostum}}>
    
      <ListItem sx={{FlexboxBetween, gap:'20px',justifyContent:'center'}}>
        <Avatar
          sx={{ width: 65, height: 65 }}
          src={avatar_student} alt='avatar instructor'/>
        <Box sx={{textAlign:'right'}}>
        <Typography variant='h6'>
            أهلاً, {instructor?.firstName}
        </Typography>
        <LinkCustom to={'/profile'}>عرض الملف الشخصي</LinkCustom>
        </Box>
      </ListItem>
      <ListItem sx={{FlexboxBetween, gap:'20px',justifyContent:'space-between'}}>
        <LinkCostum to={'/profile/settings'}>
          الإعدادات
        </LinkCostum>
        <img src={settings} alt='settings'/>
      </ListItem>
      <ListItem sx={{FlexboxBetween, gap:'20px',justifyContent:'space-between'}}>
        <LinkCostum to={'/profile/courses'}>
          الكورسات
        </LinkCostum>
        <img src={courses} alt='courses'/>
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
    }
    </>
  )
}

export default AuthProfile
