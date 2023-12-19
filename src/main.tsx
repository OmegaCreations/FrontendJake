import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './routes/Layout.tsx'
import ErrorPage from './error-page.tsx';
import LoginPage from './routes/LoginPage.tsx';
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './routes/HomePage.tsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
]);
  
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
