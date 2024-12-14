import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";


const Login = () => {
    const { userLogin, setUser } = useContext(AuthContext)
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log('form sign in', email, password);
        userLogin(email, password)
        .then(result=>{
            setUser(result.user);
        })
        .catch(err =>{
            toast.error(err.message);
        })
    }

    return (
        <div className="hero bg-base-100 min-h-screen my-12">
            <div className="hero-content flex-col">
                <div className="text-center p-8 rounded-b-3xl bg-red-500">
                    <h1 className="text-5xl font-semibold text-white">Login now!</h1>
                </div>
                <div className="card bg-gray-300 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSubmit} className="card-body">
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
                            <button className="btn bg-red-500 text-white">Login</button>
                        </div>
                    </form>
                    <p className='p-4'>Don't have an account? Please <NavLink to="/register"><strong className='text-blue-700 underline'>Register</strong></NavLink></p>
                    <p><button className='btn btn-ghost'>Sign in with Google</button></p>
                </div>
            </div>
        </div>
    );
};

export default Login;