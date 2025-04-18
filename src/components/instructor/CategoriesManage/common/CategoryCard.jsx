import { Avatar, Box, Card, styled, Typography } from '@mui/material'
import React from 'react'
import {  FlexboxBetween, FlexBoxCol } from '../../../../styles/globalStyles'

// icons
import category from '../assets/category.svg';

const CategoryCard = ({categoryName, categoryId, courseCount}) => {
    const CategoryCardCustom = styled(Card)({
        ...FlexboxBetween,
        gap:'20px',
        width:'200px',
        padding:'10px'
    })
  return (
    <CategoryCardCustom>
      <Avatar sx={{ width:'50px', height:'50px'}} src={category} alt='category'></Avatar>
      <Box sx={FlexBoxCol}>
        <Typography variant='h6' color='inherit'>{categoryName}</Typography>
        <Typography variant="subtitle" color="#79747E">عدد الكورسات: {courseCount}</Typography>
      </Box>
    </CategoryCardCustom>
  )
}

export default CategoryCard
