import React from 'react';
import { Box } from '@mui/material';
import Course from '../../../../../utils/Course'; // Your Course component
import { FlexCards } from '../../../../../styles/globalStyles'; // Your Flex styling

const Courses = () => {

  return (
    <div>
      <Box sx={{ ...FlexCards }}>
        <Course />
      </Box>
    </div>
  );
};

export default Courses;
