import React from 'react';
import toast from 'react-hot-toast';

const Traffic = () => {
    const handleStart = () => {
    toast.success('Started Successfully')
}

    return (
		<div className="bg-sky-800 flex flex-col md:flex-row justify-center items-center gap-8 my-12 lg:py-8">
			<div className="p-4 lg:py-14 lg:w-8/12 space-y-3">
				<h3 className="text-white text-3xl font-medium">
					Filmverse is what you need, to get traffic for your awesome
					movie website!
				</h3>
				<h5 className="text-white">
					Don't have traffic Yet? Join Now! And Start with Fimlverse!
					It's free
				</h5>
			</div>
			<div>
				<div className="join">
					<input
						name="email"
						className="input  input-bordered join-item "
						placeholder="Email"
					/>
					<button onClick={handleStart}
						className="btn join-item rounded-r-full text-sky-600 bg-gray-900"
					>
						GET STARTED
					</button>
				</div>
			</div>
		</div>
	);
};

export default Traffic;