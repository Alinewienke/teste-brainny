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

const client = new ApolloClient({
  uri: 'http://test.frontend.api.brainny.cc/graphql',
  cache: new InMemoryCache(),
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjkzNTE1NTk2LCJleHAiOjE2OTYxMDc1OTZ9.SVn7UpoeLmhMy9ttVMiRHeArkYbfye1p1vVumXL5fIg'
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
