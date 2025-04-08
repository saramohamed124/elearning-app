import React from 'react';
import Header from '../components/Home/components/Header/Header';
import Courses from '../components/Home/components/CoursesExplore/components/Courses';
import ShowMore from '../utils/Btns/ShowMore';
import CategoryExplore from '../components/Home/components/CategoryExplore/CategoryExplore';
import InstructorExplore from '../components/Home/components/InstructorExplore/InstructorExplore';
import Headings from '../utils/Headings/Headings';

const Home = () => {
  return (
    <div>
      <Header />
      <div className='container-custom'>
        <Headings valueColor={'black'}>اكتشف الدورات التعليمية</Headings>
      <Courses/>
      <ShowMore linkpg={'courses'}/>
      </div>
      <CategoryExplore/>
      <div className='container-custom'>
        <Headings>تعرف علي مدربينا</Headings>
      <InstructorExplore/>
      </div>
      </div>
  );
};

export default Home;
