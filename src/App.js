import React, { Suspense } from 'react';
import './App.css';
import Loader from './utils/Loader/Loader';
import { Route, Routes, useLocation } from 'react-router-dom';
import PageNotFound from './utils/Error/PageNotFound';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Home/components/Footer/Footer';
import CopyRight from './components/Home/components/CopyRight';
import ProtectedRoutes from './routes/ProtectedRoutes';
import RequiredAuth from './hooks/RequiredAuth';
const UserProfle = React.lazy(() => import('./pages/UserProfle'));
const UserProfileSettings = React.lazy(() => import('./pages/UserProfileSettings'));
const Home = React.lazy(() => import('./pages/Home')) ;
const Courses = React.lazy(() => import('./pages/Courses')) ;
const Login = React.lazy(() => import('./components/Auth/Login')) ;
const RegisterStudent = React.lazy(() => import('./components/Auth/RegisterStudent')) ;
const RegisterInstructor = React.lazy(() => import('./components/Auth/RegisterInstructor')) ;
const ResetPass = React.lazy(() => import('./components/Auth/ResetPass')) ;
const VerfiedEmail = React.lazy(() => import('./components/Auth/VerfiedEmail'));
const ResendVerfiedEmail = React.lazy(() => import('./components/Auth/ResendVerfiedEmail'));
const InstructorDashboard = React.lazy(() => import('./components/instructor/InstructorDashboard'))
const InstructorHome = React.lazy(() => import('./components/instructor/Pages/InstructorHome'))
const InstructorProfileInstructor = React.lazy(() => import('./components/instructor/Pages/InstructorProfileInstructor'));
const InstructorCategories = React.lazy(() => import('./components/instructor/Pages/InstructorCategories'));

const ROLES = {
  INSTRUCTOR: "Instructor",
  STUDENT: "Student"
}

function App() {
  const location = useLocation();
  const hideLayoutRoutes = ['/verify-email', '/resend-email','/instructor-dashboard'];
  const authRoutes = ['/login', '/register-student', '/register-instructor', '/forget-password'];

  // Logic to determine visibility of Navbar and Footer
  const showNavbar = !hideLayoutRoutes.some(path => location.pathname.startsWith(path));
  const showFooter = ![...hideLayoutRoutes, ...authRoutes].some(path => location.pathname.startsWith(path)); 
   return (
    <div className="App">
      <Suspense fallback={<Loader/>}>
      {showNavbar && <Navbar/>}
      <Routes>
        <Route path="/" element={<Home/>}/>
        {/* Private Routes */}
        <Route path='/courses' element={<RequiredAuth><Courses/></RequiredAuth>}/>
        {/* Private Routes */}
        <Route path="/login" element={<Login/>}/>
        <Route path="/register-student" element={<RegisterStudent/>}/>
        <Route path="/register-instructor" element={<RegisterInstructor/>}/>
        <Route path="/forget-password" element={<ResetPass/>}/>
        <Route path="/verify-email" element={
            <VerfiedEmail/>}/>
        <Route path="/resend-email" element={
            <ResendVerfiedEmail/>}/>
        <Route path="*" element={<PageNotFound/>}/>
        <Route element={<ProtectedRoutes allowedRoles={[ROLES.STUDENT]}/>}>
          <Route path='/profile' element={<UserProfle/>}/>
          <Route path='/profile/settings' element={<UserProfileSettings/>}/>
        </Route>
        <Route element={<ProtectedRoutes allowedRoles={[ROLES.INSTRUCTOR]}/>}>
          <Route path='/instructor-dashboard' element={<InstructorDashboard/>}>
            <Route index element={<InstructorHome/>}/> 
            <Route path='profile' element={<InstructorProfileInstructor/>}/>
            <Route path='categories' element={<InstructorCategories/>}/>
          </Route>
          <Route/>
        </Route>
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
