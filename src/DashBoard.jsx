import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
	return (
		<div className="flex">
			<div className="w-64 min-h-screen bg-sky-800">
				<ul className="menu text-white text-lg font-medium">
					<li>
						<NavLink to={"/dashboard/userHome"}>User Home</NavLink>
					</li>
					<li>
						<NavLink to={"/dashboard/review"}>Review</NavLink>
					</li>
					<li>
						<NavLink to={"/statistics"}>Statistics</NavLink>
					</li>
					<div className="divider"></div>
					<li>
						<NavLink to={"/"}>Home</NavLink>
					</li>
				</ul>
			</div>
			<div className="flex-1">
				<Outlet></Outlet>
			</div>
		</div>
	);
};

export default Dashboard;
