import React from 'react';
import { useNavigate } from 'react-router-dom';

const FeaturedMovie = ({ movie }) => {
    const navigate = useNavigate()
    const { poster, genre, title, duration, releaseYear, rating, _id } = movie;

    const handleClick = () => {
        navigate(`/details/${_id}`)
    }

    return (
		<div className="flex flex-col justify-center items-center">
			<div className="card card-compact bg-base-100 w-80 shadow-xl space-y-2 border justify-between pt-4">
				<figure className="flex-grow overflow-hidden">
					<img
						className="w-11/12 aspect-[0.75] object-cover hover:scale-110 transition-all duration-500"
						src={poster}
						alt={title}
					/>
				</figure>
				<div className="p-4 space-y-2">
					<h2 className="card-title">{title}</h2>
					<p>
						Genre:{" "}
						<span className="font-medium">
							{genre}
						</span>
					</p>
					<p>
						Duration:{" "}
						<span className="font-medium">
							{duration} mins
						</span>
					</p>
					<div className="card-actions justify-center">
						<button
							onClick={handleClick}
							className="px-4 py-2 rounded-md bg-sky-500 hover:bg-sky-800 text-white mt-2"
						>
							See Details
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FeaturedMovie;