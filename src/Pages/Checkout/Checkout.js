import React, { useContext, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Utilities/Firebase.init";
import { useForm } from "react-hook-form";
import { OrderContext } from "../../App";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";

const Checkout = () => {
    const [user] = useAuthState(auth);
    const { orderInfo } = useContext(OrderContext);
    const [loading, setLoading] = useState(false);
    const { name, totalPrice, model, quantity, image } = orderInfo;
    const navigate = useNavigate();
    const orderDate = format(new Date(), "MM-dd-yyyy");

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        setLoading(true);
        const newOrderDetails = {
            ...orderInfo,
            ...data,
            orderDate,
            status: "unpaid",
        };

        try {
            const response = await fetch("https://dewalt-bd.herokuapp.com/order", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                },
                body: JSON.stringify(newOrderDetails),
            });

            const result = await response.json();

            if (result.insertedId) {
                setLoading(false);
                reset();
                toast.success("Order has been submitted successfully");
                navigate(`/order-confirm/${result.insertedId}`);
            }
        } catch (err) {
            setLoading(false);
            toast.error(err.message);
        }
    };

    return (
        <section className="py-20">
            <div className="container mx-auto flex justify-between gap-10">
                <div className="product-details w-full">
                    <h2 className="text-4xl font-semibold">Order Summery:</h2>
                    <div className="grid grid-cols-3 gap-10 mt-10 border p-5 items-center">
                        <img className="w-full" src={image} alt="" />
                        <div>
                            <h4 className="text-2xl mb-5">{name}</h4>
                            <p>Model: {model}</p>
                        </div>
                        <div>
                            <h4 className="text-2xl mb-5">
                                Total Price: <span className="font-body">${totalPrice}</span>
                            </h4>
                            <p className="text-xl">Quantity: {quantity}</p>
                        </div>
                    </div>
                </div>
                <div className="checkout-form w-8/12 shadow-lg">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input className="input input-bordered read-only:bg-gray-200" type="text" defaultValue={user?.displayName} readOnly placeholder="Your Name" {...register("username", { required: true })} />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>

                            <input defaultValue={user?.email} readOnly className="input input-bordered read-only:bg-gray-200" type="text" placeholder="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Mobile Number</span>
                            </label>
                            <input className="input input-bordered" type="tel" placeholder="Mobile number" {...register("mobile", { required: true, minLength: 6, maxLength: 12 })} />
                            {errors.mobile?.type === "required" && <span className="label text-error text-sm">Mobile Number is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Address</span>
                            </label>
                            <textarea placeholder="Street Address, City, Zip Code.." className="textarea border-spacing-2 border-gray-300" {...register("address", { required: true })} />
                            {errors.address?.type === "required" && <span className="label text-error text-sm">Address is required</span>}
                        </div>
                        <div className="form-control mt-6">
                            <button class={`btn btn-primary ${loading && "loading"}`}>Confirm Order</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Checkout;
