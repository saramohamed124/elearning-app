import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import React from 'react'

const Headings = ({children,valueColor}) => {
    const Heading = styled(Typography)(({theme})=>({
        position:'relative',
        color : valueColor,
        fontSize:'25px',
        padding:'5px',
        fontWeight:'bold',
        width:'fit-content',
        margin:'20px 0',
        '&::after':{
            content:'""',
            position:'absolute',
            bottom:'-3px',
            left:'0px',
            width:'100%',
            height:'3px',
            backgroundColor:'var(--main-color-vibrant-orange)'
        }
    }))
  return (
      <Heading>{children}</Heading>
  )
}

export default Headings