import React from "react";
import SectionTop from "../../Components/SectionTop/SectionTop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebookF, faGooglePlusG, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import team1 from "../../Assets/teams/team1.jpg";
import team2 from "../../Assets/teams/team2.jpg";
import team3 from "../../Assets/teams/team3.jpg";
import team4 from "../../Assets/teams/team4.jpg";

const OurTeam = () => {
    return (
        <section className="md:py-14 py-5">
            <div className="container mx-auto">
                <SectionTop title={"Our Team"} paragraph="With over 100 years of combined experience, we've got well-seasoned team at the helm." />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:md:grid-cols-4 gap-10 py-10">
                    <div className="team">
                        <div className="overflow-hidden mb-3">
                            <img className="hover:scale-110 ease-in-out duration-700" src={team1} alt="" />
                        </div>
                        <h3 className="text-2xl font-semibold mb-2">Jason Rice</h3>
                        <p className="text-lg text-primary mb-2">Founder</p>
                        <div className="flex gap-3">
                            <a className="hover:text-primary transition" href="https://twitter.com">
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                            <a className="hover:text-primary transition" href="https://twitter.com">
                                <FontAwesomeIcon icon={faFacebookF} />
                            </a>
                            <a className="hover:text-primary transition" href="https://twitter.com">
                                <FontAwesomeIcon icon={faGooglePlusG} />
                            </a>
                            <a className="hover:text-primary transition" href="https://twitter.com">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                        </div>
                    </div>
                    <div className="team">
                        <div className="overflow-hidden mb-3">
                            <img className="hover:scale-110 ease-in-out duration-700" src={team2} alt="" />
                        </div>
                        <h3 className="text-2xl font-semibold mb-2">Russell Ford</h3>
                        <p className="text-lg text-primary mb-2">CEO</p>
                        <div className="flex gap-3">
                            <a className="hover:text-primary transition" href="https://twitter.com">
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                            <a className="hover:text-primary transition" href="https://twitter.com">
                                <FontAwesomeIcon icon={faFacebookF} />
                            </a>
                            <a className="hover:text-primary transition" href="https://twitter.com">
                                <FontAwesomeIcon icon={faGooglePlusG} />
                            </a>
                            <a className="hover:text-primary transition" href="https://twitter.com">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                        </div>
                    </div>
                    <div className="team">
                        <div className="overflow-hidden mb-3">
                            <img className="hover:scale-110 ease-in-out duration-700" src={team3} alt="" />
                        </div>
                        <h3 className="text-2xl font-semibold mb-2">Samuel Day</h3>
                        <p className="text-lg text-primary mb-2">Chief Engineer</p>
                        <div className="flex gap-3">
                            <a className="hover:text-primary transition" href="https://twitter.com">
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                            <a className="hover:text-primary transition" href="https://twitter.com">
                                <FontAwesomeIcon icon={faFacebookF} />
                            </a>
                            <a className="hover:text-primary transition" href="https://twitter.com">
                                <FontAwesomeIcon icon={faGooglePlusG} />
                            </a>
                            <a className="hover:text-primary transition" href="https://twitter.com">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                        </div>
                    </div>
                    <div className="team">
                        <div className="overflow-hidden mb-3">
                            <img className="hover:scale-110 ease-in-out duration-700" src={team4} alt="" />
                        </div>
                        <h3 className="text-2xl font-semibold mb-2">Edward Palmer</h3>
                        <p className="text-lg text-primary mb-2">Manager</p>
                        <div className="flex gap-3">
                            <a className="hover:text-primary transition" href="https://twitter.com">
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                            <a className="hover:text-primary transition" href="https://twitter.com">
                                <FontAwesomeIcon icon={faFacebookF} />
                            </a>
                            <a className="hover:text-primary transition" href="https://twitter.com">
                                <FontAwesomeIcon icon={faGooglePlusG} />
                            </a>
                            <a className="hover:text-primary transition" href="https://twitter.com">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurTeam;
