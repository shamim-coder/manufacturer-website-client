import React from "react";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProductRow = ({ product, index, setDeleteProduct, setEditConfirm }) => {
    const { name, price, availableStock, minimumQuantity, issueDate, _id } = product;

    return (
        <tr>
            <th className="text-center">{index + 1}</th>
            <td>{name.split(" ").slice(0, 5).join(" ")}</td>
            <td className="text-center">{issueDate}</td>
            <td className="text-center">{availableStock}</td>
            <td className="text-center">{minimumQuantity}</td>
            <td className="text-center">${price}</td>
            <td className="text-center">
                <label className="btn hover:bg-red-400 no-animation bg-red-500 text-white border-0 btn-sm mr-2" onClick={() => setDeleteProduct(product)} for="delete-confirm-modal">
                    <FontAwesomeIcon icon={faTrash} />
                </label>
                <label className="btn hover:text-white no-animation bg-primary text-secondary border-0 btn-sm mr-2" onClick={() => setEditConfirm({ _id })} for="edit-confirm-modal">
                    <FontAwesomeIcon icon={faEdit} />
                </label>
            </td>
        </tr>
    );
};

export default ProductRow;
