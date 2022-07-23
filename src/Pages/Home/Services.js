import React from "react";
import SectionTop from "../../Components/SectionTop/SectionTop";

const services = [
    {
        id: 1,
        title: "Innovation That Matters",
        description: "DEWALT® is out there on the jobsite learning what works and what doesn’t so we can make it all work better.",
        serviceIcon: "house-chimney",
    },
    {
        id: 2,
        title: "Sustainability",
        description: "At DEWALT, we are relentlessly developing and delivering packaging, products, and programs.",
        serviceIcon: "road",
    },
    {
        id: 3,
        title: "Jobsite Solutions",
        description: "The jobsite is where you’ll find our products.It’s where we test them, where they’re used.",
        serviceIcon: "screwdriver-wrench",
    },
    {
        id: 4,
        title: "Invention Submission",
        description: "We can only consider your ideas and inventions if you submit them via the link below.",
        serviceIcon: "magnet",
    },
];

const Services = () => {
    return (
        <section>
            <div className="container mx-auto py-14">
                <SectionTop title={"Our Services"} paragraph={"See why millions of professionals choose DEWALT. From our rich history and proven performance to our focus on innovation and technology."} />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-10">
                    {services.map((service) => (
                        <div className="text-center" key={service.id}>
                            <i className={`fa-solid fa-${service.serviceIcon} mx-auto text-4xl bg-primary rounded-full h-24 w-24 flex justify-center items-center mb-5`}></i>
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
