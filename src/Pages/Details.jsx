import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const movie = useLoaderData();
    const {_id, poster, genre, title, duration, releaseYear, rating, summary } = movie;

    return (
        <div className='py-14'>
            <h2 className='text-center text-3xl font-semibold my-12'>Movie Details</h2>
            <div className='px-14 w-2/3 mx-auto'>
                <div className="card card-side bg-gray-200 shadow-xl">
                    <figure>
                        <img
                            src={poster}
                            alt="Movie" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-red-500">{title}</h2>
                        <p>{summary}</p>
                        <p className='text-lg font-medium'>Duration: <span className='text-red-500 font-semibold'>{duration} mins</span></p>
                        <p className='text-lg font-medium'>Genre: <span className='text-red-500 font-semibold'>{genre}</span></p>
                        <p className='text-lg font-medium'>Rating: <span className='text-red-500 font-semibold'>{rating}</span></p>
                        <p className='text-lg font-medium'>Release Year: <span className='text-red-500 font-semibold'>{releaseYear}</span></p>
                        <div className="card-actions">
                            <button className="btn bg-red-500 text-white">Delete Movie</button>
                            <button className="btn bg-red-500 text-white">Add to Favorite</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;