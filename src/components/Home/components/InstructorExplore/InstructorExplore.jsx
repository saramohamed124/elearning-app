import { Box, Card, Rating, Typography } from '@mui/material'
import React from 'react'
import Headings from '../../../../utils/Headings/Headings'
import { Flexbox, FlexboxBetween, FlexCards } from '../../../../styles/globalStyles'
import styled from '@emotion/styled'

// Icons
import student_icon from '../../../../assets/icons/students.svg' 
import ShowMore from '../../../../utils/Btns/ShowMore'
const InstructorExplore = () => {
    const [value, setValue] = React.useState(2);

    const CardInstructor = styled(Card)(({theme})=>({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '10px',
        padding:'15px 25px'
    }))
  return (
    <Box>
      <Headings>تعرف علي مدربينا</Headings>
      <Box sx={{ ...FlexCards }}>
        <CardInstructor sx={{
            boxShadow: '1px -1px 23px 1px #E1E1E1',
        }}>
        <Typography variant="h5" component="div">
            د.أحمد محمود
        </Typography>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
            Graphic Designer
        </Typography>
        <Typography sx={{width:'70%',textAlign:'center'}} variant="body2">
            I am a graphic Designer skilled in field        
        </Typography>
        <Box sx={{...FlexboxBetween,width:'100%'}}>
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
            <Box sx={{...Flexbox,gap:'10px'}}>
            <Typography>1.2345</Typography>
            <img src={student_icon} alt='student'/>
            </Box>
        </Box>
        </CardInstructor>
        <CardInstructor sx={{
            boxShadow: '1px -1px 23px 1px #E1E1E1',
        }}>
        <Typography variant="h5" component="div">
            د.أحمد محمود
        </Typography>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
            Graphic Designer
        </Typography>
        <Typography sx={{width:'70%',textAlign:'center'}} variant="body2">
            I am a graphic Designer skilled in field        
        </Typography>
        <Box sx={{...FlexboxBetween,width:'100%'}}>
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
            <Box sx={{...Flexbox,gap:'10px'}}>
            <Typography>1.2345</Typography>
            <img src={student_icon} alt='student'/>
            </Box>
        </Box>
        </CardInstructor>
        <CardInstructor sx={{
            boxShadow: '1px -1px 23px 1px #E1E1E1',
        }}>
        <Typography variant="h5" component="div">
            د.أحمد محمود
        </Typography>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
            Graphic Designer
        </Typography>
        <Typography sx={{width:'70%',textAlign:'center'}} variant="body2">
            I am a graphic Designer skilled in field        
        </Typography>
        <Box sx={{...FlexboxBetween,width:'100%'}}>
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
            <Box sx={{...Flexbox,gap:'10px'}}>
            <Typography>1.2345</Typography>
            <img src={student_icon} alt='student'/>
            </Box>
        </Box>
        </CardInstructor>
      </Box>
      <ShowMore/>
    </Box>
  )
}

export default InstructorExplore
