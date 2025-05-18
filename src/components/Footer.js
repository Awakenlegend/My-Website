import React from 'react';
import { Box, Typography, Container, useTheme } from '@mui/material';

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: theme.palette.background.paper,
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      <Container maxWidth="sm">
        <Typography
          variant="body2"
          color={theme.palette.text.secondary}
          align="center"
        >
          © {new Date().getFullYear()} Mohammed Farhan. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer; 