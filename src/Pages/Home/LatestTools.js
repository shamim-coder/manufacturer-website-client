import React from "react";
import SectionTop from "../../Components/SectionTop/SectionTop";
import Spinner from "../../Components/Spinner/Spinner";
import Tool from "./Tool";
import useTools from "../../Hooks/useTools";

const LatestTools = () => {
    const { tools, isLoading } = useTools();

    if (isLoading) {
        return <Spinner />;
    }

    return (
        <section className="bg-base-200/30 py-14">
            <div className="container mx-auto">
                <SectionTop title={"New Tools On Market"} paragraph={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."} />

                <div className="grid grid-cols-3 gap-10 my-10">
                    {tools.map((tool) => (
                        <Tool key={tool._id} tool={tool} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LatestTools;
