import React from "react";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faExclamationCircle, faTrashCan } from "@fortawesome/free-solid-svg-icons";

const DeleteConfirmModal = ({ isDelete, refetch, path }) => {
    const { name, _id } = isDelete;

    const handleDelete = async (id) => {
        const res = await fetch(`https://dewalt-bd.herokuapp.com/${path}/${id}`, {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        });

        const result = await res.json();

        if (result.deletedCount === 1) {
            refetch();
            toast.success(`${name} is ${path === "product" ? "delete" : "canceled"} `);
        }
    };
    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle z-50">
                <div className="modal-box z-50 relative text-center py-10">
                    <label htmlFor="delete-confirm-modal" className="p-2 text-secondary cursor-pointer absolute right-2 top-2">
                        <FontAwesomeIcon className="text-xl text-accent" icon={faXmark} />
                    </label>

                    {path === "product" ? <FontAwesomeIcon className="text-7xl text-red-600" icon={faTrashCan} /> : <FontAwesomeIcon className="text-7xl text-warning" icon={faExclamationCircle} />}

                    <h3 className="font-medium text-4xl font-body my-10">Are you sure?</h3>

                    <p className="text-lg mb-8">
                        Do you really want to {path === "product" ? "Delete" : "Cancel"} these order <span className="font-medium">"{name}"</span>? This process cannot be undone.
                    </p>

                    <div className="flex justify-center gap-5">
                        <label htmlFor="delete-confirm-modal" className="btn btn-accent text-white px-10">
                            {path === "product" ? "Cancel" : "No"}
                        </label>

                        <label htmlFor="delete-confirm-modal" onClick={() => handleDelete(_id)} className="btn btn-error text-white px-10 ">
                            {path === "product" ? "Delete" : "Yes"}
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmModal;
