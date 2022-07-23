import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import FormControl from "../../../Components/FormControl/FormControl";
import auth from "../../../Utilities/Firebase.init";
import { toast } from "react-toastify";

const BasicInfoEditModal = ({ refetch, profile }) => {
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
            <input type="checkbox" id="basic-profile-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box p-10 relative">
                    <label htmlFor="basic-profile-modal" className="btn btn-sm btn-circle absolute right-2 top-2">
                        ✕
                    </label>
                    <h2 className="text-2xl mb-5">Contact Information</h2>
                    <form className="" onSubmit={handleSubmit(handleEditProfile)}>
                        <FormControl register={register} defaultValue={profile?.birthday} require={true} name="birthday" errors={errors} label={"Birthday"} type="text" />

                        <div className="form-control mb-3">
                            <label className="label">
                                <span className="label-text">Gender</span>
                            </label>
                            <div className="form-control">
                                <label className="label cursor-pointer justify-start gap-3">
                                    <input {...register("gender", { required: true })} type="radio" className="radio checked:bg-red-500" value="Male" checked />
                                    <span className="label-text">Male</span>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label cursor-pointer justify-start gap-3">
                                    <input {...register("gender", { required: true })} type="radio" className="radio checked:bg-blue-500" value="Female" />
                                    <span className="label-text">Female</span>
                                </label>
                            </div>
                        </div>

                        <div className="form-control">
                            <button type="submit">
                                <label className={`w-full btn ${loading && "loading"} btn-primary`} htmlFor="basic-profile-modal">
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

export default BasicInfoEditModal;
