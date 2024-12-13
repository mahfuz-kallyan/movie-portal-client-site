import React from 'react';

const SignUp = () => {
    return (
        <div className='mt-12 flex flex-col lg:flex-row mx-auto justify-between p-8 lg:px-24 lg:py-12 backdrop-filter backdrop-blur-sm bg-gray-300 gap-8'>
            <h2 className='text-3xl font-medium text-red-500'>GET UPDATE SIGN UP NOW!</h2>
            <div>
                <div className="join">
                    <input className="input input-bordered join-item " placeholder="Email" />
                    <button className="btn join-item rounded-r-full text-red-500 bg-gray-800">Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;