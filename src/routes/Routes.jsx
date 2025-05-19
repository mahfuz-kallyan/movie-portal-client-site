import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Error from "../Pages/Error";
import Home from "../Pages/Home";
import Movies from "../Pages/Movies";
import AddMovies from "../Pages/AddMovies";
import Details from "../Pages/Details";
import MyFavorites from "../Pages/MyFavorites";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "./PrivateRoute";
import Statistics from "../Pages/Dashboard/Statistics";
import Dashboard from "../DashBoard";
import AllUsers from "../Pages/Dashboard/AllUsers";

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
			},
			{
				path: "/addMovies",
				element: (
					<PrivateRoute>
						<AddMovies></AddMovies>
					</PrivateRoute>
				),
			},
			{
				path: "/details/:id",
				element: <Details></Details>,
				loader: async ({ params }) => {
					const res = await fetch(
						"https://movie-portal-server-self-zeta.vercel.app/movies"
					);
					const data = await res.json();
					return data?.find((item) => item?._id === params?.id);
				},
			},
			{
				path: "/favorites",
				element: (
					<PrivateRoute>
						<MyFavorites></MyFavorites>
					</PrivateRoute>
				),
				loader: () =>
					fetch(
						"https://movie-portal-server-self-zeta.vercel.app/movies"
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
	{
		path: "/dashboard",
		element: <Dashboard></Dashboard>,
    children: [
      {path: 'statistics',
        element: <Statistics></Statistics>
		},
		// Admin routes
		{
			path: 'users',
			element: <AllUsers></AllUsers>
		},
		],
	},
]);
