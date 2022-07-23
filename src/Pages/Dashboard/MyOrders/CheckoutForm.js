import React, { useEffect, useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useForm } from "react-hook-form";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../Utilities/Firebase.init";

import "./Common.css";
import { format } from "date-fns";
import { Link } from "react-router-dom";

const CheckoutForm = ({ orderDetails, refetch }) => {
    const stripe = useStripe();
    const elements = useElements();

    const [user] = useAuthState(auth);
    const [cardError, setCardError] = useState("");
    const [success, setSuccess] = useState("");
    const [clientSecret, setClientSecret] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const paymentDate = format(new Date(), "MM-dd-yyyy");
    const { totalPrice, _id, mobile } = orderDetails;

    useEffect(() => {
        (async () => {
            const res = await fetch("http://localhost:5000/create-payment-intent", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                },
                body: JSON.stringify({ totalPrice }),
            });
            const data = await res.json();

            if (data?.clientSecret) {
                setClientSecret(data.clientSecret);
            }
        })();
    }, [totalPrice]);

    const { register, handleSubmit } = useForm();

    const handlePayment = async (data) => {
        if (!stripe || !elements) {
            return;
        }

        setIsLoading(true);

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card,
        });

        if (error) {
            setCardError(error.message);
            setSuccess("");
        } else {
            setCardError("");
        }

        // confirm payment
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    name: user.displayName,
                    email: user.email,
                    phone: mobile,
                },
            },
        });

        if (intentError) {
            setIsLoading(false);
            setCardError(intentError.message);
            setSuccess("");
        } else {
            console.log(paymentMethod);
            refetch();
            setCardError("");
            setSuccess(`Payment successfully complete, Your transaction ID:  ${paymentIntent.id}`);

            const paymentInfo = {
                amount: paymentIntent.amount / 100,
                transactionId: paymentIntent.id,
                email: user.email,
                mobile,
                userName: user.displayName,
                paymentDate,
                orderId: _id,
                paymentMethod: paymentMethod.type,
            };

            fetch(`http://localhost:5000/order/${_id}`, {
                method: "PATCH",
                headers: {
                    "content-type": "application/json",
                    authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                },
                body: JSON.stringify(paymentInfo),
            })
                .then((res) => res.json())
                .then((data) => {
                    setIsLoading(false);
                });
        }
    };

    return (
        <form onSubmit={handleSubmit(handlePayment)}>
            <div className="form-control mb-3">
                <label className="label">
                    <span className="label-text">Your Name</span>
                </label>
                <input defaultValue={user.displayName} readOnly {...register("name", { required: { value: true, message: "Name is required" } })} type="text" className="read-only:bg-base-200 input input-bordered" />
            </div>

            <div className="form-control mb-3">
                <label className="label">
                    <span className="label-text">Email Address</span>
                </label>
                <input defaultValue={user.email} readOnly {...register("email", { required: { value: true, message: "Email is required" } })} type="text" className="read-only:bg-base-200 input input-bordered" />
            </div>

            <div className="form-control mb-3">
                <label className="label">
                    <span className="label-text">Mobile</span>
                </label>
                <input defaultValue={mobile} readOnly {...register("mobile", { required: { value: true, message: "Mobile Number is required" } })} type="tel" className="read-only:bg-base-200 input input-bordered" />
            </div>

            <div className="form-control mb-3">
                <label className="label">
                    <span className="label-text text-lg">Card Details</span>
                </label>
                <CardElement
                    className="input input-bordered"
                    options={{
                        style: {
                            base: {
                                fontSize: "16px",
                                color: "#424770",
                                "::placeholder": {
                                    color: "#aab7c4",
                                },
                            },
                            invalid: {
                                color: "#9e2146",
                            },
                        },
                    }}
                />
                {cardError && <span className="label text-error text-sm">{cardError}</span>}
                {success && <span className="label text-success text-sm">{success}</span>}
            </div>

            <button className={`btn btn-primary ${isLoading && "loading"}`} type="submit" disabled={!stripe || success}>
                Pay ${orderDetails?.totalPrice}
            </button>
            {success && (
                <Link className="ml-3 text-red-400" to="/dashboard/my-orders">
                    Go to Order Page
                </Link>
            )}
        </form>
    );
};

export default CheckoutForm;
