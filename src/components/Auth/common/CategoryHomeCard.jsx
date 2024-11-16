import styled from '@emotion/styled'
import { Avatar, Box } from '@mui/material'
import React from 'react'
import { FlexboxCenter } from '../../../styles/globalStyles'
import { Link } from 'react-router-dom'

const CategoryHomeCard = ({iconCategorySrc,linkCategory, CategoryName}) => {
    const TypoCustom = styled(Link)(({theme})=>({
        width:'fit-content',
        minWidth:'100px',
        backgroundColor:'var(--main-color-dark-teal)',
        color:'white',
        padding:'15px 25px',
        fontWeight:'bold',
        textAlign:'center',
        borderRadius:'5px',
        textDecoration:'none'
    }))
  return (
    <Box sx={{...FlexboxCenter,flexDirection:'column',gap:'15px',margin:'20px auto'}}>
        <Avatar sx={{ bgcolor: 'white', width: 80, height: 80  }}>
            <img style={{width:'40px'}} src={iconCategorySrc} alt='' />
        </Avatar>
        <TypoCustom to={linkCategory}>{CategoryName}</TypoCustom>
    </Box>
  )
}

export default CategoryHomeCard
