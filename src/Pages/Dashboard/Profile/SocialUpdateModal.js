import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import FormControl from "../../../Components/FormControl/FormControl";
import auth from "../../../Utilities/Firebase.init";
import { toast } from "react-toastify";

const SocialUpdateModal = ({ refetch, profile }) => {
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
                    toast.error("Failed to update profile");
                    setLoading(false);
                }
            });
    };

    return (
        <div>
            <input type="checkbox" id="social-profile-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box p-10 relative">
                    <label htmlFor="social-profile-modal" className="btn btn-sm btn-circle absolute right-2 top-2">
                        ✕
                    </label>
                    <h2 className="text-2xl mb-5">Social Link Update</h2>
                    <form className="" onSubmit={handleSubmit(handleEditProfile)}>
                        <FormControl register={register} defaultValue={profile?.facebook} require={false} name="facebook" errors={errors} label={"Facebook Url"} type="text" />

                        <FormControl register={register} defaultValue={profile?.linkedin} require={false} name="linkedin" errors={errors} label={"Linkedin Url"} type="text" />

                        <FormControl register={register} defaultValue={profile?.github} require={false} name="github" errors={errors} label={"Github Url"} type="text" />

                        <FormControl register={register} defaultValue={profile?.twitter} require={false} name="twitter" errors={errors} label={"Twitter Url"} type="text" />

                        <FormControl register={register} defaultValue={profile?.stackOverflow} require={false} name="stackOverflow" errors={errors} label={"Stack Overflow Url"} type="text" />

                        <div className="form-control">
                            <button type="submit">
                                <label className={`w-full btn ${loading && "loading"} btn-primary`} htmlFor="social-profile-modal">
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

export default SocialUpdateModal;
