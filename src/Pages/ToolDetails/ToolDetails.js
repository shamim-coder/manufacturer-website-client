import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { OrderContext } from "../../App";

const ToolDetails = () => {
    const { setOrderInfo } = useContext(OrderContext);
    const { id } = useParams();
    const [tool, setTool] = useState({});
    const navigate = useNavigate();

    const { image, name, price, model, description, availableStock, minimumQuantity, category, weight, dimensions, loadSpeed } = tool;

    const [quantity, setQuantity] = useState(minimumQuantity);

    useEffect(() => {
        (async () => {
            const res = await axios.get(`http://localhost:5000/tool/${id}`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                },
            });
            setTool(res.data);
            setQuantity(minimumQuantity);
        })();
    }, [id, minimumQuantity]);

    const handleCheckout = async () => {
        const newOrderInfo = {
            productId: id,
            name,
            totalPrice: price * quantity,
            model,
            quantity,
            image,
        };
        await setOrderInfo(newOrderInfo);
        navigate(`/checkout/${id}`);
    };

    const increaseQnt = () => {
        if (quantity >= minimumQuantity && quantity < availableStock) {
            setQuantity(quantity + 1);
        } else {
            toast.error("your quantity getter then available stock");
            console.log("your quantity getter then available stock");
        }
    };

    const decreaseQnt = () => {
        if (quantity > minimumQuantity) {
            setQuantity(quantity - 1);
        } else {
            toast.error("your quantity less then minimum quantity");
            console.log("your quantity less then minimum quantity");
        }
    };

    return (
        <section className="bg-gray-100">
            <div className="container mx-auto grid grid-cols-2 gap-10">
                <div className="left bg-white shadow-lg p-14 my-14">
                    <img className="w-full" src={image} alt="" />
                </div>
                <div className="my-14">
                    <h1 className="text-4xl font-semibold text-secondary">{name}</h1>
                    <p className="text-lg mt-2">Model: {model}</p>
                    <h2 className="text-4xl font-semibold text-secondary mt-7">${price}</h2>
                    <p className="mt-7 leading-relaxed text-accent">{description}</p>

                    <div className="flex gap-10 my-10">
                        {availableStock === 0 ? (
                            <div class="alert alert-error shadow-lg">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span>Stock Not Available</span>
                                </div>
                            </div>
                        ) : availableStock < minimumQuantity ? (
                            <div class="alert alert-warning shadow-lg">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                    </svg>
                                    <span>Warning: Enough Quantity not available of this product.</span>
                                </div>
                            </div>
                        ) : (
                            <>
                                <div class="mkd-quantity-buttons quantity flex gap-1">
                                    <input className="w-14 py-3 text-xl text-center" type="text" name="quantity" defaultValue={quantity} />
                                    <div className="flex-col flex gap-1">
                                        <button onClick={increaseQnt} className="hover:bg-primary transition bg-white h-full px-3">
                                            +
                                        </button>
                                        <button onClick={decreaseQnt} className="hover:bg-primary transition bg-white h-full px-3">
                                            -
                                        </button>
                                    </div>
                                </div>
                                <button onClick={handleCheckout} className="btn btn-primary h-14 px-10">
                                    Buy Now
                                </button>
                            </>
                        )}
                    </div>

                    <p className="mb-3">
                        Available Stock: <span className="text-accent">{availableStock} </span>
                    </p>
                    <p className="mb-3">
                        Minimum Order Quantity: <span className="text-accent">{minimumQuantity} </span>
                    </p>
                    <p className="mb-3">
                        Category: <span className="text-accent">{category} </span>
                    </p>

                    <div>
                        <h3 className="text-2xl mb-3">Specifications: </h3>
                        <div class="overflow-x-auto rounded-none">
                            <table class="table w-full rounded-none">
                                <tbody>
                                    <tr>
                                        <td>Damnation</td>
                                        <td>: </td>
                                        <td>{dimensions}</td>
                                    </tr>

                                    <tr class="active">
                                        <td>loadSpeed </td>
                                        <td>:</td>
                                        <td>{loadSpeed}</td>
                                    </tr>

                                    <tr>
                                        <td>Product Weight</td>
                                        <td>:</td>
                                        <td>{weight}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ToolDetails;
