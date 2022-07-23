import { faCheck, faCheckCircle, faHandHoldingDollar, faHourglass, faTruckFast } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { toast } from "react-toastify";

const OrderRow = ({ order, index, refetch, setIsDelete }) => {
    const [isLoading, setIsLoading] = useState(false);
    const { name, orderDate, quantity, status, totalPrice, image, _id, paid, transactionId, email } = order;

    const handleChangeStatus = (statusText) => {
        setIsLoading(true);
        fetch(`https://dewalt-bd.herokuapp.com/order/status/${_id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify({ statusText }),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.modifiedCount) {
                    refetch();
                    setIsLoading(false);
                    toast.success(`Order status updated "${status}" to "${statusText}"`);
                } else {
                    toast.error(`Failed to change status of order"`);
                }
            });
    };

    return (
        <tr>
            <th className="border text-center">{index + 1}</th>
            <td className="w-3/12 border">
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={image} alt={name} />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name.split(" ").splice(0, 5).join(" ")}</div>
                        <div>
                            <small>User Email: {email}</small>
                        </div>
                        {paid && (
                            <span className="badge badge-primary badge-sm font-body">
                                <strong>Transaction Id:</strong> <span className="ml-2"> {transactionId} </span>
                            </span>
                        )}
                    </div>
                </div>
            </td>
            <td className="border text-center">{orderDate}</td>
            <td className="border text-center">{quantity}</td>
            <td className="border text-center">${totalPrice}</td>
            <td className={`border text-center capitalize`}>
                <div className={`badge text-white rounded-2xl p-3 ${status === "unpaid" ? "badge-error" : status === "Pending" ? "badge-info" : status === "Shipped" ? "badge-primary" : "badge-success"}`}>
                    <p>
                        {status === "unpaid" ? (
                            <>
                                {status} <FontAwesomeIcon icon={faHandHoldingDollar} />
                            </>
                        ) : status === "Pending" ? (
                            <>
                                {status} <FontAwesomeIcon icon={faHourglass} />
                            </>
                        ) : status === "Shipped" ? (
                            <>
                                {status} <FontAwesomeIcon icon={faTruckFast} />
                            </>
                        ) : (
                            <>
                                {status} <FontAwesomeIcon icon={faCheckCircle} />
                            </>
                        )}
                    </p>
                </div>
            </td>
            <td className="border text-center">
                {isLoading ? (
                    <button className="btn bg-transparent loading">Changing</button>
                ) : paid && status === "Pending" ? (
                    <button onClick={() => handleChangeStatus("Shipped")} className="text-primary">
                        Make Shipped
                    </button>
                ) : paid && status === "Shipped" ? (
                    <button onClick={() => handleChangeStatus("Completed")} className="text-success">
                        Make Complete
                    </button>
                ) : paid && status === "Completed" ? (
                    <p className="text-success">
                        <FontAwesomeIcon icon={faCheckCircle} /> Delivered{" "}
                    </p>
                ) : (
                    <label className="text-error cursor-pointer" onClick={() => setIsDelete(order)} htmlFor="delete-confirm-modal">
                        Cancel Order
                    </label>
                )}
            </td>
        </tr>
    );
};

export default OrderRow;
