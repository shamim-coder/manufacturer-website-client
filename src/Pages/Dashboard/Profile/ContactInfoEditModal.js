import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import FormControl from "../../../Components/FormControl/FormControl";
import auth from "../../../Utilities/Firebase.init";
import { toast } from "react-toastify";

const ContactInfoEditModal = ({ refetch, profile }) => {
    const [loading, setLoading] = useState(false);
    const [user] = useAuthState(auth);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const handleEditProfile = (data) => {
        console.log(data);
        setLoading(true);
        fetch(`https://dewalt-bd.herokuapp.com/update-user/${user.email}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
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
    };

    return (
        <div>
            <input type="checkbox" id="profile-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box p-10 relative">
                    <label htmlFor="profile-modal" className="btn btn-sm btn-circle absolute right-2 top-2">
                        ✕
                    </label>
                    <h2 className="text-2xl mb-5">Contact Information</h2>
                    <form className="" onSubmit={handleSubmit(handleEditProfile)}>
                        <FormControl register={register} defaultValue={profile?.phone} require={true} name="phone" errors={errors} label={"Phone Number"} type="text" />

                        <div className="form-control mb-3">
                            <label className="label">
                                <span className="label-text">Email Address</span>
                            </label>
                            <input
                                defaultValue={profile.email}
                                readOnly
                                {...register("email", { required: { value: true, message: "Email Address is required" } })}
                                type="email"
                                placeholder="Email Address"
                                className="input input-bordered read-only:bg-base-200"
                            />
                        </div>

                        <FormControl register={register} require={true} defaultValue={profile?.website} name="website" errors={errors} label={"Website"} type="text" />

                        <FormControl register={register} require={true} defaultValue={profile?.address} name="address" errors={errors} label={"Address"} type="textarea" />

                        <div className="form-control">
                            <button type="submit">
                                <label className={`w-full btn ${loading && "loading"} btn-primary`} htmlFor="profile-modal">
                                    Save
                                </label>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactInfoEditModal;
