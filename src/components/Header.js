import React, { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import logo from '../Assets/Images/logo main.png';
import './Header.css'
import { HEADER_PAGES, SETTINGS } from '../constants';
import { Row, Col } from 'react-bootstrap';
import AuthContext from '../Store/Auth'
import { log } from '../helperFunctions';


const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const context = useContext(AuthContext)

  const handleOpenNavMenu = (event) => {
    // console.log(anchorElNav)
    // setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = async (event) => {

    await setAnchorElNav(event.target.name);

    console.log(anchorElNav)


  };

  function func(pagee) {
    console.log("123", pagee)
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" style={{ 'boxShadow': "none", 'backgroundColor': 'white' }}>
      <Container maxWidth="xll">
        <Toolbar disableGutters >
          <Typography
            //this is for logo
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >


            <img src={logo} style={{ height: '4vw', paddingTop: '20px', paddingRight: '14.5vw' }}></img>
            {/* here i used padding 20px , it may cause unresponsive */}
          </Typography>

          {/* <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            //   color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', paddingLeft: "6vw" } }}>
            {HEADER_PAGES.map((page) => (
              //
              <Button
                key={HEADER_PAGES.indexOf(page)}
                //talk to senior for futher 
                name={page.name}
                onClick={handleCloseNavMenu}
                style={{ 'color': '#506F90' }}
                href={page.action}
                sx={{ my: 2, color: '#506F90', display: 'block', padding: '1vw' }}
              >

                {page.name}
              </Button>
            )
            )}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {SETTINGS.map((setting) => (
                <MenuItem key={SETTINGS.indexOf(setting)} onClick={handleCloseNavMenu}>
                  <Typography onClick={() => context.logOutUser()}>{setting.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;