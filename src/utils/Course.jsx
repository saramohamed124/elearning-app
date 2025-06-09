import React from 'react'

// MUI
import { api } from '../api/api';
import { GET_COURSES } from '../api/endpoints';
import { useQuery } from '@tanstack/react-query';
import CourseCard from './Cards/CourseCard';
import SkeletonCourse from './Loader/SkeletonCourse';
import ErrorMsg from './Error/ErrorMsg';
import { Box, Typography } from '@mui/material';

const Course = () => {
    // Course Info
    const { data: coursesInfo , isLoading, isError} = useQuery({
      queryKey: ['courseInfo'],
      queryFn: async () => {
        try{
        const res = await api.get(GET_COURSES, {
          params: {
            pageNumber: 1,
            pageSize: 10
          }
        });
        return res.data.data?.courses;
      }catch(err){
        return
      }},
      staleTime: 0,
    });

    // Rating Course

    if (isLoading) {
      return <SkeletonCourse/>;
    }

    if(isError) {
      return <ErrorMsg err={'فشل تحميل الدورات'} />
    }


    if(!coursesInfo || coursesInfo.length === 0){
      return (
        <Box sx={{ textAlign: 'center', padding: '20px' }}>
          <Typography variant="h6" color="textSecondary">
          لا تتوفر دورات حالياً لعرضها.
          </Typography>
        </Box>
      )
    }
    
    
  return (
    <>
      {coursesInfo.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </>
  )
}

export default Course
