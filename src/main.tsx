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
import React from 'react';

// Redux
import { Provider } from 'react-redux';
import { store } from './state/store.ts';

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
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
