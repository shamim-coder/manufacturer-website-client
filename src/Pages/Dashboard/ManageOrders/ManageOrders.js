import React, { useState } from "react";
import Spinner from "../../../Components/Spinner/Spinner";
import useOrders from "../../../Hooks/uesOrders";
import DeleteConfirmModal from "../MyOrders/DeleteConfirmModal";
import OrderRow from "./OrderRow";

const ManageOrders = () => {
    const { orders, isLoading, refetch } = useOrders();
    const [isDelete, setIsDelete] = useState(null);

    if (isLoading) {
        return <Spinner />;
    }

    return (
        <section className="pb-10">
            <h2 className="text-4xl font-bold text-center my-10 ">Manage All Orders</h2>
            <div className="overflow-x-auto w-full shadow-lg min-h-[550px]">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th className="text-center w-20 text-sm">SL</th>
                            <th className="text-sm">Order Details</th>
                            <th className="text-center text-sm">Order Date</th>
                            <th className="text-center text-sm">Quantity</th>
                            <th className="text-center text-sm">Total Price</th>
                            <th className="text-center text-sm">Order Status</th>
                            <th className="text-center text-sm">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order, index) => (
                            <OrderRow key={order._id} setIsDelete={setIsDelete} order={order} index={index} refetch={refetch} />
                        ))}
                    </tbody>
                </table>

                {isDelete && <DeleteConfirmModal isDelete={isDelete} refetch={refetch} path={"order"} />}
            </div>
        </section>
    );
};

export default ManageOrders;
