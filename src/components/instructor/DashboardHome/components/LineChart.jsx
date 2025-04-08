import { Box } from '@mui/material'
import React from 'react'

const LineChart = () => {
  return (
    <Box>
        {/* <h1>لوحة التحكم</h1> */}
        <LineChart
        xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
        series={[
        {
        data: [2, 5.5, 2, 8.5, 1.5, 5],
        area: true,
        },
        ]}
        sx={{
        width: '100%',
        }}
        height={300}
        />
    </Box>
)
}

export default LineChart
