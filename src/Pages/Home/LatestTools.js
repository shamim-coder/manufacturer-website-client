import React from "react";
import SectionTop from "../../Components/SectionTop/SectionTop";
import Spinner from "../../Components/Spinner/Spinner";
import Tool from "./Tool";
import useTools from "../../Hooks/useTools";
import { useNavigate } from "react-router-dom";

const LatestTools = () => {
    const { tools, isLoading } = useTools();
    const navigate = useNavigate();

    if (isLoading) {
        return <Spinner />;
    }

    return (
        <section className="bg-base-200/30 py-14">
            <div className="container mx-auto">
                <SectionTop title={"New Tools On Market"} paragraph={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."} />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
                    {tools.slice(0, 6).map((tool) => (
                        <Tool key={tool._id} tool={tool} />
                    ))}
                </div>
            </div>
            <button onClick={() => navigate("/all-products")} className="btn btn-primary mx-auto block px-10">
                See All Products
            </button>
        </section>
    );
};

export default LatestTools;
