import React, { useState } from 'react';
import { NavbarContainer, ProverCostum } from '../../../styles/Navbar';
import {
  AppBar,
  Avatar,
  Box,
  Button,
  List,
  ListItem,
  styled,
  Typography,
  Toolbar,
  Popover,
} from '@mui/material';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';

// Assets
import logo from '../../assets/logo.png';
import avatar_instructor from '../../Navbar/assets/imgs/avatar_instructor.png';
import logout_icon from '../../Navbar/assets/icons/logout.svg';

// Services
import { getToken, logout } from '../../../services/authServices';
import { useQuery } from '@tanstack/react-query';
import { instructorService } from '../../../services/instructorService';
import { FlexboxBetween } from '../../../styles/globalStyles';

const LinkCustom = styled(Link)({
  color: 'blue',
  textDecoration: 'none',
});

const ButtonLogout = styled(Button)({
  width: '100%',
  color: 'black',
  ...FlexboxBetween,
});

const NavDash = () => {
  const [AnchorElAcc, setAnchorElAcc] = useState(null);

  const { email } = getToken();
  const id = Cookies.get('id');
  const role = Cookies.get('role');

  const {
    data: InstructorData,
    isLoading: instructorLoading,
    isError: instructorError,
  } = useQuery({
    queryKey: ['data', id],
    queryFn: () => instructorService(id),
    enabled: role === 'Instructor',
    staleTime: 60000,
  });

  const instructor = InstructorData;
  const open = Boolean(AnchorElAcc);

  const handleOpenProverAuth = (event) => setAnchorElAcc(event.currentTarget);
  const handleClose = () => setAnchorElAcc(null);

  return (
    <AppBar sx={NavbarContainer} position="static">
      <Toolbar sx={{ width:'100%', display:'flex', justifyContent: 'space-between' }}>
        <Link to="/">
          <img style={{ maxWidth: '5rem' }} src={logo} alt="logo" />
        </Link>

        <Avatar
          onClick={handleOpenProverAuth}
          sx={{ width: '3rem', height:'3rem', cursor: 'pointer' }}
          src={avatar_instructor}
          alt="avatar instructor"
        />

        <Popover
          open={open}
          anchorEl={AnchorElAcc}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          <Box sx={{ p: 2, minWidth: '250px' }}>
            <List sx={{ ...ProverCostum }}>
              <ListItem sx={{ ...FlexboxBetween, gap: '20px', justifyContent: 'center' }}>
                <Avatar
                  sx={{ width: 65, height: 65 }}
                  src={avatar_instructor}
                  alt="avatar instructor"
                />
                <Box sx={{ textAlign: 'right' }}>
                  <Typography variant="h6">
                    أهلاً,{' '}
                    {instructorLoading
                      ? '...'
                      : `${instructor?.firstName || ''} ${instructor?.lastName || ''}`}
                  </Typography>
                  <LinkCustom to="/instructor-dashboard">عرض الملف الشخصي</LinkCustom>
                </Box>
              </ListItem>
              <hr />
              <ListItem>
                <ButtonLogout onClick={() => logout(email)}>
                  <Typography>تسجيل الخروج</Typography>
                  <img src={logout_icon} alt="logout" />
                </ButtonLogout>
              </ListItem>
            </List>
          </Box>
        </Popover>
      </Toolbar>
    </AppBar>
  );
};

export default NavDash;
