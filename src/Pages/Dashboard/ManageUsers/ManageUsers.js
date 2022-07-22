import React from "react";
import Spinner from "../../../Components/Spinner/Spinner";
import useUsers from "../../../Hooks/useUsers";
import UserRow from "./UserRow";

const ManageUsers = () => {
    const { users, isLoading, refetch } = useUsers();

    if (isLoading) {
        return <Spinner />;
    }

    return (
        <section>
            <h2 className="text-4xl font-bold text-center my-10">Manage Users</h2>
            <div className="overflow-x-auto w-full shadow-lg">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th className="text-center w-20 text-sm">SL</th>
                            <th className="text-sm">User</th>
                            <th className="text-sm">Email</th>
                            <th className="text-center text-sm">Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <UserRow key={user._id} user={user} index={index} refetch={refetch} />
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default ManageUsers;
