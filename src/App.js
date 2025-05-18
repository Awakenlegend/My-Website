import React, { useState } from 'react';
import { useTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Box, Button, Typography } from '@mui/material';
import Background3D from './components/Background3D';

function App() {
  const theme = useTheme();
  const [isWebsiteOpen, setIsWebsiteOpen] = useState(false);

  const handleOpenWebsite = () => {
    setIsWebsiteOpen(true);
  };

  return (
    <>
      <CssBaseline />
      <Background3D />
      {isWebsiteOpen ? (
        <div className={`App ${theme.palette.mode}-mode`} style={{ position: 'relative', zIndex: 1 }}>
          <Navbar />
          <main>
            <Hero />
            <About />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </div>
      ) : (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            backgroundColor: theme.palette.background.default,
            color: theme.palette.text.primary,
          }}
        >
          <Typography variant="h4" sx={{ mb: 4 }}>
            Welcome to <span style={{ color: theme.palette.primary.main }}>Mohammed Farhan</span>'s Portfolio
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={handleOpenWebsite}
            sx={{
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.background.default,
              '&:hover': {
                backgroundColor: theme.palette.primary.dark,
              },
            }}
          >
            Open Portfolio
          </Button>
        </Box>
      )}
    </>
  );
}

export default App; 