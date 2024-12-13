import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Error from "../Pages/Error";
import Home from "../Pages/Home";
import Movies from "../Pages/Movies";
import AddMovies from "../Pages/AddMovies";
import Details from "../Pages/Details";
import MyFavorites from "../Pages/MyFavorites";
import Statistics from "../Pages/Statistics";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <Error></Error>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/movies",
          element: <Movies></Movies>,
          loader: () => fetch('http://localhost:5000/movies')
        },
        {
          path: "/addMovies",
          element: <AddMovies></AddMovies>,
        },
        {
          path: "/details/:id",
          element: <Details></Details>,
          loader: async ({ params }) => {
            const res = await fetch('http://localhost:5000/movies')
            const data = await res.json()
            return data?.find(item => item?._id === params?.id)
          }
        },
        {
          path: "/favorites",
          element: <MyFavorites></MyFavorites>,
          loader: () => fetch('http://localhost:5000/movies')
        },
        {
          path: "/statistics",
          element: <Statistics></Statistics>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/register",
          element: <Register></Register>
        },
      ]
    },
  ]);
  