import React from 'react';
import { Box, Grid2,Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { LinkStyle } from '../../../../../styles/globalStyles';

const SocialLinks = () => {
  return (
    <Grid2 container spacing={2}>
      <Grid2 item xs={12} md={6}>
        <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            معلومات التواصل
        </Typography>
        <Box>
          <Grid2 item xs={6} sm={6}>
            <Link style={{...LinkStyle}} to='tel:+201021135168'>1021135168 20</Link>
            <Link style={{...LinkStyle}} to='mailto:eleaning@info.com'>eleaning@info.com</Link>
            <Link style={{...LinkStyle}} to='tel:+201021135168'>1021135168 20</Link>
          </Grid2>
        </Box>
      </Grid2>
    </Grid2>
  );
};

export default SocialLinks;

