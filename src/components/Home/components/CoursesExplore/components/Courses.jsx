import React from 'react'

// Utils
import Headings from '../../../../../utils/Headings/Headings'
import Deal from '../../../../../utils/Deal'
import { Box } from '@mui/material'
const Courses = () => {
  return (
    <div>
        <Headings valueColor={'black'}>اكتشف الدورات التعليمية</Headings>
        <Box
            sx={{
            display: 'flex',
            columnGap: '25px', // Space between items
            rowGap: '25px', // Space between items
            justifyContent: 'center', // Align items
            flexWrap:'wrap',
            margin:'20px 0'
            }}>
            <Deal />
            <Deal />
            <Deal />
            <Deal />
        </Box>
    </div>
  )
}

export default Courses
