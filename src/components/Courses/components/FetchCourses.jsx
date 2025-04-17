import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { api } from '../../../api/api'
import {  COURSES_BY_ID, SEARCH_COURSES } from '../../../api/endpoints'
import { Box } from '@mui/material';
import SkeletonCourse from '../../../utils/Loader/SkeletonCourse';
import CourseCard from '../../../utils/Cards/CourseCard';



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
        searchTerm ,
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
    const { data: coursesCategory, isLoading: isLoadingcoursesCategory, error: errorcoursesCategory } = useQuery({
      queryKey: ['courses', categoryId], // good for cache
      queryFn: async () => {

        const res = await api.get(`${COURSES_BY_ID}/${categoryId}`);
        return res.data.data;
      },
      enabled: !!categoryId,
    });
  
  if (!searchTerm && !categoryId) {
    return (
      <p style={{ padding: '40px 25px', fontSize: '20px', color: '#555', textAlign: 'center' }}>
        الرجاء إدخال اسم الكورس للبدء في عملية البحث.
      </p>
    );
  }
    if ((courses && courses.length === 0 )|| (coursesCategory && coursesCategory.length === 0)) 
    return (
      <p style={{ padding: '40px 25px', fontSize: '20px', color: '#555', textAlign: 'center' }}>
        {'لا توجد دورات مطابقة لمصطلح البحث.'}
      </p>
    );
    
    
    if ((courses && isLoading) || (coursesCategory && isLoadingcoursesCategory)) return <SkeletonCourse/>;

  if (error || errorcoursesCategory)
    return (
      <p style={{ padding: '20px 25px', color: 'var(--main-color-error)' }}>
        {'حدث خطأ ما'}
      </p>
    );

  return (
    <Box sx={{ padding: '20px 25px' }}>
      {(courses && courses.length > 0) && (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent:{xs:'center',md:'flex-start'}, gap: '20px' }}>
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </Box>
      )}
      {(coursesCategory && coursesCategory.length > 0 && !searchTerm) && (
          coursesCategory.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))
      )}
    </Box>
  );
};

export default FetchCourses;
