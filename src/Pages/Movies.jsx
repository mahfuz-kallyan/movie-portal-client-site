import { useLoaderData } from "react-router-dom";
import MovieCard from "../Components/MovieCard";

const Movies = () => {
    const movies = useLoaderData()
    return (
        <div>
           <h2 className="text-center text-3xl font-semibold py-14">All Movies: {movies.length}</h2>
           <div className="p-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 space-y-12">
            {
                movies.map(movie=> <MovieCard key={movie._id} movie={movie}></MovieCard>)
            }
           </div>
        </div>
    );
};

export default Movies;