import banner1 from '../assets/images/n1.jpg'
import banner2 from '../assets/images/m8.jpg'
import banner3 from '../assets/images/m9.jpg'
import toast from 'react-hot-toast';

const Banner = () => {
	const handleSearch =()=> {
	toast.success('Visit All Movies')
}

    return (
		<div className="mx-auto relative">
			<div className="carousel w-full max-h-screen">
				<div
					id="slide1"
					className="carousel-item relative w-full overflow-hidden"
				>
					<img
						src={banner1}
						className="w-full  max-h-screen object-cover opacity-80"
					/>
					<div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
						<a
							href="#slide3"
							className="btn btn-circle text-sky-500 hover:bg-sky-900"
						>
							❮
						</a>
						<a
							href="#slide2"
							className="btn btn-circle text-sky-500 hover:bg-sky-900"
						>
							❯
						</a>
					</div>
				</div>
				<div id="slide2" className="carousel-item relative w-full">
					<img
						src={banner2}
						className="w-full max-h-screen object-cover opacity-80"
					/>
					<div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
						<a
							href="#slide1"
							className="btn btn-circle text-sky-500 hover:bg-sky-900"
						>
							❮
						</a>
						<a
							href="#slide3"
							className="btn btn-circle text-sky-500 hover:bg-sky-900"
						>
							❯
						</a>
					</div>
				</div>
				<div id="slide3" className="carousel-item relative w-full">
					<img
						src={banner3}
						className="w-full max-h-screen object-cover opacity-80"
					/>
					<div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
						<a
							href="#slide2"
							className="btn btn-circle text-sky-500 hover:bg-sky-900"
						>
							❮
						</a>
						<a
							href="#slide1"
							className="btn btn-circle text-sky-500 hover:bg-sky-900"
						>
							❯
						</a>
					</div>
				</div>
			</div>
			<div className="absolute w-2/3 bottom-4 left-24 md:left-32 md:bottom-16 lg:bottom-64 lg:left-52 flex flex-col justify-center items-center">
				<div className="md:space-y-3 text-center lg:w-3/4">
					<h2 className="text-2xl md:text-5xl text-white font-medium">
						KEEP IN-TOUCH WITH THE CREATIVE WORLD!
					</h2>
					<p className="md:text-xl text-sky-500 font-medium">
						we're here for you. Find movieshelp and advice for
						getting the most our of docall theme
					</p>
				</div>
				<div className="md:mt-6 lg:w-3/4">
					<label className="input input-bordered flex items-center gap-2">
	, 					<input
							type="text"
							className="grow"
							placeholder="Search"
							required
						/>
						<svg onClick={handleSearch}
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 16 16"
							fill="currentColor"
							className="h-6 w-6 opacity-70 text-sky-900"
						>
							<path
								fillRule="evenodd"
								d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
								clipRule="evenodd"
							/>
						</svg>
					</label>
				</div>
			</div>
		</div>
	);
};

export default Banner;