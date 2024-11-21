import React, { Suspense } from 'react';
import './App.css';
import Loader from './utils/Loader/Loader';
import { Route, Routes } from 'react-router-dom';
import PageNotFound from './utils/Error/PageNotFound';
import Login from './components/Auth/Login';
import Navbar from './components/Navbar/Navbar';
import RegisterStudent from './components/Auth/RegisterStudent';
import RegisterInstructor from './components/Auth/RegisterInstructor';
const Home = React.lazy(() => import('./pages/Home')) ;

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loader/>}>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register-student' element={<RegisterStudent/>}/>
        <Route path='/register-instructor' element={<RegisterInstructor/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
      </Suspense>
    </div>
  );
}

export default App;
