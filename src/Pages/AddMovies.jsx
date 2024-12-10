import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaStar } from "react-icons/fa";

const AddMovies = () => {
    const [movieData, setMovieData] = useState({
        poster: "",
        title: "",
        duration: "",
        rating: 0,
        summary: "",
        genre: "Comedy",
        releaseYear: "2024"
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setMovieData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleRating = (rate) => {
        setMovieData(prevData => ({
            ...prevData,
            rating: rate
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let errors = {};

        // Poster URL validation
        const urlPattern = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
        if (!movieData.poster) {
            errors.poster = "Please insert a poster link.";
        } else if (!urlPattern.test(movieData.poster)) {
            errors.poster = "Please enter a valid URL for the poster.";
        }

        // Title validation
        if (!movieData.title.trim()) {
            errors.title = "Movie title is required.";
        } else if (movieData.title.length > 100) {
            errors.title = "Movie title should not exceed 100 characters.";
        }

        // Duration validation
        const durationPattern = /^(\d+h\s*)?(\d+m(in)?)?$/;
        if (!movieData.duration) {
            errors.duration = "Duration is required.";
        } else if (!durationPattern.test(movieData.duration)) {
            errors.duration = "Please enter a valid duration format (e.g., 2h 30min, 1h, 45min).";
        }

        // Rating validation
        if (movieData.rating < 1 || movieData.rating > 5) {
            errors.rating = "Please select a rating between 1 and 5.";
        }

        // Summary validation
        if (!movieData.summary.trim()) {
            errors.summary = "Movie summary is required.";
        } else if (movieData.summary.length < 10) {
            errors.summary = "Summary should be at least 10 characters long.";
        } else if (movieData.summary.length > 500) {
            errors.summary = "Summary should not exceed 500 characters.";
        }

        // Genre validation
        const validGenres = ["Comedy", "Drama", "Horror"];
        if (!validGenres.includes(movieData.genre)) {
            errors.genre = "Please select a valid genre.";
        }

        // Release Year validation
        const currentYear = new Date().getFullYear();
        const releaseYear = parseInt(movieData.releaseYear, 10);
        if (isNaN(releaseYear) || releaseYear < 1888 || releaseYear > currentYear + 5) {
            errors.releaseYear = `Please enter a valid release year between 1888 and ${currentYear + 5}.`;
        }

        const errorKeys = Object.keys(errors);

        if (errorKeys.length > 0) {
            errorKeys.map(key => toast.error(errors[key]))
            return;
        }

        console.log("Form data is valid:", movieData);
    };



    return (
        <div className="mx-auto bg-gray-200 pt-12 min-h-screen">
            <h2 className="text-center text-4xl font-semibold mb-8">Add Movies</h2>
            <form className="w-3/4 mx-auto py-8" onSubmit={handleSubmit}>
                <div className="space-y-8">
                    <div className="md:flex gap-8">
                        <div className="md:w-1/2">
                            <h3 className="text-xl font-medium mb-2">Movie Poster</h3>
                            <input
                                type="text"
                                name="poster"
                                className="input input-bordered w-full"
                                placeholder="Poster link"
                                value={movieData.poster}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="md:w-1/2">
                            <h3 className="text-xl font-medium mb-2">Movie Title</h3>
                            <input
                                type="text"
                                name="title"
                                className="input input-bordered w-full"
                                placeholder="Movie title"
                                value={movieData.title}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <div className="md:flex gap-8">
                        <div className="md:w-1/2">
                            <h3 className="text-xl font-medium mb-2">Duration</h3>
                            <input
                                type="text"
                                name="duration"
                                className="input input-bordered w-full"
                                placeholder="Duration (e.g., 2h 30min)"
                                value={movieData.duration}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="md:w-1/2">
                            <h3 className="text-xl font-medium mb-2">Rating</h3>
                            <div className="flex">
                                {[...Array(5)].map((star, index) => {
                                    const ratingValue = index + 1;
                                    return (
                                        <label key={index}>
                                            <input
                                                type="radio"
                                                name="rating"
                                                className="hidden"
                                                value={ratingValue}
                                                onClick={() => handleRating(ratingValue)}
                                            />
                                            <FaStar
                                                className="cursor-pointer"
                                                color={ratingValue <= movieData.rating ? "orange" : "gray"}
                                                size={30}
                                            />
                                        </label>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="w-full">
                        <h3 className="text-xl font-medium mb-2">Summary</h3>
                        <textarea
                            name="summary"
                            placeholder="Movie summary"
                            className="textarea textarea-bordered w-full"
                            value={movieData.summary}
                            onChange={handleInputChange}
                        ></textarea>
                    </div>
                    <div className="space-y-4">
                        <div>
                            <h3 className="text-xl font-medium mb-2">Genre</h3>
                            <select
                                name="genre"
                                className="select select-bordered w-full"
                                value={movieData.genre}
                                onChange={handleInputChange}
                            >
                                <option value="Comedy">Comedy</option>
                                <option value="Drama">Drama</option>
                                <option value="Horror">Horror</option>
                            </select>
                        </div>
                        <div>
                            <h3 className="text-xl font-medium mb-2">Release Year</h3>
                            <select
                                name="releaseYear"
                                className="select select-bordered w-full"
                                value={movieData.releaseYear}
                                onChange={handleInputChange}
                            >
                                <option value="2024">2024</option>
                                <option value="2023">2023</option>
                                <option value="2022">2022</option>
                                <option value="2021">2021</option>
                                <option value="2020">2020</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="my-12">
                    <button type="submit" className="btn btn-block btn-neutral text-xl">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default AddMovies;

