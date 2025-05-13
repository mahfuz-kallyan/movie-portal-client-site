import banner1 from '../assets/images/1_WmHcwSuUA7AnsV84tNatnA.webp'
import banner2 from '../assets/images/1_lgEWBSWdxlF7NFgjSI3P9A.webp'
import banner3 from '../assets/images/0_bM2NxDQcGS2lspas.webp'

const Banner = () => {
    return (
		<div>
			<div className="carousel w-full max-h-screen">
				<div
					id="slide1"
					className="carousel-item relative w-full overflow-hidden"
				>
					<img
						src={banner1}
						className="w-full  max-h-screen object-cover"
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
					<img src={banner2} className="w-full" />
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
					<img src={banner3} className="w-full" />
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
		</div>
	);
};

export default Banner;