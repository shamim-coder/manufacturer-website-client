import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../Utilities/Firebase.init";
import StarRatings from "react-star-ratings";
import useReviews from "../../../Hooks/useReviews";

const AddReview = () => {
    const [loading, setLoading] = useState(false);
    const [ratingNumber, setRatingNumber] = useState(0);
    const [user] = useAuthState(auth);
    const { refetch } = useReviews();

    const handleRating = (newRating) => {
        setRatingNumber(newRating);
    };

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const handleAddReview = async (data) => {
        setLoading(true);
        if (!ratingNumber) {
            toast.error("Please set your rating number");
            setLoading(false);
            return;
        }
        const newReview = {
            ...data,
            email: user.email,
            image: user.photoURL,
            rating: ratingNumber,
        };

        const res = await fetch(`http://localhost:5000/review/${user.email}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(newReview),
        });
        const result = await res.json();

        if (result.acknowledged) {
            reset();
            setLoading(false);
            refetch();
            toast.success("Review Added Successfully");
            setRatingNumber(0);
        }
    };
    return (
        <section>
            <h2 className="text-4xl font-bold text-center my-10">Add Review</h2>
            <form className="md:w-8/12 lg:w-6/12 mx-auto mb-10" onSubmit={handleSubmit(handleAddReview)} action="">
                <div className="form-control mb-3">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input defaultValue={user.displayName} readOnly {...register("name", { required: { value: true, message: "Name is required" } })} type="text" placeholder="Your Name" className="read-only:bg-base-200 input input-bordered" />
                </div>
                <div className="form-control mb-3">
                    <label className="label">
                        <span className="label-text">Set your Rating</span>
                    </label>

                    <div className="flex items-center gap-5">
                        <StarRatings rating={ratingNumber} starRatedColor="#FEBC16" changeRating={handleRating} numberOfStars={5} name="rating" />
                        <span className="text-xl">({ratingNumber})</span>
                    </div>
                </div>
                <div className="form-control mb-3">
                    <label className="label">
                        <span className="label-text">Designation</span>
                    </label>
                    <input {...register("designation", { required: { value: true, message: "Designation is required" } })} type="text" placeholder="Your Designation" className="input input-bordered" />

                    {errors.designation?.type === "required" && <span className="label text-error text-sm">{errors.name.message}</span>}
                </div>
                <div className="form-control mb-3">
                    <label className="label">
                        <span className="label-text">Company Name</span>
                    </label>
                    <input {...register("company", { required: { value: true, message: "company is required" } })} type="text" placeholder="Your Company Name" className="input input-bordered" />

                    {errors.name?.type === "required" && <span className="label text-error text-sm">{errors.name.message}</span>}
                </div>

                <div className="form-control mb-3">
                    <label className="label">
                        <span className="label-text">Designation</span>
                    </label>
                    <textarea {...register("message", { required: { value: true, message: "Message is required" } })} placeholder="Your Message" className="textarea border-base-300" />

                    {errors.name?.type === "required" && <span className="label text-error text-sm">{errors.name.message}</span>}
                </div>

                <div className="form-control">
                    <button type="submit" className={`btn ${loading && "loading"} btn-primary`}>
                        Write a Review
                    </button>
                </div>
            </form>
        </section>
    );
};

export default AddReview;
