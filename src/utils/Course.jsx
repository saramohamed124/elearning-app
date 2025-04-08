import React from 'react'
// Global Styles
import { PositionRelative, WidthFit, OverflowHidden, TextLeft,  } from '../styles/globalStyles'

// logo
import course_default from '../assets/imgs/default_course_cover.avif'

// MUI
import { Box, CircularProgress, Grid2, Rating, Typography } from '@mui/material'
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';


import styled from '@emotion/styled'
import { api } from '../api/api';
import { GET_COURSES, INSTRUCTOR_INFO } from '../api/endpoints';
import { useQuery } from '@tanstack/react-query';

const Course = () => {
    // Course Info
    const { data: coursesInfo } = useQuery({
      queryKey: ['courseInfo'],
      queryFn: async () => {
        const res = await api.get(GET_COURSES, {
          params: {
            searchTerm: 'Intro',
            pageNumber: 1,
            pageSize: 10
          }
        });
        return res.data.data?.courses;
      },
      staleTime: 0,
    });

    // Rating Course
    const courseId = coursesInfo?.[0]?.id; 
    const {data: ratingCourse} = useQuery({
      queryKey: ['ratingCourse'],
      queryFn: async () => {
        if(!courseId) return null; 
        const res = await api.get(`Course/${courseId}/rating`);
        return res?.data.data; // <-- فقط قائمة الكورسات
      },
      staleTime: 0,
    })

    // Instructor Course Info
    const instructorId = coursesInfo?.[0]?.instructorId;    
    const {data: instructorInfo} = useQuery({
      queryKey: ['insturctorInfo'],
      queryFn: async () => {
        try{
          if(!instructorId) return null;
        const res = await api.get(`${INSTRUCTOR_INFO}/${instructorId}`);
        return res?.data.data;
        }catch(err){
        }
      },
      staleTime: 0,
    })
    
    // Check if coursesInfo is empty or undefined
    // and show loading text if it is
    if (!coursesInfo || coursesInfo.length === 0) {
      return <CircularProgress/>;
    }
  
    // Get the first course from the list
    const course = coursesInfo[0];
    
    // Styles
    const InfoCourse = styled(Box)(({theme})=>({
        ...TextLeft,
        position: 'absolute',
        top: '50%',
        left:'50%',
        width: '94%',
        height: 'fit-content',
        padding: '10px 15px',
        backgroundColor: 'white',
        transform: 'translateX(-50%)',
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
    <Box>
    <Box  sx={{...PositionRelative, ...WidthFit, width:'300px', ...OverflowHidden,minHeight:'220px',
      boxShadow: '1px -1px 23px 1px #E1E1E1',
    }}>
      <img src={course?.thumbnailUrl ? course.thumbnailUrl : course_default} alt='Course logo' style={{maxWidth:'100%'}}/>
      <InfoCourse>
        <Typography variant='h6'>
        {course?.title ? '...' + course?.title.substring(0, 16)  : "No title available"}
        </Typography>
        <Typography sx={{color:'#666666'}}>{instructorInfo ? `${instructorInfo?.firstName} ${instructorInfo?.lastName}` : 'Instructor name not Available'}</Typography>
        <Grid2 sx={{justifyContent:'space-between', alignItems:'center'}} container spacing={2}>
            <Grid2 size={5}>
            <Typography sx={{fontSize:'1rem'}} component="legend">Rating</Typography>
            <Rating
                defaultValue={Number(ratingCourse) || 0}
                sx={{
                  direction:'ltr',
                  '& .MuiRating-icon':{
                    fontSize:'1rem'
                }}}
                name="simple-controlled"
                value={ratingCourse || 0}
                enabled={false}
            />
            </Grid2 >
            <Grid2 size={5}>
              <Typography color='#ccc'>{course?.price ? course?.price : 'price not available'}$</Typography>
            {/* <BorderLinearProgress variant="determinate" value={50} /> */}
            </Grid2>
            </Grid2 >
      </InfoCourse>
    </Box>
    </Box>
  )
}

export default Course
