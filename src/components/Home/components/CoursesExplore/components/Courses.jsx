import React from 'react';
import { Box, Typography } from '@mui/material';
import { getToken } from '../../../../../services/authServices'; // Assuming this checks if the user is logged in
import Course from '../../../../../utils/Course'; // Your Course component
import { FlexCards } from '../../../../../styles/globalStyles'; // Your Flex styling

const Courses = () => {
  const { accessToken } = getToken(); // Check if the user is logged in

  if(!accessToken) {
    return (
      <Box sx={{ textAlign: 'center', padding: '20px' }}>
        <Typography variant="h6" color="textSecondary">
        أنت بحاجة لتسجيل الدخول لرؤية الدورات.
        </Typography>
      </Box>
    )
  }

  return (
    <div>
      <Box sx={{ ...FlexCards }}>
        <Course />
      </Box>
    </div>
  );
};

export default Courses;
