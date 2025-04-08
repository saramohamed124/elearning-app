import React from 'react'
import { FlexCards } from '../../../../styles/globalStyles'
import styled from '@emotion/styled'

// Icons
import { Card, CircularProgress, Box, Typography } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import { api } from '../../../../api/api'
import { INSTRUCTOR_INFO } from '../../../../api/endpoints'

const Instructors = () => {
    // Fetching Instructor Info
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { data: instructorData, isLoading: instructorLoading} = useQuery({
        queryKey:['instructorData'],
        queryFn: async () => {
            try{
                const res = await api.get(INSTRUCTOR_INFO);
                return res.data;
            }catch(err) {
                return <p style={{color:'var(--main-color-error)'}}>فشل تحميل البيانات</p>
            }
        }
    })

    const someInstructors = instructorData?.data?.slice(0,3);
    // Styles
    const CardInstructor = styled(Card)(({theme})=>({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '10px',
        width: '300px',
        padding:'15px 25px'
    }));

    // check if the user is logged in

          // Loading
    if(instructorLoading) return <CircularProgress sx={{width:'100%', margin:'20px auto'}}/>

      return (
    <Box>
      <Box sx={{ ...FlexCards }}>
        {someInstructors.map((instructor) => (
        <CardInstructor key={instructor.id} sx={{
            boxShadow: '1px -1px 23px 1px #E1E1E1',
        }}>
        <Typography variant="h5" component="div">
        {instructor?.firstName ? `${instructor.firstName} ${instructor.lastName}` : 'لا يوجد اسم'}
        </Typography>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
            {instructor?.expertise ? instructor.expertise : 'لا يوجد خبرة'}
        </Typography>
        <Typography sx={{width:'70%',textAlign:'center'}} variant="body2">
            {instructor?.biography ? instructor.biography : 'لا يوجد سيرة ذاتية'}     
        </Typography>
        </CardInstructor>

        ))}
      </Box>
    </Box>
  )
}

export default Instructors
