import React, { useState } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { saveMovieToFavorite } from '../utilities/localStorage';

const Details = () => {
    const movie = useLoaderData();
    const [movies, setMovies] = useState(movie)
    const navigate = useNavigate()
    const { _id, poster, genre, title, duration, releaseYear, rating, summary } = movie;

    const handleDelete = (id) => {
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://movie-portal-server-self-zeta.vercel.app/movies/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your movie has been deleted.",
                                icon: "success"
                            });
                            navigate('/movies')

                            const remaining = movies.filter(mov => mov._id !== id)
                            setMovies(remaining)
                        }
                    })

            }
        });
    }


    const handleClick = () => {
        navigate('/movies')
    }
   
    return (
		<div className="py-14">
			<h2 className="text-center text-3xl font-semibold my-12">
				Movie Details
			</h2>
			<div className="px-14 lg:w-2/3 mx-auto">
				<div className="card card-side bg-gray-200 shadow-xl">
					<figure>
						<img src={poster} alt="Movie" />
					</figure>
					<div className="card-body">
						<h2 className="card-title text-sky-500">{title}</h2>
						<p>{summary}</p>
						<p className="text-lg font-medium">
							Duration:{" "}
							<span className="text-sky-500 font-semibold">
								{duration} mins
							</span>
						</p>
						<p className="text-lg font-medium">
							Genre:{" "}
							<span className="text-sky-500 font-semibold">
								{genre}
							</span>
						</p>
						<p className="text-lg font-medium">
							Rating:{" "}
							<span className="text-sky-500 font-semibold">
								{rating}
							</span>
						</p>
						<p className="text-lg font-medium">
							Release Year:{" "}
							<span className="text-sky-500 font-semibold">
								{releaseYear}
							</span>
						</p>
						<div className="card-actions">
							<button
								onClick={() => handleDelete(_id)}
								className="py-2 px-4 rounded-md bg-sky-400 hover:bg-sky-600 text-white font-medium shadow-md hover:shadow-lg focus:outline-none transition duration-300"
							>
								Delete Movie
							</button>
							<button
								onClick={() => saveMovieToFavorite(_id)}
								className="py-2 px-2 rounded-md bg-sky-400 hover:bg-sky-600 text-white font-medium shadow-md hover:shadow-lg focus:outline-none transition duration-300"
							>
								Add to Favorite
							</button>
							<button
								onClick={handleClick}
								className="py-2 px-4 rounded-md bg-sky-400 hover:bg-sky-600 text-white font-medium shadow-md hover:shadow-lg focus:outline-none transition duration-300"
							>
								See All Movies
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Details;