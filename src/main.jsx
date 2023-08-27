import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ChakraProvider, extendTheme  } from '@chakra-ui/react'

import './main.css'

import Dashboard from './pages/Dashboard';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import MyRegistries from './pages/MyRegistries';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/meus-registros",
    element: <MyRegistries />,
  },
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
    heading: "'Poppins', sans-serif;",
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
)
