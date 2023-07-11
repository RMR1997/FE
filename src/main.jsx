import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/error";
import LoginPage from "./pages/login";
import "./index.css";
import Dashboard from "./pages/dashboard";
import DataPage from "./pages/DataPage";
import InputPage from "./pages/InputPage";
import TrackPage from "./pages/track";
import EditPage from "./pages/EditPage";
import InputOwnership from "./pages/inputownership";
import InputLocation from "./pages/inputlocation";
import InputCategory from "./pages/inputcategory";
import DetailPage from "./pages/DetailPage";
import Input from "./components/atoms/Input";
import Tabs from "./pages/input";

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
    element: <Tabs />,
  },
  {
    path: "/track",
    element: <TrackPage />,
  },
  {
    path: "/edit/:id",
    element: <EditPage />,
  },
  {
    path: "/inputownership",
    element: <InputOwnership />,
  },
  {
    path: "/inputcategory",
    element: <InputCategory />,
  },
  {
    path: "/inputlocation",
    element: <InputLocation />,
  },
  {
    path: "/details/:id",
    element: <DetailPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
