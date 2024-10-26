import React from 'react';
import Header from '../components/Home/components/Header/Header';
import Deal from '../utils/Deal';
import { Container, Box } from '@mui/material';
import Headings from '../utils/Headings/Headings';

const Home = () => {
  return (
    <div>
      <Header />
      <Container sx={{ padding: '10px' }}>
      <Headings valueColor={'black'}>اكتشف الدورات التعليمية</Headings>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap', // Allow items to wrap
            gap: '5px', // Space between items
            justifyContent: 'space-around', // Align items
          }}
        >
          <Deal />
          <Deal />
          <Deal />
          <Deal />
        </Box>
      </Container>
    </div>
  );
};

export default Home;
