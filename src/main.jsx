import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Pages/Home.jsx";
import AllCartCraftItems from "./Components/Pages/AllCartCraftItems.jsx";
import AddCraftItems from "./Components/Pages/AddCraftItems.jsx";
import MyArtCraftList from "./Components/Pages/MyArtCraftList.jsx";
import Login from "./Components/Pages/Login.jsx";
import Register from "./Components/Pages/Register.jsx";
import { Toaster } from "react-hot-toast";
import AuthProvider from "./Components/AuthProvider.jsx";
import NotFound from "./Components/NotFound.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allArt&Carft",
        element: <AllCartCraftItems></AllCartCraftItems>,
      },
      {
        path: "/AddCraftItem",
        element: <AddCraftItems></AddCraftItems>,
      },
      {
        path: "/myCraftList",
        element: <MyArtCraftList></MyArtCraftList>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <Toaster />
    </AuthProvider>
  </React.StrictMode>
);
