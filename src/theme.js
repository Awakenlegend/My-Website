import { createContext, useMemo, useState, useContext } from 'react';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

export const ThemeContext = createContext({
  toggleColorMode: () => {},
});

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState('dark');

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === 'light'
            ? { // Refined Light mode palette
                primary: {
                  main: '#007bff', // A standard professional blue
                },
                secondary: {
                  main: '#6c757d', // A muted grey for secondary elements
                },
                error: {
                  main: '#dc3545', // Standard error red
                },
                background: {
                  default: '#f8f9fa', // Very light grey background
                  paper: '#ffffff', // White for cards and surfaces
                },
                text: {
                  primary: '#212529', // Dark grey for main text
                  secondary: '#6c757d', // Muted grey for secondary text
                },
              }
            : { // Refined Dark mode palette
                primary: {
                  main: '#00aaff', // A slightly brighter blue for contrast
                },
                secondary: {
                  main: '#adb5bd', // Lighter grey for secondary elements in dark mode
                },
                error: {
                  main: '#dc3545', // Keep standard error red
                },
                background: {
                  default: '#212529', // Dark charcoal background
                  paper: '#343a40', // Slightly lighter dark grey for cards and surfaces
                },
                text: {
                  primary: '#e9ecef', // Light grey for main text
                  secondary: '#adb5bd', // Muted light grey for secondary text
                },
              }),
        },
        typography: {
            // Integrated new fonts (Example: Roboto for body, Merriweather for headings)
            fontFamily: ['Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'].join(','),
            h1: {
              fontFamily: ['Merriweather', 'Georgia', 'serif'].join(','),
              fontWeight: 700,
            },
            h2: {
              fontFamily: ['Merriweather', 'Georgia', 'serif'].join(','),
              fontWeight: 600,
            },
             h3: {
              fontFamily: ['Merriweather', 'Georgia', 'serif'].join(','),
              fontWeight: 600,
            },
             h4: {
              fontFamily: ['Merriweather', 'Georgia', 'serif'].join(','),
              fontWeight: 600,
            },
             h5: {
              fontFamily: ['Merriweather', 'Georgia', 'serif'].join(','),
              fontWeight: 600,
            },
             h6: {
              fontFamily: ['Merriweather', 'Georgia', 'serif'].join(','),
              fontWeight: 600,
            },
        },
        components: {
            MuiButton: {
                styleOverrides: {
                    root: ({ theme }) => ({
                        borderColor: theme.palette.primary.main,
                        color: theme.palette.primary.main,
                        '&:hover': {
                            backgroundColor: theme.palette.mode === 'dark' ? 'rgba(0, 170, 255, 0.1)' : 'rgba(0, 123, 255, 0.1)', // Theme-aware hover based on new primary colors
                            borderColor: theme.palette.primary.main,
                        }
                    }),
                },
            },
            MuiIconButton: {
                styleOverrides: {
                    root: ({ theme }) => ({
                         color: theme.palette.text.primary,
                         '&:hover': {
                             color: theme.palette.mode === 'dark' ? theme.palette.primary.main : theme.palette.primary.dark,
                         }
                    })
                }
            }
        }
      }),
    [mode],
  );

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ toggleColorMode }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
}; 