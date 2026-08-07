import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import GlobalStyles from '@mui/material/GlobalStyles';
import { BrowserRouter } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const theme = createTheme({
  palette: {
    primary: { main: '#2DC2A8' },
    secondary: { main: '#60E5D6' },
    background: { default: '#F6FBFF', paper: '#FFFFFF' },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <CssBaseline />
          <GlobalStyles styles={{
            '*': { scrollbarWidth: 'thick', scrollbarColor: '#2DC2A8 #F6FBFF' },
            '*::-webkit-scrollbar': { width: '20px' },
            '*::-webkit-scrollbar-track': { background: '#F6FBFF', borderRadius: '10px' },
            '*::-webkit-scrollbar-thumb': {
              background: 'linear-gradient(180deg, #2DC2A8, #C7F2FF)',
              borderRadius: '10px',
              border: '20px solid #F6FBFF',
            },
            '*::-webkit-scrollbar-thumb:hover': {
              background: 'linear-gradient(180deg, #25a892, #2DC2A8)',
            },
          }} />
          <App />
        </LocalizationProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
