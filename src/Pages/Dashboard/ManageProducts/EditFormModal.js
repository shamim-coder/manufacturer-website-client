import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const EditFormModal = () => {
    return (
        <div>
            <input type="checkbox" id="edit-confirm-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle z-50">
                <div className="modal-box z-50 relative text-center py-10">
                    <label htmlFor="edit-confirm-modal" className="p-2 text-secondary cursor-pointer absolute right-2 top-2">
                        <FontAwesomeIcon className="text-xl text-accent" icon={faXmark} />
                    </label>

                    <h3 className="font-medium text-4xl font-body my-10">Are you sure?</h3>

                    <p className="text-lg mb-8">Edit Product Will Implement after getting assignment mark. </p>

                    <div className="flex justify-center gap-5">
                        <label htmlFor="edit-confirm-modal" className="btn btn-primary  px-10">
                            Ok
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditFormModal;
