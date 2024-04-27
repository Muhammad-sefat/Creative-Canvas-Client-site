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

const Router = createBrowserRouter([
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
        loader: () => fetch("http://localhost:5000/crafts"),
      },
      {
        path: "/viewdetails/:id",
        element: (
          <PrivateRoute>
            <ViewDetails></ViewDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/crafts/${params.id}`),
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
        element: <MyArtCraftList></MyArtCraftList>,
      },
      {
        path: "/",
        element: <CraftItems></CraftItems>,
        loader: () => fetch("http://localhost:5000/craftss"),
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
