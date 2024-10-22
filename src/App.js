import React, { Suspense } from 'react';
import './App.css';
import Loader from './utils/Loader/Loader';
import { Route, Routes } from 'react-router-dom';
import PageNotFound from './utils/Error/PageNotFound';
const Home = React.lazy(() => import('./pages/Home')) ;

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
      </Suspense>
    </div>
  );
}

export default App;
