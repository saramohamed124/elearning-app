import React from 'react'
// Global Styles
import { PositionRelative, WidthFit, OverflowHidden, TextLeft,  } from '../styles/globalStyles'

// logo
import deal_logo from '../components/assets/course.jpg'

// MUI
import { Box, Grid2, Rating, Typography } from '@mui/material'
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';


import styled from '@emotion/styled'

const Deal = () => {
    const [value, setValue] = React.useState(2);

    // Info Deal Style
    const InfoDeal = styled(Box)(({theme})=>({
        ...TextLeft,
        position: 'absolute',
        top: '50%',
        left:'50%',
        width: '94%',
        height: 'fit-content',
        padding: '10px',
        backgroundColor: 'white',
        transform: 'translateX(-50%)'
        }))

    // Progress
    const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
      height: 3,
      borderRadius: 5,
      [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: '#D9D9D9',
      },
      [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: 'var(--main-color-golden-yellow)',
      },
    }));
    
    
  return (
    <Box sx={{...PositionRelative, ...WidthFit, ...OverflowHidden}}>
      <img src={deal_logo} alt='deal logo'/>
      <InfoDeal>
        <Typography variant='h6'>
        {"Learn React From zero to hero".length > 15 ? '...' + 'Learn React From zero to hero'.substring(0, 16)  : "Learn React From zero to hero"}
        </Typography>
        <Typography sx={{color:'#666666'}}>Sara Mohamed</Typography>
        <Grid2 sx={{justifyContent:'space-between', alignItems:'center'}} container spacing={2}>
            <Grid2 size={5}>
            <Typography sx={{fontSize:'1rem'}} component="legend">Rating</Typography>
            <Rating
                defaultValue={4}
                sx={{'& .MuiRating-icon':{
                    fontSize:'1rem'
                }}}
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                setValue(newValue);
                }}
            />
            </Grid2 >
            <Grid2 size={5}>
              <Typography>50%</Typography>
            <BorderLinearProgress variant="determinate" value={50} />
            </Grid2>
            </Grid2 >
      </InfoDeal>
    </Box>
  )
}

export default Deal
