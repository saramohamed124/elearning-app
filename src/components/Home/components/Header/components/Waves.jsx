import React from 'react';
import '../styles/Waves.css';
import { Box } from '@mui/material';
import ExploreHeader from './ExploreHeader';

const Waves = () => {
  return (
    <div >
        <Box  sx={{ display: {xs:'none', md:'block'}}}>
        <svg
        className='dark-midnight'
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 877 622"
            preserveAspectRatio="none"
            fill="none"
        >
            <path d="M0 0H441C715 167 836 260 876.5 622H0V0Z" fill="#023047" />
        </svg>
        <svg className='teal' xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 1089 622" preserveAspectRatio="none" fill="none">
            <path d="M0 0H599C951 188 1021 270 1089 622H0V0Z" fill="#126782" fillOpacity="0.65"/>
        </svg>
        <svg className='vibrant' xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 1114 622" preserveAspectRatio="none" fill="none">
            <path d="M0 0H560.495C908.739 167 1062.53 260 1114 622H0V0Z" fill="#FB8500" fillOpacity="0.5"/>
        </svg>
        <svg className='cyan' xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 1114 622" preserveAspectRatio="none" fill="none">
            <path d="M0 0H560.495C908.739 167 1062.53 260 1114 622H0V0Z" fill="#126782" fillOpacity="0.75"/>
        </svg>
        <ExploreHeader/>
        </Box>
        <Box sx={{ display: {xs:'block', md:'none'}, margin:'-20px 0 0 0 ', backgroundColor:'var(--main-dark-midnight-blue)', minHeight:'200px'}}>
            <ExploreHeader/>
        </Box>
    </div>
  );
};

export default Waves;
