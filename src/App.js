import React, { Suspense } from 'react';
import './App.css';
import Loader from './utils/Loader/Loader';
import { Route, Routes, useLocation } from 'react-router-dom';
import PageNotFound from './utils/Error/PageNotFound';
import Navbar from './components/Navbar/Navbar';
import ResendVerfiedEmail from './components/Auth/ResendVerfiedEmail';
import Footer from './components/Home/components/Footer/Footer';
import CopyRight from './components/Home/components/CopyRight';
const Home = React.lazy(() => import('./pages/Home')) ;
const Login = React.lazy(() => import('./components/Auth/Login')) ;
const RegisterStudent = React.lazy(() => import('./components/Auth/RegisterStudent')) ;
const RegisterInstructor = React.lazy(() => import('./components/Auth/RegisterInstructor')) ;
const ResetPass = React.lazy(() => import('./components/Auth/ResetPass')) ;
const  VerfiedEmail = React.lazy(() => import('./components/Auth/VerfiedEmail'));


function App() {
  const location = useLocation();
  const hideLayoutRoutes = ['/verify-email', '/resend-email'];
  const authRoutes = ['/login', '/register-student', '/register-instructor', '/forget-password'];

  // Logic to determine visibility of Navbar and Footer
  const showNavbar = !hideLayoutRoutes.includes(location.pathname);
  const showFooter = ![...hideLayoutRoutes, ...authRoutes].includes(location.pathname) 
   return (
    <div className="App">
      <Suspense fallback={<Loader/>}>
      {showNavbar && <Navbar/>}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register-student" element={<RegisterStudent/>}/>
        <Route path="/register-instructor" element={<RegisterInstructor/>}/>
        <Route path="/forget-password" element={<ResetPass/>}/>
        <Route path="/verify-email" element={
            <VerfiedEmail/>}/>
        <Route path="/resend-email" element={
            <ResendVerfiedEmail/>}/>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
      {showFooter &&(<>
      <Footer/>
      <CopyRight/>
      </> )}
        </Suspense>
    
    </div>
  );
}

export default App;
