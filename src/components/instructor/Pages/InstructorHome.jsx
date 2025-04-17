import React from 'react'
import Articles from '../DashboardHome/Articles'
import {LineChartArticles} from '../DashboardHome/components/LineChartArticles'
import Headings from '../../../utils/Headings/Headings'
import InstructorCourses from '../DashboardHome/components/InstructorCourses'
import { Box } from '@mui/material'
import { FlexboxBetween } from '../../../styles/globalStyles'
import { Link } from 'react-router-dom'

const InstructorHome = () => {
  return (
    <div>
        <Headings>لوحة التحكم</Headings>
      <Articles/>
      <LineChartArticles/>
      <Box sx={{
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

export default InstructorHome
