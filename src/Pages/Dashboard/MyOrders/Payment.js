import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../../../Components/Spinner/Spinner";
import { toast } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../Utilities/Firebase.init";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe("pk_test_51Ie0plISVl2W76LiBjinYiimzehXpCaZehT01TnGzcVZDf5O6gHgZjy1jCPrvRMwXiqdjNM9YnZ59skZWf5xZvy700xSGTBEu5");

const Payment = () => {
    const { id } = useParams();
    const [user] = useAuthState(auth);

    const {
        isLoading,
        error,
        data: orderDetails,
        refetch,
    } = useQuery(["orderDetails", id], async () => {
        const res = await fetch(`https://dewalt-bd.herokuapp.com/order/${id}`, {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        });
        return await res.json();
    });

    if (isLoading) {
        return <Spinner />;
    }
    if (error) {
        toast.error(error.message);
    }

    const { name, image, model, totalPrice, quantity, _id } = orderDetails;

    return (
        <div>
            <div className="mb-7 border-b-2 pb-5">
                <p className="text-lg mt-10 mb-3">
                    Hello, <strong>{user.displayName}</strong>
                </p>
                <p className="text-lg">
                    Please pay for your order <span className="badge badge-ghost badge-md">#{_id}</span>{" "}
                </p>
            </div>
            <div className="mx-auto grid grid-cols-2 justify-between gap-10">
                <div className="w-full">
                    <h2 className="text-2xl font-semibold">Order Summery:</h2>
                    <div className="md:flex gap-5 mt-5 border px-3 py-5 items-center">
                        <img className="md:w-5/12" src={image} alt="" />
                        <div>
                            <h4 className="text-2xl mb-2">{name}</h4>
                            <p className="badge badge-ghost badge-sm font-body mb-5">Model: {model}</p>
                            <h4 className="text-2xl mb-3">
                                Total Price: <span className="font-body">${totalPrice}</span>
                            </h4>
                            <h4 className="text-2xl mb-3">
                                Quantity: <span className="font-body">{quantity}</span>
                            </h4>
                        </div>
                    </div>
                </div>
                <div className="checkout-form w-8/12">
                    <h2 className="text-2xl font-semibold">Payment Details</h2>

                    <Elements stripe={stripePromise}>
                        <CheckoutForm orderDetails={orderDetails} refetch={refetch} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;
