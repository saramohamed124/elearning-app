import { Box } from '@mui/material'
import React from 'react'
import Headings from '../../../../utils/Headings/Headings'
import { FlexCards } from '../../../../styles/globalStyles'
import CategoryHomeCard from '../CategoryHomeCard'

// Icons
import buisness_icon from './assets/business.svg'
import design_icon from './assets/design.svg'
import marketing_icon from './assets/marketing.svg'
import programming_icon from './assets/programming.svg'
import ShowMore from '../../../../utils/Btns/ShowMore'

const categoryData = [
  {
    icon: buisness_icon,
    name: 'إدارة الأعمال',
    id: 'bbce8888-335e-46b7-a783-08dd751e060c',
  },
  {
    icon: marketing_icon,
    name: 'التسويق',
    id: 'c5002572-8f2d-4113-a784-08dd751e060c',
  },
  {
    icon: programming_icon,
    name: 'البرمجة',
    id: '5776f6d3-2515-46a0-a782-08dd751e060c',
  },
  {
    icon: design_icon,
    name: 'التصميم',
    id: 'c7408a70-9d27-436b-a781-08dd751e060c',
  },
];

const CategoryExplore = () => {
  return (
    <Box sx={{backgroundColor:'var(--main-dark-midnight-blue)',padding:'10px 25px'}}>
      <Headings valueColor={'white'}>الأقسام الرائجة</Headings>
    <Box sx={{...FlexCards}}>
    {categoryData.map(({ id, icon, name }) => (
        <CategoryHomeCard
          key={id}
          iconCategorySrc={icon}
          linkCategory={`courses?categoryId=${id}`}
          CategoryName={name}
        />
      ))}
    </Box>
    <ShowMore/>
    </Box>
  )
}

export default CategoryExplore
