import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import './main.css';

import Dashboard from './pages/Dashboard';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import MyRegistries from './pages/MyRegistries';

import { AUTH_TOKEN } from './constants';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/dashboard',
    element: <Dashboard />
  },
  {
    path: '/meus-registros',
    element: <MyRegistries />
  }
]);

const theme = extendTheme({
  colors: {
    principal: '#330693',
    secondary: '#8A53FF',
    grey: '#20292E',
    white: '#FFFFFF'
  },
  fonts: {
    body: "'Poppins', sans-serif;",
    heading: "'Poppins', sans-serif;"
  },
  styles: {
    global: () => ({
      body: {
        bg: ''
      }
    })
  }
});

const token = localStorage.getItem(AUTH_TOKEN);

const client = new ApolloClient({
  uri: 'http://test.frontend.api.brainny.cc/graphql',
  cache: new InMemoryCache(),
  headers: {
    Authorization: token ? `Bearer ${token}` : ''
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ChakraProvider theme={theme}>
        <RouterProvider router={router} />
      </ChakraProvider>
    </ApolloProvider>
  </React.StrictMode>
);
