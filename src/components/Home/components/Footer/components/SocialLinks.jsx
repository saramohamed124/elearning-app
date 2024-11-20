import React from 'react';
import { Box, Grid2,Typography } from '@mui/material';

const Social = ({links}) => {
    return(
        links.map((links, index) => (
            <Grid2 item xs={6} sm={6} key={index}>
              <Typography variant="body1" align="center">
                {links}
              </Typography>
            </Grid2>
          ))
    )
}
const SocialLinks = () => {
  const links = ['+20 1021135168', 'eleaning@info.com', '+20 1021135168'];

  return (
    <Grid2 container spacing={2}>
      <Grid2 item xs={12} md={6}>
        <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            معلومات التواصل
        </Typography>
        <Box>
          <Social links={links}/>
        </Box>
      </Grid2>
    </Grid2>
  );
};

export default SocialLinks;

