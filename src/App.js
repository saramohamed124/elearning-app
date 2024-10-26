import React, { Suspense } from 'react';
import './App.css';
import Loader from './utils/Loader/Loader';
import { Route, Routes } from 'react-router-dom';
import PageNotFound from './utils/Error/PageNotFound';
import Login from './components/Auth/Login';
import Navbar from './components/Navbar/Navbar';
const Home = React.lazy(() => import('./pages/Home')) ;

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loader/>}>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
      </Suspense>
    </div>
  );
}

export default App;
