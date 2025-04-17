import React from 'react'
import InstructorInfo from '../InstructorInfo/components/InstructorInfo'
import { Box, styled } from '@mui/material'
import { FlexboxBetween } from '../../../styles/globalStyles'
import { Link } from 'react-router-dom'
import Headings from '../../../utils/Headings/Headings'
import InstructorCourses from '../DashboardHome/components/InstructorCourses'

const InstructorProfileInstructor = () => {
    const BackgroundBox = styled(Box)({
        width:'100%',
        height:'200px',
        background: '#FFD5D5'
    })

  return (
    <div>
        <BackgroundBox/>
        <InstructorInfo/>
              <Box padding={'0 40px'} sx={{
                ...FlexboxBetween,
                flexDirection: {xs:'column', md:'row'},
                alignItems:'center',
              }}>
                <Headings>كورساتي</Headings>
                <Link
                to={'/add-course'}
                style={{
                    backgroundColor:'var(--main-color-vibrant-orange)',
                    color:'black',
                    fontWeight:'bold',
                    padding:'10px 35px',
                    textDecoration:'none',
                    margin:'0',
                    borderRadius:'5px',
                }}>إضافة كورس</Link>
              </Box>
              <InstructorCourses/>
                
    </div>
  )
}

export default InstructorProfileInstructor
