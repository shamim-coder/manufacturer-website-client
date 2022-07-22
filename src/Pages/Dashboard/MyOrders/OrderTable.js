import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";

const OrderTable = ({ order, index, setIsDelete }) => {
    const navigate = useNavigate();
    const { name, status, _id, image, productId, model, transactionId, paid, totalPrice, quantity } = order;
    return (
        <>
            <tr>
                <th className="text-center border">{index + 1}</th>
                <td className="border">
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={image} alt="product" />
                            </div>
                        </div>
                        <div>
                            <Link to={`/tool-details/${productId}`} className="font-bold hover:underline transition">
                                {name}
                            </Link>
                            <br />
                            <span className="badge badge-ghost badge-sm font-body">Model: {model}</span> <br />
                            {paid && (
                                <span className="badge badge-primary badge-sm font-body">
                                    <strong>Transaction Id:</strong> <span className="ml-2"> {transactionId} </span>
                                </span>
                            )}
                        </div>
                    </div>
                </td>
                <td className="border text-center">${totalPrice}</td>
                <td className="border text-center">{quantity}</td>
                <td className={`border text-center`}>
                    <div class={`badge text-white rounded-2xl p-3 ${status === "unpaid" ? "badge-error" : status === "Pending" ? "badge-info" : status === "Shipped" ? "badge-primary" : "badge-success"}`}>{status}</div>
                </td>

                {!paid ? (
                    <td className="border text-center">
                        <div className="dropdown dropdown-end">
                            <label tabindex="0" className="m-1 cursor-pointer">
                                <FontAwesomeIcon className="text-3xl" icon={faEllipsisVertical} />
                            </label>
                            <ul tabindex="0" className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <button onClick={() => navigate(`payment/${_id}`)}>Pay Now</button>
                                </li>
                                <li>
                                    <label onClick={() => setIsDelete(order)} for="delete-confirm-modal">
                                        Cancel Order
                                    </label>
                                </li>
                            </ul>
                        </div>
                    </td>
                ) : (
                    <td className="border text-center text-success">Paid</td>
                )}
            </tr>
        </>
    );
};

export default OrderTable;
