import banner from "../assets/images/n1.jpg";
import toast from "react-hot-toast";

const Banner = () => {
	const handleSearch = () => {
		toast.success("Visit All Movies");
	};

	return (
		<div
			className="relative min-h-screen flex items-center justify-center text-white bg-cover bg-center"
			style={{ backgroundImage: `url(${banner})` }}
		>
			{/* Overlay */}
			<div className="absolute inset-0 bg-black/60"></div>

			{/* Content */}
			<div className="relative z-10 text-center px-4 max-w-2xl">
				<h1 className="text-4xl font-bold mb-4 leading-tight">
					Discover Your Next Favorite Movie
				</h1>
				<p className="text-lg md:text-xl mb-6">
					Browse top-rated films, hidden gems, and all your favorite
					genres in one place.
				</p>
				<button
					onClick={handleSearch}
					className="bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
				>
					Explore Movies
				</button>
			</div>
		</div>
	);
};

export default Banner;
