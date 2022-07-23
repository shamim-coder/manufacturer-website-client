import React from "react";
import Logo from "../../../Assets/footer-logo.png";
import { faFacebookF, faGithub, faGooglePlusG, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faUser, faMapMarker, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <footer className="py-14 bg-black text-white footer-bg">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                    <div>
                        <Link to={"/"}>
                            <img className="w-[180px] mb-5" src={Logo} alt="" />
                        </Link>
                        <p className="text-base leading-relaxed mb-4 ">
                            See why millions of professionals choose DEWALT. From our rich history and proven performance to our focus on innovation and technology. WE are DEWALT, and we are GUARANTEED TOUGH®
                        </p>
                        <div className="flex gap-4">
                            <a className="hover:text-primary transition text-lg" href="https://twitter.com">
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                            <a className="hover:text-primary transition text-lg" href="https://twitter.com">
                                <FontAwesomeIcon icon={faFacebookF} />
                            </a>
                            <a className="hover:text-primary transition text-lg" href="https://twitter.com">
                                <FontAwesomeIcon icon={faGooglePlusG} />
                            </a>
                            <a className="hover:text-primary transition text-lg" href="https://twitter.com">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                            <a className="hover:text-primary transition text-lg" href="https://twitter.com">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl mb-7">What we do</h3>
                        <p className="text-base mb-5">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
                        <Link to={"/"} className="link block link-hover text-base border-b-2 pb-5 mb-2 font-body">
                            <FontAwesomeIcon className="mr-2 text-primary" icon={faUser} /> Lorem ipsum dolor sit amet
                        </Link>
                        <Link to={"/"} className="link link-hover block text-base border-b-2 pb-5 mb-2 font-body">
                            <FontAwesomeIcon className="mr-2 text-primary" icon={faUser} /> Lorem ipsum dolor sit amet
                        </Link>
                        <Link to={"/"} className="link link-hover block text-base font-body">
                            <FontAwesomeIcon className="mr-2 text-primary" icon={faUser} /> Lorem ipsum dolor sit amet
                        </Link>
                    </div>
                    <div>
                        <h3 className="text-2xl mb-7">Contact information</h3>
                        <ul>
                            <li className="mb-5 text-base">
                                <FontAwesomeIcon className="mr-2 text-primary" icon={faMapMarker} /> 620 Eighth Avenue, United States of America
                            </li>
                            <li className="mb-5 text-base">
                                <FontAwesomeIcon className="mr-2 text-primary" icon={faPhone} /> + 555 786 897 <br /> Mon-Sat, 9:00am-7:00pm
                            </li>
                            <li className="mb-5 text-base">
                                <FontAwesomeIcon className="mr-2 text-primary" icon={faEnvelope} /> baumeister@qode.com
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-2xl mb-7">Newsletter</h3>
                        <div className="form-control w-80">
                            <label className="label">
                                <span className="label-text text-white">Enter your email address</span>
                            </label>
                            <div className="relative">
                                <input type="text" placeholder="username@site.com" className="text-secondary input input-bordered w-full pr-16" />
                                <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className="footer footer-center p-10 bg-secondary text-base-content">
                <div>
                    <Link to="/" className="text-white hover:text-primary transition font-body">
                        Copyright © 2022 - All right reserved by DEWALT Ltd.
                    </Link>
                </div>
            </footer>
        </>
    );
};

export default Footer;
