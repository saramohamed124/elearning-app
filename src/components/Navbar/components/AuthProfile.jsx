import { Avatar, Box, Button, List, ListItem, styled, Typography } from '@mui/material'
import React from 'react'
import { ProverCostum } from '../../../styles/Navbar'
import {FlexboxBetween} from '../../../styles/globalStyles'
import avatar_instructor from '../assets/imgs/avatar_instructor.png';
import avatar_student from '../assets/imgs/avatar_student.png';
import courses from '../assets/icons/courses.svg';
import quiz from '../assets/icons/quiz.svg';
import settings from '../assets/icons/settings.svg';
import logout_icon from '../assets/icons/logout.svg'
import { Link } from 'react-router-dom'
import { getToken, logout } from '../../../services/authServices'
import { LinkCostum } from '../Navbar';
// Cookies
import Cookies from 'js-cookie';
import { useQuery } from '@tanstack/react-query';
import { studentService } from '../../../services/studentService';
import { instructorService } from '../../../services/instructorService';

const AuthProfile = () => {
    const { email } = getToken();
    // Role
    const role = Cookies.get('role')
    const id = Cookies.get('id')

    // Fetching Instructor Info
    const {data: InstructorData, instructorLoading, instructorError} = useQuery({
      queryKey:['data', id],
      queryFn: () => instructorService(id),
      enabled: role === "Instructor",
      staleTime: 60000
    });
    const instructor = InstructorData;

    // Fetching Student Info
    const {data, studentLoading, studentError} = useQuery({
      queryKey:['data', id],
      queryFn: () => studentService.getStudentInfo(id),
      enabled: role === 'Student',
      staleTime: 60000
    })
    const student = data?.data;

    // Style 
    const LinkCustom = styled(Link)({
        color:'blue',
        textDecoration:'none'
    });

    const ButtonLogout = styled(Button)({
        width: '100%',
        color:'black',
        ...FlexboxBetween
    });

    // Loading
    if(instructorLoading || studentLoading) return <p>جاري التحميل...</p>

    // Error
    if(instructorError || studentError) return <p>فشل تحميل الاسم</p>
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
            أهلاً, {instructor?.firstName} {instructor?.lastName}
        </Typography>
        <LinkCustom to={'/instructor-dashboard'}>عرض الملف الشخصي</LinkCustom>
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
          src={avatar_student} alt='avatar Student'/>
        <Box sx={{textAlign:'right'}}>
        <Typography variant='h6'>
            أهلاً, {student?.firstName}
        </Typography>
        <LinkCustom to={'/profile'}>عرض الملف الشخصي</LinkCustom>
        </Box>
      </ListItem>
      <ListItem sx={{FlexboxBetween, gap:'20px',justifyContent:'space-between'}}>
        <LinkCostum to={'/profile/courses'}>
          الكورسات
        </LinkCostum>
        <img src={courses} alt='courses'/>
      </ListItem>
      <ListItem sx={{FlexboxBetween, gap:'20px',justifyContent:'space-between'}}>
        <LinkCostum to={'/profile/quiz'}>
        الإختبارات
        </LinkCostum>
        <img src={quiz} alt='quiz'/>
      </ListItem>
      <ListItem sx={{FlexboxBetween, gap:'20px',justifyContent:'space-between'}}>
        <LinkCostum to={'/profile/settings'}>
          الإعدادات
        </LinkCostum>
        <img src={settings} alt='settings'/>
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
