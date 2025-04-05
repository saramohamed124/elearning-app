import React from 'react'

// Utils
import Headings from '../../../../../utils/Headings/Headings'
import Course from '../../../../../utils/Course'
import { Box } from '@mui/material'
import { FlexCards } from '../../../../../styles/globalStyles'
const Courses = () => {
  return (
    <div>
        <Box
            sx={{...FlexCards}}>
            <Course />
            <Course />
            <Course />
            <Course />
        </Box>
    </div>
  )
}

export default Courses
