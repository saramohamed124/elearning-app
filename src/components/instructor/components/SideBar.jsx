import { Link } from 'react-router-dom';
import { routes } from '../routes';
import { Box, Button, Typography } from '@mui/material';
import { getToken, logout } from '../../../services/authServices';

// icons
import logout_icon from '../assets/logout.svg';

const SideBar = () => {
  const { email } = getToken();

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
      <hr style={{
        display: 'block',
        width: '100%',
        height:'3px',
        background: 'black',
        borderRadius: '50px',
      }}/>
        <Button
          onClick={() => {
            logout(email)
          }}
          style={{
            display: 'flex',
            alignItems: 'center',
            textWrap: 'nowrap',
            gap: '10px',
            color: 'black',
            textDecoration: 'none',
          }}
        >
          <img src={logout_icon} alt={'logout'} width={24} height={24} />
          <Typography sx={{ fontSize:'18px', display: {
            xs: 'none',
            sm: 'block',
          }}}>تسجيل الخروج</Typography>
        </Button>

    </Box>
  );
};

export default SideBar;
