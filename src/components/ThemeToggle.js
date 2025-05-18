import React from 'react';
import { IconButton, useTheme } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4'; // Moon icon for dark mode
import Brightness7Icon from '@mui/icons-material/Brightness7'; // Sun icon for light mode
import { useThemeContext } from '../theme'; // Import the context hook

const ThemeToggle = () => {
  const theme = useTheme(); // Get the current theme mode
  const { toggleColorMode } = useThemeContext(); // Get the toggle function from context

  return (
    <IconButton sx={{ ml: 1 }} onClick={toggleColorMode} color="inherit">
      {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  );
};

export default ThemeToggle; 