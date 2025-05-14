import React from 'react';
import toast from 'react-hot-toast';

const SignUp = () => {

    const handleSubscribe = (e) => {
        e.preventDefault()
            toast.success('Started successfully')
    }
    
    return (
		<div className="mt-12 flex flex-col lg:flex-row mx-auto justify-between p-8 lg:px-24 lg:py-12 backdrop-filter backdrop-blur-sm bg-gray-300 gap-8">
				<h2 className="text-3xl font-semibold text-sky-800">
				GET UPDATE SIGN UP NOW!
				</h2>
			<div>
				<div className="join">
					<input
						name="email"
						className="input  input-bordered join-item "
						placeholder="Email"
					/>
					<button
						onClick={handleSubscribe}
						className="btn join-item rounded-r-full text-sky-600 bg-gray-900"
					>
						SUBSCRIBE
					</button>
				</div>
			</div>
		</div>
	);
};

export default SignUp;