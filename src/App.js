import React, { Suspense } from 'react';
import './App.css';
import Loader from './utils/Loader/Loader';
import { Route, Routes } from 'react-router-dom';
import PageNotFound from './utils/Error/PageNotFound';
import Navbar from './components/Navbar/Navbar';
const Home = React.lazy(() => import('./pages/Home')) ;
const Login = React.lazy(() => import('./components/Auth/Login')) ;
const RegisterStudent = React.lazy(() => import('./components/Auth/RegisterStudent')) ;
const RegisterInstructor = React.lazy(() => import('./components/Auth/RegisterInstructor')) ;
const ResetPass = React.lazy(() => import('./components/Auth/ResetPass')) ;

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loader/>}>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register-student" element={<RegisterStudent/>}/>
        <Route path="/register-instructor" element={<RegisterInstructor/>}/>
        <Route path="/forget-password" element={<ResetPass/>}/>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
      </Suspense>
    </div>
  );
}

export default App;
