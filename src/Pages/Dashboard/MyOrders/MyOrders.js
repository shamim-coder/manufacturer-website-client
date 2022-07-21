import React, { useState } from "react";
import Spinner from "../../../Components/Spinner/Spinner";
import useMyOrders from "../../../Hooks/useMyOrders";
import DeleteConfirmModal from "./DeleteConfirmModal";
import OrderTable from "./OrderTable";

const MyOrders = () => {
    const { myOrders, isLoading, refetch } = useMyOrders();
    const [isDelete, setIsDelete] = useState(null);

    if (isLoading) {
        return <Spinner />;
    }

    return (
        <section>
            <h2 className="text-4xl font-bold text-center my-10">Manage My Orders</h2>
            <div class="overflow-x-auto w-full shadow-lg min-h-[350px]">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th className="text-base text-center w-1/12">SL</th>
                            <th className="text-base w-5/12">Product Details</th>
                            <th className="text-base text-center w-2/12">Price</th>
                            <th className="text-base text-center w-1/12">Quantity</th>
                            <th className="text-base w-2/12 text-center">Status</th>
                            <th className="text-base w-1/12 text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>{myOrders && myOrders.map((order, index) => <OrderTable key={order?._id} order={order} index={index} setIsDelete={setIsDelete} />)}</tbody>
                </table>
            </div>
            {isDelete && <DeleteConfirmModal isDelete={isDelete} refetch={refetch} />}
        </section>
    );
};

export default MyOrders;
