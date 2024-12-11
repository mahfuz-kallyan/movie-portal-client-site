import React from 'react';

const MovieCard = ({movie}) => {
    const { poster, genre, title, duration, releaseYear, rating, summary}= movie;
    return (
        <div className="card card-compact bg-base-100 w-96 shadow-2xl space-y-4">
            <figure>
                <img className='w-60 h-72'
                    src={poster}
                    alt="poster" />
            </figure>
            <div className="p-8 space-y-4">
                <h2 className="card-title">{title}</h2>
                <p>{summary}</p>
                <p className='text-lg font-medium'>Genre: <span className='text-red-500'>{genre}</span></p>
                <p className='text-lg font-medium'>Duration: <span className='text-red-500'>{duration} mins</span></p>
                <p className='text-lg font-medium'>Release Year: <span className='text-red-500'>{releaseYear}</span>
                </p>
                <p className='text-lg font-medium'>Rating: <span className='text-red-500'>{rating}</span></p>
                <div className="card-actions justify-center">
                    <button className="btn bg-red-500 text-white">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;