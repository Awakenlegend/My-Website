import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Grid, IconButton, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const theme = useTheme();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <Box
      id="contact"
      component="section"
      sx={{
        py: 8,
      }}
    >
      <Box
        ref={ref}
        sx={{
          maxWidth: '800px',
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
            align="center"
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
                margin: '0 auto',
              },
            }}
          >
            Get In Touch
          </Typography>

          <Typography
            variant="body1"
            align="center"
            sx={{
              mb: 6,
              color: theme.palette.text.secondary,
            }}
          >
            I'm currently looking for new opportunities. Whether you have a question
            or just want to say hi, I'll try my best to get back to you!
          </Typography>

          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  variant="outlined"
                  InputLabelProps={{
                    style: { color: theme.palette.text.secondary },
                  }}
                  InputProps={{
                    style: { color: theme.palette.text.primary },
                  }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: theme.palette.text.secondary + ' !important',
                      },
                      '&:hover fieldset': {
                        borderColor: theme.palette.primary.main + ' !important',
                      },
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  variant="outlined"
                  InputLabelProps={{
                    style: { color: theme.palette.text.secondary },
                  }}
                  InputProps={{
                    style: { color: theme.palette.text.primary },
                  }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: theme.palette.text.secondary + ' !important',
                      },
                      '&:hover fieldset': {
                        borderColor: theme.palette.primary.main + ' !important',
                      },
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  multiline
                  rows={4}
                  variant="outlined"
                  InputLabelProps={{
                    style: { color: theme.palette.text.secondary },
                  }}
                  InputProps={{
                    style: { color: theme.palette.text.primary },
                  }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: theme.palette.text.secondary + ' !important',
                      },
                      '&:hover fieldset': {
                        borderColor: theme.palette.primary.main + ' !important',
                      },
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.background.default,
                    '&:hover': {
                      backgroundColor: theme.palette.primary.dark,
                    },
                  }}
                >
                  Send Message
                </Button>
              </Grid>
            </Grid>
          </form>

          <Box
            sx={{
              mt: 6,
              display: 'flex',
              justifyContent: 'center',
              gap: 2,
            }}
          >
            <IconButton
              href="https://github.com/Awakenlegend"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: theme.palette.text.primary }}
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              href="https://linkedin.com/in/mohammed-farhan1"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: theme.palette.text.primary }}
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: theme.palette.text.primary }}
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
              href="mailto:kingofmyown492@gmail.com"
              sx={{ color: theme.palette.text.primary }}
            >
              <EmailIcon />
            </IconButton>
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
};

export default Contact; 