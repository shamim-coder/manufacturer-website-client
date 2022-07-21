import { faFacebookF, faGithub, faGooglePlusG, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone, faTruck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const HeaderTop = () => {
    return (
        <section className="bg-secondary py-5">
            <div className="container mx-auto flex justify-between text-white">
                <div className="flex">
                    <a className="border-r-2 pr-5 mr-5 border-gray-600" href="http://" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className="scale-x-[-1] text-primary mr-2" icon={faTruck} /> 9 Crosby Street, New York City
                    </a>
                    <a className="border-r-2 pr-5 mr-5 border-gray-600" href="tel:+1 344 5678">
                        <FontAwesomeIcon className="text-primary mr-2" icon={faPhone} /> +1 344 5678
                    </a>
                    <a href="mailto:baumeister@qodeinteractive.com">
                        <FontAwesomeIcon className="text-primary mr-2" icon={faEnvelope} /> baumeister@qodeinteractive.com
                    </a>
                </div>
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
        </section>
    );
};

export default HeaderTop;
