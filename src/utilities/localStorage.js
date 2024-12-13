import toast from "react-hot-toast";

/**
 * Function to get movie IDs from local storage.
 * @returns {string[]} - Array of movie IDs.
 */
export const getFavoriteMovieIDs = () => {
    const storedMovies = localStorage.getItem("favorite-movies");

    if (storedMovies) {
        return JSON.parse(storedMovies);
    }

    return [];
}

/**
 * Function to save movie IDs from Favorite.
 * @param {string} id - MongoDB `_id` for movie.
 */
export const saveMovieToFavorite = (id) => {
    const storedMovies = getFavoriteMovieIDs();

    // prevent duplicate items from being added to local storage
    const doesExist = storedMovies.includes(id);

    if (!doesExist) {
        storedMovies.push(id);
        localStorage.setItem("favorite-movies", JSON.stringify(storedMovies));
        toast.success("Successfully Added to to Favorite!");
    } else {
        toast.error("Movie Already Exists in Your Favorite!")
    }
}

/**
 * Function to delete movie IDs from Favorite.
 * @param {string} id - MongoDB `_id` for movie.
 */
export const deleteMovieFromFavorite = (id) => {
    const storedMovies = getFavoriteMovieIDs("favorite-movies");

    const moviesToStore = storedMovies.filter(storedID => storedID !== id);

    if (moviesToStore.length < storedMovies.length) {
        // Removing from Favorite
        localStorage.setItem("favorite-movies", JSON.stringify(moviesToStore));

        toast.success("Movie is Deleted from Your Favorite!");
    } else {
        toast.error("Movie ID Not Found!")
    }
}
