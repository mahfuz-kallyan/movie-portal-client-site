import React, { useEffect, useState } from 'react';
import FeaturedMovie from './FeaturedMovie';

const FeaturedMovies = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('https://movie-portal-server-self-zeta.vercel.app/featured')
            .then(res => res.json())
            .then(data => setMovies(data))
            .catch(err => console.log(err)
            )
    }, [])

    return (
        <div className='my-12'>
            <h2 className='text-center text-4xl font-semibold'>Featured Movies</h2>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 w-11/12 mx-auto'>
           {
                movies.map(movie => <FeaturedMovie key={movie._id} movie={movie}></FeaturedMovie> )
            }
           </div>
        </div>
    );
};

export default FeaturedMovies;