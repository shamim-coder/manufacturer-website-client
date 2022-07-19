import React from "react";

const SectionTop = ({ title, paragraph }) => {
    return (
        <div className="section-top text-center py-5 lg:w-8/12 mx-auto">
            <h1 className="text-6xl font-bold mb-5">{title}</h1>
            <p className="text-lg lg:text-xl text-accent">{paragraph}</p>
        </div>
    );
};

export default SectionTop;
