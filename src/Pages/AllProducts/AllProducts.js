import React from "react";
import SectionTop from "../../Components/SectionTop/SectionTop";
import Spinner from "../../Components/Spinner/Spinner";
import useTools from "../../Hooks/useTools";
import Tool from "../Home/Tool";

const AllProducts = () => {
    const { tools, isLoading } = useTools();
    if (isLoading) {
        return <Spinner />;
    }
    return (
        <section>
            <div className="container mx-auto">
                <SectionTop title={"All Tools"} paragraph={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."} />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
                    {tools.map((tool) => (
                        <Tool key={tool._id} tool={tool} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AllProducts;
