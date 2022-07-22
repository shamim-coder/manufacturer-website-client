import React from "react";
import SectionTop from "../../Components/SectionTop/SectionTop";

const services = [
    {
        id: 1,
        title: "Inovation model",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibhie.",
        serviceIcon: "house-chimney",
    },
    {
        id: 2,
        title: "New techonogy",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibhie.",
        serviceIcon: "road",
    },
    {
        id: 3,
        title: "Our expertise",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibhie.",
        serviceIcon: "screwdriver-wrench",
    },
    {
        id: 4,
        title: "100% Quality",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibhie.",
        serviceIcon: "magnet",
    },
];

const Services = () => {
    return (
        <section>
            <div className="container mx-auto py-14">
                <SectionTop title={"Our Services"} paragraph={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."} />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-10">
                    {services.map((service) => (
                        <div className="text-center" key={service.id}>
                            <i class={`fa-solid fa-${service.serviceIcon} mx-auto text-4xl bg-primary rounded-full h-24 w-24 flex justify-center items-center mb-5`}></i>
                            <h3 className="text-2xl font-semibold mb-5">{service.title}</h3>
                            <p className="text-accent">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
