import React from 'react'
import { OverflowHidden, PositionRelative, TextLeft, WidthFit } from '../../styles/globalStyles';
import { CategoryCustom } from '../../styles/Courses';
import { Box, Rating, styled, Typography } from '@mui/material';

// assets
import course_default from '../../assets/imgs/default_course_cover.avif'
import { useQuery } from '@tanstack/react-query';
import { useFetchInstructorId } from '../../queries/useFetchInstructorId';
import { api } from '../../api/api';
import useCategoryId from '../../queries/useCategoryId';

const CourseCard = ({course}) => {
    const InfoCourse = styled(Box)(() => ({
        ...TextLeft,
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '94%',
        height: 'fit-content',
        padding: '10px 15px',
        backgroundColor: 'white',
        transform: 'translateX(-50%)',
      }));
        const { data: category } = useCategoryId(course?.categoryId);
      
        const { data: ratingCourse } = useQuery({
          queryKey: ['ratingCourse', course?.id],  // Unique key per course
          queryFn: async () => {
            if (!course?.id) return null;
            const res = await api.get(`Course/${course?.id}/rating`);
            return res?.data.data;
          },
          staleTime: 0,
        });
        

        const { data: instructorInfo } = useFetchInstructorId(course?.instructorId);

  return (
    <Box
      sx={{
        ...PositionRelative,
        ...WidthFit,
        width: '300px',
        minHeight: {xs: '280px', sm: '220px'},
        boxShadow: '1px -1px 23px 1px #E1E1E1',
      }}
    >
      <img
        src={course?.thumbnailUrl || course_default}
        alt='Course'
        style={{ maxWidth: '100%' }}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = course_default;
        }}/>
      <InfoCourse>
        <Typography variant='h6'>
          {course?.title.length > 10 ? '...' + course?.title.substring(0, 26) : course?.title}
        </Typography>
        <Typography sx={{ color: '#666666' }}>
          {instructorInfo
            ? `${instructorInfo.firstName} ${instructorInfo.lastName}`
            : 'لا يتوفر اسم المدرب'}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box>
            <Typography sx={{ fontSize: '1rem' }}>Rating</Typography>
            <Rating
              value={Number(ratingCourse) || 0}
              readOnly
              sx={{
                direction: 'ltr',
                '& .MuiRating-icon': {
                  fontSize: '1rem',
                },
              }}
            />
          </Box>
          <Typography sx={ CategoryCustom }>
            {course?.categoryName || course?.categoryId ? `${course.categoryName || category?.name}` : 'لا يتوفر اسم التصنيف'}
            </Typography>
          <Typography fontWeight={600} sx={{ color: '#333' }}>
            {course?.price ? `${course.price}$` : 'لا يتوفر سعر'}
          </Typography>
        </Box>
      </InfoCourse>
    </Box>
  )
}

export default CourseCard
