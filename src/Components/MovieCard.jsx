import React from 'react';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({ movie }) => {
    const navigate = useNavigate()
    const {_id, poster, genre, title, duration, releaseYear, rating} = movie;

    const handleClick = () => {
        navigate(`/details/${_id}`)
    }
    return (
        <div className="card card-compact bg-base-100 w-96 shadow-2xl space-y-4">
            <figure>
                <img className='w-60 h-72'
                    src={poster}
                    alt="poster" />
            </figure>
            <div className="p-8 space-y-4">
                <h2 className="card-title">{title}</h2>
                <p className='text-lg font-medium'>Genre: <span className='text-red-500 font-semibold'>{genre}</span></p>
                <p className='text-lg font-medium'>Duration: <span className='text-red-500 font-semibold'>{duration} mins</span></p>
                <p className='text-lg font-medium'>Release Year: <span className='text-red-500 font-semibold'>{releaseYear}</span>
                </p>
                <p className='text-lg font-medium'>Rating: <span className='text-red-500 font-semibold'>{rating}</span></p>
                <div className="card-actions justify-center">
                    <button onClick={handleClick} className="btn bg-red-500 text-white">See Details</button>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;