import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";


const Register = () => {
    const {createUser, setUser}= useContext(AuthContext)
    const [error, setError] = useState({})

    const validatePassword = (password) => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        return regex.test(password);
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const name= form.name.value;
        const photo= form.photo.value;
        const email= form.email.value;
        const password= form.password.value;

        if (!validatePassword(password)) {
            setError({ ...error, password: 'Password must have an uppercase letter, a lowercase letter, and be at least 6 characters long' });
            toast.error(error.password);
            return;
        }
        else {
            setError((prev) => ({ ...prev, password: '' }));
        }

        createUser(email, password)
        .then(result => {
            setUser(result.user)
        })
        .catch(err => {
            toast.error(err.message, 'Registration failed')
        })
    }

    return (
        <div className="hero bg-base-100 min-h-screen my-12">
            <div className="hero-content flex-col">
                <div className="text-center p-8 rounded-b-3xl bg-red-500">
                    <h1 className="text-5xl font-semibold text-white">Register now!</h1>
                </div>
                <div className="card bg-gray-300 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name"
                                name="name"
                                className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="text" placeholder="photo url"
                                name="photo"
                                className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email"
                                name="email"
                                placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password"
                                name="password"
                                placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-red-500 text-white">Register</button>
                        </div>
                    </form>
                    <p className='p-4'>Have you an account? Please <NavLink to="/login"><strong className='text-blue-700 underline'>Login</strong></NavLink></p>
                        <p><button className='btn btn-ghost'>Sign in with Google</button></p>
                </div>
            </div>
        </div>
    );
};

export default Register;