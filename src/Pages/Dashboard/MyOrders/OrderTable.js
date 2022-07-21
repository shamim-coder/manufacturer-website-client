import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";

const OrderTable = ({ order, index, setIsDelete }) => {
    const navigate = useNavigate();
    const { status } = order;
    return (
        <>
            <tr>
                <th className="text-center border">{index + 1}</th>
                <td className="border">
                    <div class="flex items-center space-x-3">
                        <div class="avatar">
                            <div class="mask mask-squircle w-12 h-12">
                                <img src={order?.image} alt="product" />
                            </div>
                        </div>
                        <div>
                            <Link to={`/tool-details/${order?.productId}`} class="font-bold hover:underline transition">
                                {order?.name}
                            </Link>
                            <br />
                            <span class="badge badge-ghost badge-sm font-body">Model: {order?.model}</span> <br />
                            {order?.paid && (
                                <span class="badge badge-primary badge-sm font-body">
                                    <strong>Transaction Id:</strong> <span className="ml-2"> {order?.transactionId} </span>
                                </span>
                            )}
                        </div>
                    </div>
                </td>
                <td className="border text-center">${order?.totalPrice}</td>
                <td className="border text-center">{order?.quantity}</td>
                <td className={`border text-center`}>
                    <div class={`badge text-white rounded-2xl p-3 ${status === "unpaid" ? "badge-error" : status === "Pending" ? "badge-info" : status === "Shipped" ? "badge-primary" : "badge-success"}`}>{status}</div>
                </td>

                {!order?.paid ? (
                    <td className="border text-center">
                        <div class="dropdown dropdown-end">
                            <label tabindex="0" class="m-1 cursor-pointer">
                                <FontAwesomeIcon className="text-3xl" icon={faEllipsisVertical} />
                            </label>
                            <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <button onClick={() => navigate(`payment/${order?._id}`)}>Pay Now</button>
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
