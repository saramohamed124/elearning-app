import React from 'react'

// Utils
import Headings from '../../../../../utils/Headings/Headings'
import Deal from '../../../../../utils/Deal'
import { Box } from '@mui/material'
import { FlexCards } from '../../../../../styles/globalStyles'
const Courses = () => {
  return (
    <div>
        <Box
            sx={{...FlexCards}}>
            <Deal />
            <Deal />
            <Deal />
            <Deal />
        </Box>
    </div>
  )
}

export default Courses
