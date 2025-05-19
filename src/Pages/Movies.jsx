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
        <div className="mx-auto">
           <h2 className="text-center text-3xl font-semibold p-2 md:p-4 lg:py-8">All Movies</h2>
           <div className="p-2 md:p-4 lg:p-8 grid md:grid-cols-2 lg:grid-cols-4 gap-3">
            {
                movies?.map(movie=> <MovieCard key={movie._id} movie={movie}></MovieCard>)
            }
           </div>
        </div>
    );
};

export default Movies;