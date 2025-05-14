import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";
import { NavLink, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import registerAnim from '../assets/animation/register.json'
import Lottie from "lottie-react";


const Register = () => {
    const {createUser, setUser, signInWithGoogle, updatedUserProfile}= useContext(AuthContext)
    const [error, setError] = useState({})
    const navigate = useNavigate();

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
            updatedUserProfile({
                displayName: name, photoURL: photo})
            .then(()=>{
                navigate("/")
            })
            .catch(err=> err.message)
        })
        .catch(err => {
            toast.error(err.message, 'Registration failed')
        })
    }

    const handleGoogle=()=>{
        signInWithGoogle()
        .then(result=> {
            setUser(result.user)
            navigate(location?.state ? location.state : "/")
        })
        .catch(err =>{
            toast.error(err.message)
        })
    }

    return (
		<div className="hero bg-base-200 py-4">
			<Helmet>
				<title>Register | Filmverse</title>
			</Helmet>
			<div className="hero-content flex-col lg:flex-row-reverse">
				<div className="text-center lg:text-left md:w-[600px] w-[400px]">
					<Lottie animationData={registerAnim}></Lottie>
				</div>
				<div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
					<form onSubmit={handleSubmit} className="card-body">
						<h2 className="text-4xl font-semibold text-center mb-8">
							Register Now!
						</h2>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Name</span>
							</label>
							<input
								type="text"
								name="name"
								placeholder="name"
								className="input input-bordered"
								required
							/>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Photo url</span>
							</label>
							<input
								type="text"
								name="photo"
								placeholder="url"
								className="input input-bordered"
								required
							/>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Email</span>
							</label>
							<input
								type="email"
								name="email"
								placeholder="email"
								className="input input-bordered"
								required
							/>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Password</span>
							</label>
							<input
								type="password"
								name="password"
								placeholder="password"
								className="input input-bordered"
								required
							/>
						</div>
						<div className="form-control mt-6">
							<button className="btn btn-primary">
								Register
							</button>
						</div>
					</form>
					<p className="p-4">
						Have you an account? Please{" "}
						<NavLink to="/login">
							<strong className="text-blue-700 underline">
								Login
							</strong>
						</NavLink>
					</p>
					<p className="p-4">
						<button
							onClick={handleGoogle}
							className="btn btn-ghost"
						>
							Sign in with Google
						</button>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Register;