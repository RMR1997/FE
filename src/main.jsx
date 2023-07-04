import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from './pages/error';
import LoginPage from './pages/login';
import "./index.css";
import Dashboard from './pages/dashboard';
import DataPage from './pages/DataPage';
import InputPage from './pages/InputPage';
import TrackPage from './pages/track';
import EditPage from './pages/EditPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/datapage",
    element: <DataPage />,
  },
  {
    path: "/inputpage",
    element: <InputPage />,
  },
  {
    path: "/track",
    element: <TrackPage />,
  },
  {
    path: "/edit/:id",
    element: <EditPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
