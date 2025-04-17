import { Box, CircularProgress, Typography } from '@mui/material';
import React from 'react'
import Cookies from 'js-cookie';

// icons
import profit_icon from './assets/profit.svg'
import courses_icon from './assets/courses.svg'
import students_icon from './assets/students.svg'
import ArticleCard from './components/ArticleCard';
import {  FlexboxBetween, FlexboxWrap, Gap20 } from '../../../styles/globalStyles';
import useInstructorCourses from '../../../queries/useInstructorCourses';
import useFetchStudents from '../../../queries/useFetchStudents';

const Articles = () => {
  const InstructorId = Cookies.get('id');
  const {data: InstructorIdCourses, isLoading, isError} = useInstructorCourses(InstructorId);
  const {data: studentInfo, isLoading: loadStudents, isError: errorStudents} = useFetchStudents();
  let  totalProfit = 0, students = studentInfo?.length || 0;
  if(isLoading || loadStudents) return <CircularProgress/>
  if(isError || errorStudents) return <Typography color='red'>{'حدث خطأ'}</Typography>
  InstructorIdCourses.forEach((course) => {
    totalProfit += course.price;
    // course.students.length => to calc students
    // profit += course.price * students;
  });
    const articles = [
        { id: 1, title: 'الأرباح', src: profit_icon, dataCourse: `${totalProfit}` },
        { id: 2, title: 'عدد الكورسات', src: courses_icon, dataCourse: InstructorIdCourses.length || 0  },
        { id: 3, title: 'عدد الطلاب', src: students_icon, dataCourse: students  },
    ];

  return (
    <Box sx={{...FlexboxBetween, ...FlexboxWrap, ...Gap20}}>
      {articles.map((article) => (
        <ArticleCard key={article.id} src={article.src} alt={article.title} dataCount={article.dataCourse} title={article.title} />
      ))}
    </Box>
  )
}

export default Articles
