import { Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const ExploreHeader = () => {
  return (
    <div className='explore'>
      <Typography variant='h5' className='explore-title' sx={{color: 'var(--main-color-golden-yellow)', fontWeight:'bold'}}>E Learning</Typography>
      <p>تعلم مهارات جديدة وحقق طموحاتك مع أفضل الدورات التعليمية عبر الإنترنت</p>
      <Link className='explore-btn' to={'/courses'}>تصفح الكورسات</Link>
    </div>
  )
}

export default ExploreHeader
