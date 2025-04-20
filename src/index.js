import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import { AuthProvider } from './context/AuthProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    mainDarkMidnightBlue: '#023047',
    mainColorDarkTeal: '#126782',
    mainColorDarkTealHover: '#105d75',
    mainColorCyanBlue: '#219ebc',
    mainColorLightBlue: '#8ecae6',
    mainColorGoldenYellow: '#ffb703',
    mainColorOrangeGold: '#fd9e02',
    mainColorVibrantOrange: '#fb8500',
    mainColorSuccess: '#1AD526',
    mainColorError: '#d32f2f',
  }
})

// React Query
const clientQuery = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: Infinity, // Cache data forever
      staleTime: Infinity, // Data will never be considered stale
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={clientQuery}>
    <AuthProvider>
    <BrowserRouter>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
    </BrowserRouter>
    </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
