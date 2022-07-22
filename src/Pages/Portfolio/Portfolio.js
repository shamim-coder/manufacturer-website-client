import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faLinkedin, faGithub, faTwitter, faStackOverflow } from "@fortawesome/free-brands-svg-icons";

const Portfolio = () => {
    return (
        <section className="container mx-auto">
            <div className="sm:flex gap-10 my-10">
                <div className="relative profile-image mb-5">
                    <img className="sm:w-[200px] sm:h-[200px] object-cover shadow-lg p-2" src="https://i.ibb.co/gwNLD60/1649771387569.jpg" alt="" />
                </div>
                <div>
                    <h2 className="text-2xl font-semibold mb-1">Shamim Reza</h2>
                    <p className="capitalize">Front-end Web Developer</p>

                    <div className="mt-10">
                        <h4 className="text-xl mb-3">Connect with me </h4>
                        <div className="flex gap-4 text-xl">
                            <a className="tooltip tooltip-primary" data-tip="Facebook" href={"https://www.facebook.com/shamimreza.dev/"}>
                                <FontAwesomeIcon icon={faFacebookF} />
                            </a>

                            <a className="tooltip tooltip-primary" data-tip="LinkedIn" href={"https://www.linkedin.com/in/wpshamim/"}>
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>

                            <a className="tooltip tooltip-primary" data-tip="Github" href={"https://github.com/wpshamim"}>
                                <FontAwesomeIcon icon={faGithub} />
                            </a>

                            <a className="tooltip tooltip-primary" data-tip="Twitter" href={"https://twitter.com/wpshamim"}>
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                            <a className="tooltip tooltip-primary" data-tip="Stack Overflow" href={"https://stackoverflow.com/users/14978156/shamim-reza"}>
                                <FontAwesomeIcon icon={faStackOverflow} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-20 my-10">
                <div className="order-2 sm:order-1">
                    <div className="education mb-5">
                        <h3 className="mb-3 text-2xl font-semibold">Education</h3>
                        <div className="mb-5">
                            <h4>Secondary School Certificate</h4>
                            <p>2006</p>
                            <p>Humanities</p>
                        </div>

                        <div>
                            <h4>Higher Secondary Certificate</h4>
                            <p>2014</p>
                            <p>Statistic</p>
                        </div>
                    </div>
                    <div className="skill">
                        <h3 className="mb-3 text-2xl font-semibold">Skill</h3>

                        <div>
                            <h4>HTML5</h4>
                            <h4>JavaScript</h4>
                            <h4>React.js</h4>
                            <h4>Tailwind CSS</h4>
                            <h4>Node.js</h4>
                            <h4>Express js</h4>
                            <h4>mongoDB</h4>
                        </div>
                    </div>
                </div>
                <div className="order-1 sm:order-2">
                    <h3 className="mb-3 text-2xl font-semibold">Contact Information </h3>
                    <table className="mb-5">
                        <tbody>
                            <tr className="leading-loose">
                                <td className="w-28">Phone: </td>
                                <td>
                                    <a className="font-body text-blue-500" href={`tel:+:01718860139`}>
                                        +880 1718 860139
                                    </a>
                                </td>
                            </tr>

                            <tr className="leading-loose">
                                <td className="w-28">Address: </td>
                                <td>{"CB-10, Old Kachukhet Bazar, Dhaka Cantonment, Dhaka-1206"}</td>
                            </tr>

                            <tr className="leading-loose">
                                <td className="w-28">Email: </td>
                                <td>
                                    <a className="font-body text-blue-500" href={`mailto:wpshamim@gmail.com`}>
                                        {"wpshamim@gmail.com"}
                                    </a>
                                </td>
                            </tr>

                            <tr className="leading-loose">
                                <td className="w-28">Website: </td>
                                <td>
                                    <a className="font-body text-blue-500" href={`https://shamimreza.me`}>
                                        {"www.shamimreza.me"}
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <h3 className="mb-3 text-2xl font-semibold">Basic Information </h3>
                    <table>
                        <tbody>
                            <tr>
                                <td className="w-28">Birthday: </td>
                                <td>8th September 1991</td>
                            </tr>
                            <tr>
                                <td>Gender: </td>
                                <td>Male</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="my-14">
                <h3 className="mb-3 text-2xl font-semibold">Latest Project</h3>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    <div className="div">
                        <img src="https://i.ibb.co/gPFtjBc/Screenshot-2.png" alt="" />
                        <h2 className="text-2xl">Ema John Ecommerce</h2>
                        <p>
                            Live Url: <a href="https://ema-john-shamim.web.app/">https://ema-john-shamim.web.app</a>
                        </p>
                        <p>
                            Github Url: <a href="https://github.com/wpshamim">https://github.com/wpshamim</a>
                        </p>
                    </div>
                    <div className="div">
                        <img src="https://i.ibb.co/rFcRkXP/Screenshot-7.png" alt="" />
                        <h2 className="text-2xl">IGC Immigration</h2>
                        <p>
                            Live Url: <a href="https://igc-immigration.web.app/">https://igc-immigration.web.app</a>
                        </p>
                        <p>
                            Github Url: <a href="https://github.com/wpshamim">https://github.com/wpshamim</a>
                        </p>
                    </div>
                    <div className="div">
                        <img src="https://i.ibb.co/bHTT7S4/Screenshot-13.png" alt="" />
                        <h2 className="text-2xl">Hotel Booking Service</h2>
                        <p>
                            Live Url: <a href="https://hotel-booking-sk.web.app/">https://igc-immigration.web.app</a>
                        </p>
                        <p>
                            Github Url: <a href="https://github.com/wpshamim/hotel-specials-client">https://github.com/wpshamim</a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
