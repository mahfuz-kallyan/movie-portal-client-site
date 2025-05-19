
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
	const isAdmin = true;

	return (
		<div className="flex mx-auto">
			<div className="md:w-2/12 min-h-screen bg-sky-800 p-2 md:p-4 lg:p-6">
				<ul className="menu text-white text-lg font-medium space-y-2">
					{isAdmin ? (
						<>
							<li>
								<NavLink to={"/dashboard/users"}>
									All Users
								</NavLink>
							</li>
							<li>
								<NavLink to={"/dashboard/statistics"}>
									Statistics
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
								<NavLink to={"/dashboard/statistics"}>
									Statistics
								</NavLink>
							</li>
						</>
					)}

					{/* shared nav links */}
					<div className="divider"></div>
					<li>
						<NavLink to={"/"}>Home</NavLink>
					</li>
				</ul>
			</div>
			<div className="flex-1 p-4 md:p-8 min-h-screen">
				<Outlet></Outlet>
			</div>
		</div>
	);
};

export default Dashboard;
