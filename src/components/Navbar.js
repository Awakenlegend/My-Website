import React, { useState } from 'react';
import { AppBar, Toolbar, Button, IconButton, Drawer, List, ListItem, ListItemText, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material/styles';
import ThemeToggle from './ThemeToggle';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: 'rgba(10, 25, 47, 0.85)',
  backdropFilter: 'blur(10px)',
  boxShadow: 'none',
  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
}));

const NavButton = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.main,
  margin: '0 10px',
  '&:hover': {
    backgroundColor: 'rgba(100, 255, 218, 0.1)',
  },
}));

const navItems = ['Home', 'About', 'Projects', 'Contact'];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileOpen(false);
    }
  };

  const drawer = (
    <List>
      {navItems.map((item) => (
        <ListItem button key={item} onClick={() => scrollToSection(item)}>
          <ListItemText primary={item} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <>
      <StyledAppBar position="fixed">
        <Toolbar>
          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <div style={{ marginLeft: 'auto' }}>
              {navItems.map((item) => (
                <NavButton
                  key={item}
                  onClick={() => scrollToSection(item)}
                >
                  {item}
                </NavButton>
              ))}
            </div>
          )}
          <ThemeToggle />
        </Toolbar>
      </StyledAppBar>
      <Drawer
        variant="temporary"
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
      >
        {drawer}
      </Drawer>
      <Toolbar /> {/* This creates space below the fixed AppBar */}
    </>
  );
};

export default Navbar; 