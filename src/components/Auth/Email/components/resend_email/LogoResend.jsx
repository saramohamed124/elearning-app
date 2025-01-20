import React from 'react'

// img
import resend from '../../assets/resend.svg';
import { FlexboxCenter, FlexBoxCol } from '../../../../../styles/globalStyles'
import { Box } from '@mui/material';

const LogoResend = () => {
        return (
      <Box sx={{ ...FlexboxCenter,...FlexBoxCol,width:'80%' }}>
          <img style={{width:'300px',maxWidth:'70%',margin: '20px auto'}} src={resend} alt="email"  />
      </Box>
    )
  }

export default LogoResend
