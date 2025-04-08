import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { api } from '../../../api/api'
import { INSTRUCTOR_INFO, SEARCH_COURSES } from '../../../api/endpoints'
import { Box, Rating, Typography, styled } from '@mui/material';
import { OverflowHidden, PositionRelative, TextLeft, WidthFit } from '../../../styles/globalStyles';
import course_default from '../../../assets/imgs/default_course_cover.avif'
import SkeletonCourse from '../../../utils/Loader/SkeletonCourse';

// Component for a single course card
const CourseCard = ({ course }) => {
  const { data: ratingCourse } = useQuery({
    queryKey: ['ratingCourse', course.id],
    queryFn: async () => {
      const res = await api.get(`Course/${course.id}/rating`);
      return res?.data.data;
    },
    enabled: !!course.id,
    staleTime: 0,
  });

  const { data: instructorInfo } = useQuery({
    queryKey: ['instructorInfo', course.instructorId],
    queryFn: async () => {
      const res = await api.get(`${INSTRUCTOR_INFO}/${course.instructorId}`);
      return res?.data.data;
    },
    enabled: !!course.instructorId,
    staleTime: 0,
  });

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

  return (
    <Box
      sx={{
        ...PositionRelative,
        ...WidthFit,
        width: '300px',
        ...OverflowHidden,
        minHeight: '220px',
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
          {course?.title ? '...' + course?.title.substring(0, 16) : 'لا يتوفر عنوان'}
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
          <Typography color='#ccc'>
            {course?.price ? `${course.price}$` : 'لا يتوفر سعر'}
          </Typography>
        </Box>
      </InfoCourse>
    </Box>
  );
};

const FetchCourses = () => {
  const location = window.location.search;
  const params = new URLSearchParams(location);
  const searchTerm = params.get('searchTerm');
  const level = params.get('level') || '';
  const categoryId = params.get('categoryId') || '';
  const minPrice = params.get('minPrice') || '';
  const maxPrice = params.get('maxPrice') || '';
  const { data: courses, isLoading, error } = useQuery({
    queryKey: ['courses', searchTerm, level, categoryId, minPrice, maxPrice], // good for cache
    queryFn: async () => {
      const params = {
        searchTerm,
        ...(level !== '' && { level }),
        ...(categoryId !== '' && { categoryId }),
        ...(minPrice !== '' && minPrice !== 0 && { minPrice }),
        ...(maxPrice !== '' && maxPrice !== 0 && { maxPrice }),
      };
  
      const res = await api.get(SEARCH_COURSES, { params });
      return res.data.data;
    },
    enabled: !!searchTerm, // only run query when there's a search term
  });
  if(!searchTerm) return <p style={{ padding: '20px 25px' }}>يرجى إدخال مصطلح البحث.</p>;
  if (courses && courses.length === 0)
    return (
      <p style={{ padding: '20px 25px' }}>
        {'لا توجد دورات مطابقة لمصطلح البحث.'}
      </p>
    );
    
    if (isLoading) return <SkeletonCourse/>;

  if (error)
    return (
      <p style={{ padding: '20px 25px', color: 'var(--main-color-error)' }}>
        {'حدث خطأ ما'}
      </p>
    );

  return (
    <Box sx={{ padding: '20px 25px' }}>
      {(courses && courses.length > 0) && (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default FetchCourses;
