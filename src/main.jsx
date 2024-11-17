import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Main from './layout/Main.jsx';
import Home from './components/home/Home.jsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import Login from './components/login/Login.jsx';
import Register from './components/register/Register.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path:'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
