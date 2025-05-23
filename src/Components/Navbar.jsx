import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import logo from '../assets/icons/icons8-documents-32.png'


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const links = <>
        <li className="text-white"><NavLink to="/">Home</NavLink></li>
        <li className="text-white"><NavLink to="/movies">All Movies</NavLink></li>
        <li className="text-white"><NavLink to="/addMovies">Add Movies</NavLink></li>
        <li className="text-white"><NavLink to="/favorites">My Favorites</NavLink></li>
        <li className="text-white"><NavLink to="/dashboard">Dashboard</NavLink></li>
    </>
    return (
		<div className="max-w-[1920px] mx-auto bg-gradient-to-r from-sky-600 to-sky-900 lg:px-8 sticky top-0 z-50 backdrop-filter backdrop-blur-sm bg-opacity-80 p-2">
			<div className="navbar flex flex-col md:flex-row justify-between justify-items-center ">
				<div>
					<div className="dropdown">
						<div
							tabIndex={0}
							role="button"
							className="btn btn-ghost text-white lg:hidden"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h8m-8 6h16"
								/>
							</svg>
						</div>
						<ul
							tabIndex={0}
							className="bg-sky-600 menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow gap-2"
						>
							{links}
						</ul>
					</div>
					<div className="flex justify-center items-center">
						<img src={logo} alt="" />
						<a className="text-3xl font-semibold shadow-sm p-1 rounded-lg text-white">
							<span className="text-4xl">F</span>ilm
							<span className="text-4xl">V</span>erse
						</a>
					</div>
				</div>
				<div className="navbar-center hidden lg:flex">
					<ul className="menu menu-horizontal p-1 gap-2">{links}</ul>
				</div>

				<div className=" gap-1 md:gap-3">
					<div>
						<input
							type="checkbox"
							value="dark"
							className="toggle theme-controller"
						/>
					</div>
					{user && (
						<div className="mb-2">
							<img
								className="w-12 h-12 rounded-full mb-2 relative translate-y-1"
								src={user?.photoURL}
								alt="User Photo"
							/>
							<div className="absolute left-0 bottom-[-30px] hidden group-hover:block bg-gray-700 text-white text-sm rounded px-2 py-1">
								{user?.displayName}
							</div>
						</div>
					)}
					{user && user.email ? (
						<button
							onClick={logOut}
							className="py-2 px-6 rounded-md bg-red-500 hover:bg-red-800-600 text-white font-semibold shadow-md hover:shadow-lg focus:outline-none transition duration-300"
						>
							Logout
						</button>
					) : (
						<Link
							to="/login"
							className="py-2 px-6 rounded-md bg-sky-400 hover:bg-sky-600 text-white font-semibold shadow-md hover:shadow-lg focus:outline-none transition duration-300"
						>
							Login
						</Link>
					)}
					<Link
						to="/register"
						className="py-2 px-6 rounded-md bg-sky-400 hover:bg-sky-600 text-white font-semibold shadow-md hover:shadow-lg focus:outline-none transition duration-300"
					>
						Register
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Navbar;