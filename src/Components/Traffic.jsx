import React from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const Traffic = () => {
    const handleStarted = () => {
    toast.success('Started Successfully')
}

    return (
		<div className="bg-gray-800 flex flex-col md:flex-row justify-center items-center gap-8 my-12 p-4 lg:py-8">
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
				<button onClick={handleStarted} className='px-2 py-2 border rounded-sm text-sky-400 hover:bg-sky-900 border-sky-400'>Get Started</button>	
			</div>
		</div>
	);
};

export default Traffic;