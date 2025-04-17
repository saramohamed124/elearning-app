import { Box, CircularProgress, Typography } from '@mui/material'
import { LineChart } from '@mui/x-charts'
import React from 'react'
import Headings from '../../../../utils/Headings/Headings'
import { FlexboxBetween } from '../../../../styles/globalStyles'
import Cookies from 'js-cookie';
import useInstructorCourses from '../../../../queries/useInstructorCourses'

export const LineChartArticles = () => {
  const InstructorId = Cookies.get('id');
  const {data: InstructorIdCourses, isLoading, isError} = useInstructorCourses(InstructorId);


  if(isLoading) return <CircularProgress/>
  if(isError) return <Typography color='red'>{'حدث خطأ'}</Typography>

  // Calc Course Profit By Month
  let courseProfitByMonth = {};
  
  InstructorIdCourses?.forEach((course) => {
    let courseDate = new Date(course?.createdAt);
    let monthKey = `${courseDate.getFullYear()}-${courseDate.getMonth() + 1}`;
    // let studentCount = course.students.length || 0;
    // let profit = course.price * studentCount;
    var profit = 0;
    profit += course.price;

    if(courseProfitByMonth[monthKey]){
      courseProfitByMonth[monthKey] += profit;
    }else{
      courseProfitByMonth[monthKey] = profit;
    }
  });
  // let xAxisLabels = Object.keys(courseProfitByMonth)
  // let profitData = Object.values(courseProfitByMonth)
  // make by day (recommanded)
  return (
    <Box sx={{
      padding: '15px',
      boxShadow:' -4px -1px 7px #ddd, 4px 1px 9px #ddd',
      borderRadius: '20px',
      margin: '23px 0',
    }}>
      <Box sx={{
        ...FlexboxBetween,
        flexDirection: {xs:'column', md:'row'},
        alignItems:'center',
        padding:'0 20px'
      }}>
        <Headings fontSizepx={'20px'}>أرباح الكورسات</Headings>
        <Box
          defaultValue={'month'}
          sx={{
            ...FlexboxBetween,
            height:'40px',
            padding:'10px',
            borderRadius: '10px',
            backgroundColor: '#f7f7f7',
            color: 'black',
          }}>
            <Typography
            sx={{
              padding:'10px'
            }}>الشهر</Typography>
            <Typography
              sx={{
                background:'var(--main-dark-midnight-blue)',
                color:'white',
                padding:'10px',
                borderRadius: '6px',
              }}>السنة</Typography>
        </Box>
      </Box>
        <LineChart
        sx={{
          background:'#eee',
          width: '100%',
        }}
        xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
        series={[
        {
        data: [2, 5.5, 2, 8.5, 1.5, 5],
        },
        ]}

        height={300}
        />
    </Box>
)
}