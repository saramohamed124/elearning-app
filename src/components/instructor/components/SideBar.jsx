import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../routes';
import { Box, Typography } from '@mui/material';

const SideBar = () => {
  return (
    <Box sx={{
            display: "flex",
            flexDirection: 'column',
            gap: '2rem',
            width: 'fit-content',
            padding: { xs:'20px', sm: '20px 40px' ,},
            boxShadow: '-3px 3px 3px #eee',
            height: '100vh',
         }}>
      {routes.map(({ title, path, icon}) => (
        <Link
          key={title}
          to={path}
          style={{
            display: 'flex',
            alignItems: 'center',
            textWrap: 'nowrap',
            gap: '10px',
            color: 'black',
            textDecoration: 'none',
          }}
        >
          <img src={icon} alt={title} width={24} height={24} />
          <Typography sx={{ fontSize:'18px', display: {
            xs: 'none',
            sm: 'block',
          }}}>{title}</Typography>
        </Link>
      ))}
    </Box>
  );
};

export default SideBar;
