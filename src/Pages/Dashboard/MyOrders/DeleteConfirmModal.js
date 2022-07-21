import React from "react";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

const DeleteConfirmModal = ({ isDelete, refetch }) => {
    const { name, _id } = isDelete;

    const handleDelete = async (id) => {
        const res = await fetch(`http://localhost:5000/order/${id}`, {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        });

        const result = await res.json();

        if (result.deletedCount === 1) {
            refetch();
            toast.success(`${name} Deleted Successfully`);
        }
    };
    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle z-50">
                <div class="modal-box z-50 relative text-center py-10">
                    <label for="delete-confirm-modal" class="p-2 text-secondary cursor-pointer absolute right-2 top-2">
                        <FontAwesomeIcon className="text-xl text-accent" icon={faXmark} />
                    </label>

                    <FontAwesomeIcon className="text-7xl text-warning" icon={faExclamationCircle} />

                    <h3 class="font-medium text-4xl font-body my-10">Are you sure?</h3>

                    <p className="text-lg mb-8">
                        Do you really want to cancel these order <span className="font-medium">"{name}"</span>? This process cannot be undone.
                    </p>

                    <div class="flex justify-center gap-5">
                        <label for="delete-confirm-modal" class="btn btn-accent text-white px-10">
                            Cancel
                        </label>

                        <label for="delete-confirm-modal" onClick={() => handleDelete(_id)} class="btn btn-error text-white px-10 ">
                            Delete
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmModal;
