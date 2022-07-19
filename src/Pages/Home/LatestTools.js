import React from "react";
import SectionTop from "../../Components/SectionTop/SectionTop";
import tool1 from "../../Assets/DCD800B_1.jpg";
import tool2 from "../../Assets/DCE151B_1.jpg";
import tool3 from "../../Assets/DCE155D1_1.jpg";
import { Link } from "react-router-dom";

const LatestTools = () => {
    return (
        <section className="bg-base-200/30 py-14">
            <div className="container mx-auto">
                <SectionTop title={"New Products On Market"} paragraph={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."} />

                <div className="grid grid-cols-3 gap-10 my-10">
                    <div className="tool mb-5">
                        <div className=" bg-white relative">
                            <img className="border-2 border-gray-400 p-5" src={tool1} alt="" />
                            <span className="uppercase bg-primary px-2 py-1 text-secondary absolute top-[-15px] left-[15px] font-medium">NEW</span>
                        </div>
                        <h5 className="text-base text-accent mt-2">DCD800B</h5>
                        <div className="flex gap-10 justify-between mt-3">
                            <Link to={`/tool-details/${"id"}`}>
                                <h3 className="text-xl font-semibold transition hover:text-primary">20V MAX* XR® Brushless Cordless 1/2 in. Drill/Driver (Tool Only)</h3>
                            </Link>
                            <h3 className="text-2xl font-semibold">$199</h3>
                        </div>
                    </div>
                    <div className="tool mb-5">
                        <div className=" bg-white relative">
                            <img className="border-2 border-gray-400 p-5" src={tool2} alt="" />
                            <span className="uppercase bg-secondary px-2 py-1 text-white absolute top-[-15px] left-[15px] font-medium">sale</span>
                        </div>
                        <h5 className="text-base text-accent mt-2">DCD800B</h5>
                        <div className="flex gap-10 justify-between mt-3">
                            <Link to={`/tool-details/${"id"}`}>
                                <h3 className="text-xl font-semibold transition hover:text-primary">20V MAX* XR® Brushless Cordless 1/2 in. Drill/Driver (Tool Only)</h3>
                            </Link>
                            <h3 className="text-2xl font-semibold">$199</h3>
                        </div>
                    </div>
                    <div className="tool mb-5">
                        <div className=" bg-white relative">
                            <img className="border-2 border-gray-400 p-5" src={tool3} alt="" />
                            <span className="uppercase bg-accent px-2 py-1 text-white absolute top-[-15px] left-[15px] font-medium">Sold</span>
                        </div>
                        <h5 className="text-base text-accent mt-2">DCD800B</h5>
                        <div className="flex gap-10 justify-between mt-3">
                            <Link to={`/tool-details/${"id"}`}>
                                <h3 className="text-xl font-semibold transition hover:text-primary">20V MAX* XR® Brushless Cordless 1/2 in. Drill/Driver (Tool Only)</h3>
                            </Link>
                            <h3 className="text-2xl font-semibold">$199</h3>
                        </div>
                    </div>
                    <div className="tool mb-5">
                        <div className=" bg-white relative">
                            <img className="border-2 border-gray-400 p-5" src={tool1} alt="" />
                            <span className="uppercase bg-accent px-2 py-1 text-white absolute top-[-15px] left-[15px] font-medium">Sold</span>
                        </div>
                        <h5 className="text-base text-accent mt-2">DCD800B</h5>
                        <div className="flex gap-10 justify-between mt-3">
                            <Link to={`/tool-details/${"id"}`}>
                                <h3 className="text-xl font-semibold transition hover:text-primary">20V MAX* XR® Brushless Cordless 1/2 in. Drill/Driver (Tool Only)</h3>
                            </Link>
                            <h3 className="text-2xl font-semibold">$199</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LatestTools;
