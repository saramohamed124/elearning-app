import { Box } from '@mui/material'
import React from 'react'
// icons
import email from '../../assets/email_send.svg'
import { FlexboxCenter, FlexBoxCol } from '../../../../../styles/globalStyles'

const BorderImg = {
    'width': '100%',
    'maxWidth': '450px',
    'height': '4px',
    'background': 'var(--main-color-dark-teal)',
    'borderRadius': '15px'
}

const LogoEmail = () => {
  return (
    <Box sx={{ ...FlexboxCenter,...FlexBoxCol,width:'80%' }}>
        <img style={{maxWidth:'300px'}} src={email} alt="email"  />
        <hr style={BorderImg}/>
    </Box>
  )
}

export default LogoEmail
