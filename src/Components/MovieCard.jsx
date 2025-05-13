import React from 'react';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({ movie, isFavorite = false, deleteFavorite }) => {
    const navigate = useNavigate()
    const { _id, poster, genre, title, duration, releaseYear, rating } = movie;

    const handleClick = () => {
        navigate(`/details/${_id}`)
    }

    return (
		<div className="card card-compact bg-base-100 w-96 h-auto shadow-2xl space-y-4 border justify-between pt-4">
			<figure className="flex-grow overflow-hidden">
				<img
					className="w-60 aspect-[0.75] object-cover hover:scale-110 transition-all duration-500"
					src={poster}
					alt={title}
				/>
			</figure>
			<div className="p-8 space-y-4">
				<h2 className="card-title">{title}</h2>
				<p>
					Genre: <span className="font-medium">{genre}</span>
				</p>
				<p>
					Duration:{" "}
					<span className="font-medium">{duration} mins</span>
				</p>
				<p>
					Release Year:{" "}
					<span className=" font-medium">{releaseYear}</span>
				</p>
				<p>
					Rating: <span className="font-medium">{rating}</span>
				</p>
				<div className="card-actions justify-center">
					{isFavorite ? (
						<>
							<button
								onClick={handleClick}
								className="btn bg-red-500 text-white"
							>
								See Details
							</button>
							<button
								onClick={() => deleteFavorite(_id)}
								className="btn bg-red-500 text-white"
							>
								See Remove Favorite
							</button>
						</>
					) : (
						<button
							onClick={handleClick}
							className="px-4 py-2 rounded-md bg-sky-500 hover:bg-sky-800 text-white mt-2"
						>
							See Details
						</button>
					)}
				</div>
			</div>
		</div>
	);
};

export default MovieCard;