import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const Statistics = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {

        axios.get('https://movie-portal-server-self-zeta.vercel.app/movies')
            .then(data => {
                const movieData = data.data;
                const movieWithData = movieData.map(movie => {
                    const obj = {
                        name: movie.title,
                        Duration: parseInt(movie.duration),
                    }
                    return obj;
                })
                console.log(movieWithData);

                setMovies(movieWithData)
            })
    }, [])

    return (
        <div className='min-h-screen mx-auto'>
            <div className='flex flex-col items-center justify-center my-12'>
                <BarChart width={600} height={400} data={movies}>
                    <Bar dataKey="Duration" fill="#8884d8" />
                    <XAxis dataKey={name}></XAxis>
                    <YAxis></YAxis>
                </BarChart>
            </div>
        </div>
    );
};

export default Statistics;