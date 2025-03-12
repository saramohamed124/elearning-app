import React from 'react'
import Headings from '../utils/Headings/Headings'
import StudentChangeInfo from '../components/student/components/StudentChangeInfo'
import StudentChangePassword from '../components/student/components/StudentChangePassword'

const UserProfileSettings = () => {
  return (
    <div className='container-custom'>
      <Headings>المعلومات الشخصية</Headings>
      <StudentChangeInfo/>
      <Headings>كلمة المرور</Headings>
        <StudentChangePassword/>
    </div>
  )
}

export default UserProfileSettings
