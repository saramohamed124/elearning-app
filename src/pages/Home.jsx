import React from 'react';
import Header from '../components/Home/components/Header/Header';
import Courses from '../components/Home/components/CoursesExplore/components/Courses';
import ShowMore from '../utils/Btns/ShowMore';
import CategoryExplore from '../components/Home/components/CategoryExplore/CategoryExplore';
import InstructorExplore from '../components/Home/components/InstructorExplore/InstructorExplore';
import Footer from '../components/Home/components/Footer/Footer';
import CopyRight from '../components/Home/components/CopyRight';

const Home = () => {
  return (
    <div>
      <Header />
      <div className='container-custom'>
      <Courses/>
      <ShowMore linkpg={'courses'}/>
      </div>
      <CategoryExplore/>
      <div className='container-custom'>
      <InstructorExplore/>
      </div>
      <Footer/>
      <CopyRight/>
      </div>
  );
};

export default Home;
