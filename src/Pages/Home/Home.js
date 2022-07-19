import React from "react";
import Banner from "./Banner";
import BusinessSummary from "./BusinessSummary";
import LatestTools from "./LatestTools";
import Reviews from "./Reviews";
import OurTeam from "./OurTeam";
import Services from "./Services";

const Home = () => {
    return (
        <div>
            <Banner />
            <Services />
            <LatestTools />
            <BusinessSummary />
            <OurTeam />
            <Reviews />
        </div>
    );
};

export default Home;
