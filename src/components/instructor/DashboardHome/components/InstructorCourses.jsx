import React from 'react'
import Cookies from 'js-cookie';
import CourseCard from '../../../../utils/Cards/CourseCard';
import SkeletonCourse from '../../../../utils/Loader/SkeletonCourse';
import { Box } from '@mui/material';
import useInstructorCourses from '../../../../queries/useInstructorCourses';
import { FlexboxCenter } from '../../../../styles/globalStyles';

const InstructorCourses = () => {
    const InstructorId = Cookies.get('id');
    const {data: InstructorIdCourses, isLoading, isError} = useInstructorCourses(InstructorId)
    // Handle Loading
    if(isLoading) {
        return <SkeletonCourse/>
    }

    if ((InstructorIdCourses && InstructorIdCourses.length === 0 )) 
        return (
          <p style={{ padding: '40px 25px', fontSize: '20px', color: '#555', textAlign: 'center' }}>
            {'لا توجد دورات.'}
          </p>
        );
    
    // Handle Error
    if(isError) return <p style={{ padding: '20px 25px', color: 'var(--main-color-error)' }}>{'حدث خطأ ما'}</p>
    const someCourses = InstructorIdCourses.slice(0, 3);

    return (
    <Box sx={{...FlexboxCenter,flexWrap: 'wrap', padding:'20px', gap: '20px' }}>
      {someCourses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))
      }
    </Box>
  )
}

export default InstructorCourses
