import { useEffect, useState } from "react";
import { deleteMovieFromFavorite, getFavoriteMovieIDs } from "../utilities/localStorage";
import { useLoaderData } from "react-router-dom";
import MovieCard from "../Components/MovieCard";


const MyFavorites = () => {
    const [favoriteMovies, setFavoriteMovies] = useState([])
    const movies = useLoaderData();

    useEffect(() => {
        const storedMovieIDs = getFavoriteMovieIDs();

        const matchedMovies = movies.filter(movie => storedMovieIDs.find(storedID => movie._id === storedID));

        setFavoriteMovies(matchedMovies)

    }, []);

    const deleteFavorite = (id) => {
        deleteMovieFromFavorite(id);
        const remainingMovies = favoriteMovies.filter(movie => movie._id !== id)
        setFavoriteMovies(remainingMovies)
    }


    return (
        <section className="p-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                favoriteMovies.map(movie => <MovieCard deleteFavorite={deleteFavorite} isFavorite={true} movie={movie} />)
            }
        </section>
    );
};

export default MyFavorites;