import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../../Utilities/Firebase.init";
import { toast } from "react-toastify";

const UpdateProfileImage = ({ refetch, profile }) => {
    const [loading, setLoading] = useState(false);
    const [user] = useAuthState(auth);

    const imageStorageKey = "da74e5de36eb5bf4a767be72ae846820";

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const handleEditProfile = (data) => {
        setLoading(true);
        const image = data.image[0];
        const formData = new FormData();
        formData.append("image", image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: "POST",
            body: formData,
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.success) {
                    const image = result.data.url;
                    fetch(`https://dewalt-bd.herokuapp.com/update-user/${user.email}`, {
                        method: "PATCH",
                        headers: {
                            "content-type": "application/json",
                            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                        },
                        body: JSON.stringify({ image }),
                    })
                        .then((res) => res.json())
                        .then((data) => {
                            if (data.modifiedCount > 0) {
                                refetch();
                                setLoading(false);
                                reset();
                                toast.success("Profile Updated Successfully!");
                            } else {
                                toast.success("Failed to update profile");
                                setLoading(false);
                            }
                        });
                }
            });
    };

    return (
        <div>
            <input type="checkbox" id="profile-profile-picture" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box p-10 relative">
                    <label for="profile-profile-picture" className="btn btn-sm btn-circle absolute right-2 top-2">
                        ✕
                    </label>
                    <h2 className="text-2xl mb-5">Update Profile Picture</h2>
                    <form className="" onSubmit={handleSubmit(handleEditProfile)}>
                        <div className="form-control mb-3">
                            <label className="label">
                                <span className="label-text">Upload Image</span>
                            </label>
                            <input {...register("image", { required: { value: true, message: "Image is required" } })} type="file" className="input input-bordered" />

                            {errors.image?.type === "required" && <span className="label text-error text-sm">{errors.image.message}</span>}
                        </div>

                        <div className="form-control">
                            <label for="profile-profile-picture">
                                <button type="submit" className={`w-full btn ${loading && "loading"} btn-primary`}>
                                    Upload
                                </button>
                            </label>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfileImage;
