import React from 'react';
import { Box, Typography, Grid, Paper, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skills = [
  'JavaScript ',
  'React',
  'Node.js',
  'TypeScript',
  'Python',
  'SQL',
  'Git',
  'AWS',
  'c++',
  'c',
  'dsa',
];

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const theme = useTheme();

  return (
    <Box
      id="about"
      component="section"
      sx={{
        py: 8,
        padding: '80px 0',
      }}
    >
      <Box
        ref={ref}
        sx={{
          maxWidth: '1200px',
          margin: '0 auto',
          px: 2,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h2"
            sx={{
              mb: 4,
              color: theme.palette.text.primary,
              '&::after': {
                content: '""',
                display: 'block',
                width: '60px',
                height: '4px',
                backgroundColor: theme.palette.primary.main,
                mt: 2,
              },
            }}
          >
            About Me
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Box sx={{ textAlign: 'center', mb: 4 }}>
                <Box
                  component="img"
                  src="/profileimg.jpg"
                  alt="Mohammed Farhan Profile"
                  sx={{
                    width: 150,
                    height: 150,
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '4px solid',
                    borderColor: theme.palette.primary.main,
                    boxShadow: theme.palette.mode === 'dark' ? '0 4px 8px rgba(0,0,0,0.7)' : '0 4px 8px rgba(0,0,0,0.2)',
                  }}
                />
              </Box>
              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.text.secondary,
                  mb: 3,
                  lineHeight: 1.8,
                }}
              >
                I'm Mohammed Farhan, a B.Tech Computer Science Engineering student with a strong interest in AI and Machine Learning. I love observing real-world problems and turning them into practical, code-based solutions.

I enjoy building smart, functional applications that blend logic and creativity. Whether it's developing web tools or experimenting with ML models, I'm always eager to explore new technologies and grow as a developer.



              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.text.secondary,
                  mb: 3,
                  lineHeight: 1.8,
                }}
              >
                 Outside of coding, I contribute to open-source projects and share knowledge through technical writing. My goal is to create intelligent systems that make a real-world impact
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  borderRadius: 2,
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ mb: 2, color: theme.palette.text.primary }}
                >
                  Here are a few technologies I've been working with recently:
                </Typography>
                <Grid container spacing={1}>
                  {skills.map((skill) => (
                    <Grid item xs={6} key={skill}>
                      <Typography
                        variant="body2"
                        sx={{
                          color: theme.palette.text.secondary,
                          display: 'flex',
                          alignItems: 'center',
                          '&::before': {
                            content: '"▹"',
                            color: theme.palette.primary.main,
                            mr: 1,
                          },
                        }}
                      >
                        {skill}
                      </Typography>
                    </Grid>
                  ))}
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </motion.div>
      </Box>
    </Box>
  );
};

export default About; 