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
        <div className='my-14'>
            <h2 className='text-center text-4xl font-semibold'>Featured Movies</h2>
           <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 w-10/12 mx-auto'>
           {
                movies.map(movie => <FeaturedMovie key={movie._id} movie={movie}></FeaturedMovie> )
            }
           </div>
        </div>
    );
};

export default FeaturedMovies;