import React from 'react'

// MUI
import { api } from '../api/api';
import { GET_COURSES } from '../api/endpoints';
import { useQuery } from '@tanstack/react-query';
import CourseCard from './Cards/CourseCard';
import SkeletonCourse from './Loader/SkeletonCourse';

const Course = () => {
    // Course Info
    const { data: coursesInfo } = useQuery({
      queryKey: ['courseInfo'],
      queryFn: async () => {
        const res = await api.get(GET_COURSES, {
          params: {
            searchTerm: 'I',
            pageNumber: 1,
            pageSize: 10
          }
        });
        return res.data.data?.courses;
      },
      staleTime: 0,
    });

    // Rating Course

    
    if (!coursesInfo || coursesInfo.length === 0) {
      return <SkeletonCourse/>;
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
