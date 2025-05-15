import React, { useEffect, useState } from "react";
import FeaturedMovie from "./FeaturedMovie";
import { Link } from "react-router-dom";

const FeaturedMovies = () => {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		fetch("https://movie-portal-server-self-zeta.vercel.app/featured")
			.then((res) => res.json())
			.then((data) => setMovies(data))
			.catch((err) => console.log(err));
	}, []);

	return (
		<div className="my-12 p-6">
			<h2 className="text-center text-4xl font-semibold">
				Featured Movies
			</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 w-11/12 mx-auto">
				{movies.map((movie) => (
					<FeaturedMovie
						key={movie._id}
						movie={movie}
					></FeaturedMovie>
				))}
			</div>
			<div className="flex justify-between items-center my-10">
				<div></div>
				<div>
					<Link
						to="/movies"
						className="py-2 px-6 rounded-md bg-white hover:bg-sky-600  text-sky-500 border-b-2 border-sky-500 font-semibold shadow-md hover:shadow-lg focus:outline-none transition duration-300"
					>
						Show All
					</Link>
				</div>
				<div></div>
			</div>
		</div>
	);
};

export default FeaturedMovies;
