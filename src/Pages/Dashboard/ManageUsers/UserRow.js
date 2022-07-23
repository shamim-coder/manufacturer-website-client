import React from "react";
import { toast } from "react-toastify";

const UserRow = ({ user, index, refetch }) => {
    const { name, image, email, role } = user;

    const makeAdmin = async () => {
        const response = await fetch(`https://dewalt-bd.herokuapp.com/user/admin/${email}`, {
            method: "PUT",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        });
        if (response.status === 403) {
            toast.error("You are not authorized person to make an admin.");
        }
        const result = await response.json();

        if (result.modifiedCount > 0) {
            refetch();
            toast.success("Make an admin successfully!");
        }
    };
    return (
        <tr class={`${role === "admin" && "active"}`}>
            <th className="text-center">{index + 1}</th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={image} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>
                    </div>
                </div>
            </td>
            <td>{email}</td>
            <td className="text-center">
                {role === "admin" ? (
                    <div className="badge badge-primary text-base p-3 rounded-xl capitalize">{role}</div>
                ) : (
                    <button onClick={makeAdmin} className="btn btn-info text-white btn-xs px-3 rounded-xl">
                        Make an Admin
                    </button>
                )}
            </td>
        </tr>
    );
};

export default UserRow;
