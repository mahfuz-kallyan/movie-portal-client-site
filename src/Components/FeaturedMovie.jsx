import { useNavigate } from "react-router-dom";

const FeaturedMovie = ({ movie }) => {
	const navigate = useNavigate();
	const { poster, genre, title, duration, releaseYear, rating, _id } = movie;

	const handleClick = () => {
		navigate(`/details/${_id}`);
	};

	return (
		<div className="flex flex-col justify-center items-center">
			<div className="card card-compact bg-base-100  shadow-xl space-y-2 border justify-between pt-4 w-80">
				<figure className="flex-grow overflow-hidden">
					<img
						className="w-11/12 aspect-[0.75] object-cover hover:scale-110 transition-all duration-500"
						src={poster}
						alt={title}
					/>
				</figure>
				<div className="p-4 space-y-2">
					<div className="flex justify-between items-center">
						<h3 className="font-semibold">{title}</h3>
						<p className="text-sm font-medium text-sky-600">
							{releaseYear}
						</p>
					</div>
					<div className="flex justify-between items-center">
						<p className="text-sm font-semibold text-sky-600">
							{genre}
						</p>
						<div className="flex justify-center items-center gap-2">
							<i className="fa-solid fa-clock text-sky-600"></i>
							<p className="text-sm font-medium text-sky-600">
								{duration}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FeaturedMovie;
