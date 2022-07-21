import React from "react";
import SectionTop from "../../Components/SectionTop/SectionTop";

const BusinessSummary = () => {
    return (
        <section className="business-summery py-14">
            <div className="container mx-auto">
                <SectionTop title={"Millions Business Trust Us"} paragraph="Try to understand user expectation" />

                <div className="grid grid-cols-4 my-10">
                    <div className="item text-center leading-loose">
                        <i class="fa-solid fa-flag text-6xl text-primary mb-5"></i>
                        <h2 className="text-5xl mb-5 font-bold">72</h2>
                        <p className="text-xl">Countries</p>
                    </div>

                    <div className="item text-center leading-loose">
                        <i class="fa-solid fa-hands-holding-circle text-6xl text-primary mb-5"></i>
                        <h2 className="text-5xl mb-5 font-bold">535+</h2>
                        <p className="text-xl">Complete Projects</p>
                    </div>
                    <div className="item text-center leading-loose">
                        <i class="fa-solid fa-users text-6xl text-primary mb-5"></i>
                        <h2 className="text-5xl mb-5 font-bold">273+</h2>
                        <p className="text-xl">Happy Clients</p>
                    </div>
                    <div className="item text-center leading-loose">
                        <i class="fa-solid fa-medal text-6xl text-primary mb-5"></i>
                        <h2 className="text-5xl mb-5 font-bold">432+</h2>
                        <p className="text-xl">Feedbacks</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BusinessSummary;
