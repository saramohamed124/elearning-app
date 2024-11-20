import React from 'react';
import { Box, Grid2,Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const CategoriesLink = ({categories}) => {
    return(
        categories.map((category, index) => (
            <Grid2 item xs={6} sm={3} key={index}>
              <Link style={{textDecoration:'none', color:'white'}} to={'/'}>
                {category}
              </Link>
            </Grid2>
          ))
    )
}
const Categories = () => {
  const categories = ['التصميم', 'البرمجة', 'التسويق', 'إدارة الأعمال'];

  return (
    <Box>
        <Grid2 item xs={12}>
            <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                الأقسام الرائجة
            </Typography>
        </Grid2>
        <Box sx={{display:'grid', gridTemplateColumns:'repeat(2, 1fr)',gap:'15px'}}>
            <CategoriesLink categories={categories}/>
        </Box>
    </Box>
  );
};

export default Categories;

