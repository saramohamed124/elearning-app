import styled from '@emotion/styled'
import { Button, darken } from '@mui/material'
import React from 'react'

const ButtonAuth = React.memo(({children,...props}) => {
    const RegisterButton = styled(Button)(({theme}) =>({
        backgroundColor:'var(--main-color-vibrant-orange)',
        color:'black',
        fontWeight:'bold',
        padding:'10px 35px',
        margin:'10px auto',
        borderRadius:'5px',
        '&:hover': {
            backgroundColor: darken('#fb8500', 0.2),
        },
    }))    
      return (
    <RegisterButton type='submit' variant="contained" {...props}>{children}</RegisterButton>
  )
})

export default ButtonAuth
