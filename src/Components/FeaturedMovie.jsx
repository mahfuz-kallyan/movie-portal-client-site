import React from 'react';
import { useNavigate } from 'react-router-dom';

const FeaturedMovie = ({ movie }) => {
    const navigate = useNavigate()
    const { poster, genre, title, duration, releaseYear, rating, _id } = movie;

    const handleClick = () => {
        navigate(`/details/${_id}`)
    }

    return (
        <div className='flex flex-col justify-center items-center'>
            <div className="card card-compact bg-base-100 w-96 h-auto shadow-2xl space-y-4 border justify-between pt-4">
                <figure className='flex-grow overflow-hidden'>
                    <img className='w-60 aspect-[0.75] object-cover hover:scale-110 transition-all duration-500'
                        src={poster}
                        alt={title}
                    />
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
        </div>
    );
};

export default FeaturedMovie;