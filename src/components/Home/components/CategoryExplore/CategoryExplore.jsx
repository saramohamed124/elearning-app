import { Box } from '@mui/material'
import React from 'react'
import Headings from '../../../../utils/Headings/Headings'
import { FlexCards } from '../../../../styles/globalStyles'
import CategoryHomeCard from '../../../Auth/common/CategoryHomeCard'

// Icons
import buisness_icon from './assets/business.svg'
import design_icon from './assets/design.svg'
import marketing_icon from './assets/marketing.svg'
import programming_icon from './assets/programming.svg'
import ShowMore from '../../../../utils/Btns/ShowMore'

const CategoryExplore = () => {
  return (
    <Box sx={{backgroundColor:'var(--main-dark-midnight-blue)',padding:'10px 25px'}}>
      <Headings valueColor={'white'}>الأقسام الرائجة</Headings>
    <Box sx={{...FlexCards}}>
        <CategoryHomeCard iconCategorySrc={buisness_icon} linkCategory={'courses'} CategoryName={'إدارة الأعمال'}></CategoryHomeCard>
        <CategoryHomeCard iconCategorySrc={marketing_icon} linkCategory={'courses'} CategoryName={'التسويق'}></CategoryHomeCard>
        <CategoryHomeCard iconCategorySrc={programming_icon} linkCategory={'courses'} CategoryName={'البرمجة'}></CategoryHomeCard>
        <CategoryHomeCard iconCategorySrc={design_icon} linkCategory={'courses'} CategoryName={'التصميم'}></CategoryHomeCard>
    </Box>
    <ShowMore/>
    </Box>
  )
}

export default CategoryExplore
