import React from "react";
import HeaderTop from "./HeaderTop";
import Navbar from "./Navbar";

const Header = () => {
    return (
        <header className="shadow">
            <HeaderTop />
            <Navbar />
        </header>
    );
};

export default Header;
