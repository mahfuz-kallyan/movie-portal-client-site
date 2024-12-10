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
      },
      {
        path: "/addMovies",
        element: <AddMovies></AddMovies>,
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
