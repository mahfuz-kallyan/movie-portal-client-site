import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
	const isAdmin = true;

	return (
		<div className="flex mx-auto">
			<div className="w-64 min-h-screen bg-sky-800 p-2 md:p-4 lg:p-6">
				<ul className="menu text-white text-lg font-medium">
					{isAdmin ? (
						<>
							<li>
								<NavLink to={"/dashboard/adminHome"}>
									Admin Home
								</NavLink>
							</li>
							<li>
								<NavLink to={"/dashboard/addItems"}>
									Add Items
								</NavLink>
							</li>
							<li>
								<NavLink to={"/dashboard/users"}>
									All Users
								</NavLink>
							</li>
						</>
					) : (
						<>
							<li>
								<NavLink to={"/dashboard/userHome"}>
									User Home
								</NavLink>
							</li>
							<li>
								<NavLink to={"/dashboard/review"}>
									Review
								</NavLink>
							</li>
							<li>
								<NavLink to={"/statistics"}>Statistics</NavLink>
							</li>
						</>
					)}
					<div className="divider"></div>
					{/* shared nav links */}
					<li>
						<NavLink to={"/"}>Home</NavLink>
					</li>
				</ul>
			</div>
			<div className="flex-1 p-2 md:p-4 lg:p-6">
				<Outlet></Outlet>
			</div>
		</div>
	);
};

export default Dashboard;
