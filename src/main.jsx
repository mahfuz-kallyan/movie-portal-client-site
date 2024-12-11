import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Pages/Home';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Error from './Pages/Error';
import Root from './Root';
import Movies from './Pages/Movies';
import AddMovies from './Pages/AddMovies';
import Statistics from './Pages/Statistics';
import Login from './Pages/Login';
import Register from './Pages/Register';
import { Toaster } from 'react-hot-toast';
import Details from './Pages/Details';

const router = createBrowserRouter([
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
        loader: ()=> fetch('http://localhost:5000/movies')
      },
      {
        path: "/addMovies",
        element: <AddMovies></AddMovies>,
      },
      {
        path: "/details/:id",
        element: <Details></Details>,
        loader: async({params})=>{
          const res = await fetch('http://localhost:5000/movies')
          const data = await res.json()
          return data?.find(item => item?._id === params?.id)
        }
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

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <Toaster position="top-right" />
  </StrictMode>,
)
