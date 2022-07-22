import React, { useState } from "react";
import Spinner from "../../../Components/Spinner/Spinner";
import useTools from "../../../Hooks/useTools";
import ProductRow from "./ProductRow";
import "./ManageProduct.css";
import DeleteConfirmModal from "../MyOrders/DeleteConfirmModal";
import EditFormModal from "./EditFormModal";

const ManageProducts = () => {
    const { tools: products, isLoading, refetch } = useTools();
    const [deleteProduct, setDeleteProduct] = useState(null);
    const [editConfirm, setEditConfirm] = useState(null);

    if (isLoading) {
        return <Spinner />;
    }

    return (
        <section>
            <h2 className="text-4xl font-bold text-center my-10">Manage All Products</h2>
            <div className="overflow-x-auto">
                <table className="product-table table w-full">
                    <thead>
                        <tr>
                            <th className="text-center text-sm">SL</th>
                            <th className="text-sm">Name</th>
                            <th className="text-center text-sm">Issue Date</th>
                            <th className="text-center text-sm">
                                Available <br /> Stock
                            </th>
                            <th className="text-center text-sm">
                                Minimum <br /> Quantity
                            </th>
                            <th className="text-center text-sm">Price</th>
                            <th className="text-center text-sm">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => (
                            <ProductRow key={product._id} product={product} index={index} setDeleteProduct={setDeleteProduct} setEditConfirm={setEditConfirm} />
                        ))}
                    </tbody>
                </table>
            </div>
            {deleteProduct && <DeleteConfirmModal path={"product"} isDelete={deleteProduct} refetch={refetch} />}
            {editConfirm && <EditFormModal />}
        </section>
    );
};

export default ManageProducts;
