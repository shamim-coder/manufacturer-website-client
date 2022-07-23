import { format } from "date-fns/esm";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useProfile from "../../Hooks/useProfile";

const Tool = ({ tool }) => {
    const navigate = useNavigate();
    const { profile } = useProfile();
    const { price, name, model, image, availableStock, minimumQuantity, issueDate, _id } = tool;

    const today = format(new Date(), "MM-dd-yyyy");

    return (
        <div className="mb-5">
            <div className="relative">
                <span
                    className={`uppercase ${availableStock < minimumQuantity ? "bg-gray-300 text-gray-700" : today === issueDate ? "bg-primary text-secondary" : "bg-secondary text-white"} px-2 py-1 absolute top-[-15px] left-[15px] font-medium z-50`}
                >
                    {availableStock < minimumQuantity ? "SOLD" : today === issueDate ? "NEW" : "SALE"}
                </span>
                <div className=" bg-white relative tool transition overflow-hidden">
                    <img className="border-2 border-gray-400 p-5" src={image} alt="" />

                    <button onClick={() => navigate(`/tool-details/${_id}`)} className="transition buy-now btn btn-primary w-full">
                        {profile?.role === "admin" ? "See Details" : availableStock < minimumQuantity ? "See Details" : "Buy Now"}
                    </button>
                </div>
            </div>
            <h5 className="text-base text-accent mt-2">{model}</h5>
            <div className="flex gap-10 justify-between mt-3">
                <Link to={`/tool-details/${_id}`}>
                    <h3 className="text-xl font-semibold transition hover:text-primary">{name}</h3>
                </Link>
                <h3 className="text-2xl font-semibold">${price}</h3>
            </div>
        </div>
    );
};

export default Tool;
