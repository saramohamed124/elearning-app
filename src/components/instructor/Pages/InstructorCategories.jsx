import React from 'react'
import Headings from '../../../utils/Headings/Headings'
import CategoryCards from '../CategoriesManage/components/CategoryCards'
import AddNewCategory from '../CategoriesManage/components/AddNewCategory'

const InstructorCategories = () => {
  return (
    <div>
        <Headings>الفئات</Headings>
        <AddNewCategory/>
        <CategoryCards/>
    </div>
  )
}

export default InstructorCategories
