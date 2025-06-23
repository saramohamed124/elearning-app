import React from 'react'
import Cookies from 'js-cookie';
import CourseCard from '../../../../utils/Cards/CourseCard';
import SkeletonCourse from '../../../../utils/Loader/SkeletonCourse';
import { Box, Button } from '@mui/material';
import useInstructorCourses from '../../../../queries/useInstructorCourses';
import { FlexboxCenter } from '../../../../styles/globalStyles';

// icons
import edit_icon from '../assets/edit.svg'
import view_cion from '../assets/view.svg'
import DeleteBtn from '../../../../utils/Btns/DeleteBtn';
import { api } from '../../../../api/api';

const CoursesInstructor = () => {
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

    // Handle Delete Course
    const handleDeleteCourse = (courseId) => async () => {
        try {
            const response = await api.delete(`/Course/${courseId}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${Cookies.get('accessToken')}`
                }
            });
            if (!response.ok) throw new Error('Failed to delete course');
            window.location.reload();
        } catch (error) {
            console.error('Error deleting course:', error);
        }
    };
    return (
    <Box sx={{...FlexboxCenter,flexWrap: 'wrap', padding:'20px', gap: '20px',}}>
      {someCourses.map((course) => (
        <Box key={course.id}>
          <Box sx={{...FlexboxCenter, position: 'relative', top:'0px', zIndex:'100'}}>
            <DeleteBtn handleDelete={handleDeleteCourse(course.id)} />
          </Box>
        <CourseCard key={course.id} course={course} />
        <Box sx={{...FlexboxCenter, gap: '10px', marginTop: '10px' , height: '40px'}}>
          <Button sx={{background:'var(--main-color-golden-yellow)'}}><img style={{width:'15px'}} src={edit_icon} alt='edit'/></Button>
          <Button sx={{background:'var(--main-color-light-blue)'}}><img style={{width:'15px'}} src={view_cion} alt='view'/></Button>
        </Box>
        </Box>
      ))
      }
    </Box>
  )
}

export default CoursesInstructor
