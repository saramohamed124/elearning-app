import React from 'react'
import { Link } from 'react-router-dom'

const ExploreHeader = () => {
  return (
    <div className='explore'>
      <p>تعلم مهارات جديدة وحقق طموحاتك مع أفضل الدورات التعليمية عبر الإنترنت</p>
      <Link className='explore-btn' to={'/courses'}>تصفح الكورسات</Link>
    </div>
  )
}

export default ExploreHeader
