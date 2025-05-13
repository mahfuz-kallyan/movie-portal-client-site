import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
		<div className="flex items-center justify-center h-screen bg-gray-100 text-center px-4">
			<div>
				<h1 className="text-7xl font-bold text-red-500 mb-4">404</h1>
				<h2 className="text-3xl font-semibold text-gray-800 mb-2">
					Page Not Found!
				</h2>
				<p className="text-gray-600 mb-6">
					Sorry, the page you're looking for doesn't exist.
				</p>
                <Link
                to="/" className="btn bg-sky-600 text-white border-none">
					Go Home
				</Link>
			</div>
		</div>
	);
};

export default Error;