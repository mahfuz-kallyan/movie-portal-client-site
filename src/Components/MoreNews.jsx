import React from 'react';
import image1 from '../assets/images/n4.jpg'
import image2 from '../assets/images/n2.jpg'
import image3 from '../assets/images/n3.jpg'
import image4 from '../assets/images/m5.jpg'

const MoreNews = () => {
    return (
		<div className="mx-auto my-12 p-4 lg:px-12 lg:py-8">
			<h2 className='text-4xl font-semibold text-center my-10'>More News</h2>
			<div className="flex flex-col lg:flex-row justify-center items-center gap-4">
				<div className="lg:w-6/12 relative">
					<img
						className="w-full h-[528px] object-cover opacity-80"
						src={image1}
						alt=""
					/>
					<div className="absolute bottom-2 left-8">
						<p className="text-orange-500 font-semibold">
							HOME GRID, NEWS & UPDATES
						</p>
						<h3 className="text-2xl font-semibold text-white">
							9 FILMS ARE VYING FOR FOREIGN OSCAR NOMINATION
						</h3>
					</div>
				</div>
				<div className="lg:w-6/12 flex flex-col justify-center gap-4">
					<div className="flex justify-center items-center gap-4">
						<div className="relative">
							<img
								className=" w-full h-64 object-cover opacity-80"
								src={image4}
								alt=""
							/>
							<div className="absolute bottom-6 left-2">
								<p className="text-orange-500 font-semibold">
									HOME GRID, NEWS & UPDATES
								</p>
								<h3 className="text-2xl font-semibold text-white">
									'TITANIC', GOONIES NAMED NATIONAL FILM
									TREASURES
								</h3>
							</div>
						</div>
						<div className="relative">
							<img
								className=" w-full h-64 object-cover opacity-80"
								src={image2}
								alt=""
							/>
							<div className="absolute bottom-6 left-2">
								<p className="text-orange-500 font-semibold">
									HOME GRID, NEWS & UPDATES
								</p>
								<h3 className="text-2xl font-semibold text-white">
									REUNITING AT THE 2018 COACHELLA MUSIC
									FESTIVAL
								</h3>
							</div>
						</div>
					</div>
					<div className="relative">
						<img
							className=" w-full h-64 object-cover opacity-80"
							src={image3}
							alt=""
						/>
						<div className="absolute bottom-6 left-4">
							<p className="text-orange-500 font-semibold">
								HOME GRID, NEWS & UPDATES
							</p>
							<h3 className="text-2xl font-semibold text-white">
								ATTENDING 'STAR WARS' SCREENING IN 'STARTREK'
								COSTUME
							</h3>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MoreNews;