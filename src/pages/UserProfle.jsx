import React from 'react'
import StudentInfo from '../components/student/components/StudentInfo'
import Headings from '../utils/Headings/Headings'
import Courses from '../components/Home/components/CoursesExplore/components/Courses'

const UserProfle = () => {
  return (
    <div
    className="container-custom">
      <StudentInfo/>
      <Headings>كورساتي</Headings>
      <Courses/>
    </div>
  )
}

export default UserProfle
