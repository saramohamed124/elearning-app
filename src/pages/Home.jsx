import React from 'react';
import Header from '../components/Home/components/Header/Header';
import Courses from '../components/Home/components/CoursesExplore/components/Courses';
import ShowMore from '../utils/Btns/ShowMore';

const Home = () => {
  return (
    <div>
      <Header />
      <div className='container-custom'>
      <Courses/>
      <ShowMore linkpg={'courses'}/>
      </div>
    </div>
  );
};

export default Home;
