import React from 'react'
import  useCategories  from '../../../../queries/useCategories'
import CategoryCard from '../common/CategoryCard';
import { Box, CircularProgress } from '@mui/material';
import { FlexboxWrap } from '../../../../styles/globalStyles';

const CategoryCards = () => {
    const {data, isLoading, isError} = useCategories();

    if(isLoading) return <CircularProgress/>
    if(!data ||data.length === 0 || isError || data === undefined){
        return (
            <p style={{ padding: '40px 25px', fontSize: '20px', color: '#555', textAlign: 'center' }}>
              {'لا توجد فئات . يرجى إضافة فئة'}
            </p>
          );      
    }
  return (
    <Box sx={{...FlexboxWrap, gap:'40px'}}>
      {data.map(category => (
        <CategoryCard key={category.id} categoryName={category?.name} categoryId={category.id} courseCount={category?.courseCount}/>
      ))}
    </Box>
  )
}

export default CategoryCards
