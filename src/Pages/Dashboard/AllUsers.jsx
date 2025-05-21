import { useQuery, useQueryClient } from "@tanstack/react-query";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
	const queryClient = useQueryClient();

	const {
		data: users = [],
		isLoading,
        error,
        refetch
	} = useQuery({
		queryKey: ["users"],
		queryFn: async () => {
			const res = await fetch("http://localhost:5000/users");
			if (!res.ok) throw new Error("Failed to fetch users");
			return res.json();
		},
	});

	const handleDelete = (user) => {
		Swal.fire({
			title: "Are you sure?",
			text: `You are about to delete ${user.name}`,
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
		}).then(async (result) => {
			if (result.isConfirmed) {
                const res = await fetch(`http://localhost:5000/users/${user._id}`,
					{
						method: "DELETE",
					}
				);
				const data = await res.json();

                if (data.deletedCount > 0) {
                    refetch();
					Swal.fire({
						title: "Deleted!",
						icon: "success",
						draggable: true,
					});
				}
			}
		});
	};

	if (isLoading)
		return <span className="loading loading-bars loading-lg"></span>;
	if (error) return <p>Error: {error.message}</p>;

	return (
		<div>
			<h2 className="text-4xl font-semibold text-center underline text-sky-800">
				All Users
			</h2>
			<div className="mt-6">
				<div className="overflow-x-auto">
					<table className="table table-zebra w-full">
						<thead>
							<tr>
								<th>No.</th>
								<th>Name</th>
								<th>Email</th>
								<th>Role</th>
								<th>Actions</th>
							</tr>
						</thead>
						<tbody>
							{users.map((user, index) => (
								<tr key={user._id}>
									<th>{index + 1}</th>
									<td>{user.name}</td>
									<td>{user.email}</td>
									<td>
										<button className="py-2 px-2 rounded-md bg-sky-500 hover:bg-sky-600 text-white font-medium shadow-md hover:shadow-lg transition duration-300">
											<FaUsers className="text-xl" />
										</button>
									</td>
									<td>
										<button
											onClick={() => handleDelete(user)}
											className="py-2 px-2 rounded-md bg-red-700 hover:bg-red-800 text-white font-medium shadow-md hover:shadow-lg transition duration-300"
										>
											<FaTrashAlt className="text-xl" />
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default AllUsers;
