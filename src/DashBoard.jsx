import { useState } from "react";
import {
	FaBars,
	FaTimes,
	FaBarcode,
	FaChartBar,
	FaHome,
	FaSatellite,
	FaUsers,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
	const isAdmin = true;
	const [isSidebarOpen, setSidebarOpen] = useState(false);

	const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
	const closeSidebar = () => setSidebarOpen(false);

	return (
		<div className="flex flex-col md:flex-row min-h-screen">
			{/* Mobile Nav Toggle */}
			<div className="md:hidden bg-sky-800 p-4 flex items-center justify-between text-white">
				<h1 className="text-xl font-bold">Dashboard</h1>
				<button onClick={toggleSidebar}>
					{isSidebarOpen ? (
						<FaTimes size={24} />
					) : (
						<FaBars size={24} />
					)}
				</button>
			</div>

			{/* Sidebar */}
			<div
				className={`bg-sky-800 text-white w-full md:w-2/12 p-4 md:block ${
					isSidebarOpen ? "block" : "hidden"
				}`}
			>
				<ul className="menu text-lg font-medium space-y-2">
					{isAdmin ? (
						<>
							<li>
								<NavLink
									to="/dashboard/users"
									onClick={closeSidebar}
								>
									<FaUsers /> All Users
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/dashboard/statistics"
									onClick={closeSidebar}
								>
									<FaChartBar /> Statistics
								</NavLink>
							</li>
						</>
					) : (
						<>
							<li>
								<NavLink
									to="/dashboard/userHome"
									onClick={closeSidebar}
								>
									User Home
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/dashboard/review"
									onClick={closeSidebar}
								>
									Review
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/dashboard/statistics"
									onClick={closeSidebar}
								>
									Statistics
								</NavLink>
							</li>
						</>
					)}

					{/* Shared Nav */}
					<div className="divider"></div>
					<li>
						<NavLink to="/" onClick={closeSidebar}>
							<FaHome /> Home
						</NavLink>
					</li>
				</ul>
			</div>

			{/* Main Content */}
			<div className="flex-1 p-4 md:p-8">
				<Outlet />
			</div>
		</div>
	);
};

export default Dashboard;
