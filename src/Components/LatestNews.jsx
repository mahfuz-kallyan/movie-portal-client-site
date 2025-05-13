import toast from 'react-hot-toast';
import pic1 from '../assets/images/image1.jpg'
import pic2 from '../assets/images/image2.jpg'
import pic3 from '../assets/images/image3.jpg'
const LatestNews = () => {

    const handleWatch=()=>{
        toast.error('Nothing is here, Please subscribe to watch something.')
    }
    return (
		<div className="my-12 space-y-8 lg:p-14 relative mx-auto ">
			<h2 className="text-4xl font-semibold text-center">Latest News</h2>
			<div className="flex gap-8 flex-col lg:flex-row justify-center items-center">
				<div className="w-1/2 relative">
					<img className="rounded-2xl" src={pic1} alt="" />
					<div className="absolute left-4 bottom-8   lg:bottom-24 lg:left-14">
						<h3 className="text-3xl font-medium text-sky-600">
							Latest News
						</h3>
						<p className="text-sm text-gray-800">Latest and upcoming movies</p>
					</div>
				</div>
				<div className="w-1/2 space-y-4">
					<div className="card card-side bg-gray-300 shadow-xl">
						<figure>
							<img
								className="w-60  px-4"
								src={pic2}
								alt="Movie"
							/>
						</figure>
						<div className="card-body">
							<h2 className="card-title text-gray-800">
								New movie is released!
							</h2>
							<p className='text-gray-800'>Click the button to watch the news.</p>
							<div className="card-actions justify-end">
								<button
									onClick={handleWatch}
									className="px-4 py-2 rounded-md bg-sky-500 hover:bg-sky-800 text-white"
								>
									Watch
								</button>
							</div>
						</div>
					</div>
					<div className="card card-side bg-gray-300 shadow-xl">
						<figure>
							<img
								className="w-60 h-60 p-4 rounded-lg "
								src={pic3}
								alt="Movie"
							/>
						</figure>
						<div className="card-body">
							<h2 className="card-title text-gray-800">
								New movie is released!
							</h2>
							<p className='text-gray-800'>Click the button to watch the news.</p>
							<div className="card-actions justify-end">
								<button
									onClick={handleWatch}
									className="px-4 py-2 rounded-md bg-sky-500 hover:bg-sky-800 text-white"
								>
									Watch
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LatestNews;