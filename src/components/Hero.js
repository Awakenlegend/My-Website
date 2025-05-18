import React from 'react';
import { Box, Typography, Button, Container, Grid, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';

const StyledButton = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.main,
  borderColor: theme.palette.primary.main,
  padding: '10px 20px',
  '&:hover': {
    backgroundColor: theme.palette.mode === 'dark' ? 'rgba(100, 255, 218, 0.1)' : 'rgba(23, 77, 68, 0.1)',
    borderColor: theme.palette.primary.main,
  },
}));

const Hero = () => {
  const theme = useTheme();

  return (
    <Box
      id="home"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '80px 0',
      }}
    >
      <Container>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={7}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Typography
                variant="h6"
                color="primary"
                sx={{ mb: 2 }}
              >
                Hi, my name is
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 'bold',
                  mb: 2,
                  color: theme.palette.text.primary,
                }}
              >
                Mohammed <span style={{ color: theme.palette.primary.main }}>Farhan</span>
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  mb: 4,
                  color: theme.palette.text.secondary,
                }}
              >
                I build things for the web.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  maxWidth: '540px',
                  mb: 4,
                  color: theme.palette.text.secondary,
                }}
              >
                I'm a software developer turning real-world problems into intelligent, human-centered solutions—where code meets purpose and AI meets impact.


              </Typography>
              <StyledButton
                variant="outlined"
                onClick={() => {
                  const element = document.getElementById('projects');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Check out my work!
              </StyledButton>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              <Box
                component="img"
                src="/profileimg.jpg"
                alt="Mohammed Farhan Profile"
                sx={{
                  width: 250,
                  height: 250,
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '5px solid',
                  borderColor: theme.palette.primary.main,
                  boxShadow: theme.palette.mode === 'dark' ? '0 5px 15px rgba(0,0,0,0.6)' : '0 5px 15px rgba(0,0,0,0.2)',
                }}
              />
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero; 