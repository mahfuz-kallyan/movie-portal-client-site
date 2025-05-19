import { useLoaderData } from "react-router-dom";
import MovieCard from "../Components/MovieCard";
import { useQuery } from "@tanstack/react-query";

const Movies = () => {
    const {data: movies } = useQuery({
        queryKey: ['movies'],
        queryFn: async () => {
            const res = await fetch('https://movie-portal-server-self-zeta.vercel.app/movies')
            return res.json();   
        }
   })
    return (
        <div className="mx-auto flex flex-col justify-center items-center">
           <h2 className="text-center text-3xl font-semibold py-14">All Movies</h2>
           <div className="p-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                movies?.map(movie=> <MovieCard key={movie._id} movie={movie}></MovieCard>)
            }
           </div>
        </div>
    );
};

export default Movies;