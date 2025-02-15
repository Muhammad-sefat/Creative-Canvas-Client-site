import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import NotFound from "./NotFound";
import AddCraftItems from "./Pages/AddCraftItems";
import AllCartCraftItems from "./Pages/AllCartCraftItems";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import MyArtCraftList from "./Pages/MyArtCraftList";
import PrivateRoute from "./Pages/PrivateRoute";
import Register from "./Pages/Register";
import ViewDetails from "./Pages/ViewDetails";
import CraftItems from "./Pages/CraftItems";
import UpdateCraft from "./Pages/UpdateCraft";
import ViewCraft from "./Pages/ViewCraft";
import UniqueArtCraft from "./Pages/UniqueArtCraft";
import UniqueCraftDetails from "./Pages/UniqueCraftDetails";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch("https://creative-canvas-server-site.vercel.app/crafts"),
      },
      {
        path: "/allArt&Carft",
        element: <AllCartCraftItems></AllCartCraftItems>,
        loader: () =>
          fetch("https://creative-canvas-server-site.vercel.app/crafts"),
      },
      {
        path: "/viewdetails/:id",
        element: (
          <PrivateRoute>
            <ViewDetails></ViewDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://creative-canvas-server-site.vercel.app/crafts/${params.id}`
          ),
      },
      {
        path: "/AddCraftItem",
        element: (
          <PrivateRoute>
            <AddCraftItems></AddCraftItems>
          </PrivateRoute>
        ),
      },
      {
        path: "/myCraftList",
        element: (
          <PrivateRoute>
            <MyArtCraftList></MyArtCraftList>
          </PrivateRoute>
        ),
      },
      {
        path: "/updateCraft/:id",
        element: (
          <PrivateRoute>
            <UpdateCraft></UpdateCraft>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://creative-canvas-server-site.vercel.app/crafts/${params.id}`
          ),
      },
      {
        path: "/",
        element: <CraftItems></CraftItems>,
      },
      {
        path: "/viewCraft/:id",
        element: <ViewCraft></ViewCraft>,
        loader: ({ params }) =>
          fetch(
            `https://creative-canvas-server-site.vercel.app/crafts/${params.id}`
          ),
      },
      {
        path: "/uniqueArtCraft/:id",
        element: <UniqueArtCraft></UniqueArtCraft>,
        loader: ({ params }) =>
          fetch(
            `https://creative-canvas-server-site.vercel.app/subcraft/${params.id}`
          ),
      },
      {
        path: "/uniqueCraftDetails/:id",
        element: <UniqueCraftDetails></UniqueCraftDetails>,
        loader: ({ params }) =>
          fetch(
            `https://creative-canvas-server-site.vercel.app/subcraft/${params.id}`
          ),
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

export default Router;
