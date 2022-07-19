import React from "react";
import Banner from "./Banner";
import BusinessSummary from "./BusinessSummary";
import LatestTools from "./LatestTools";
import Reviews from "./Reviews";
import Features from "./Features";
import OurTeam from "./OurTeam";

const Home = () => {
    return (
        <div>
            <Banner />
            <Features />
            <LatestTools />
            <BusinessSummary />
            <OurTeam />
            <Reviews />
        </div>
    );
};

export default Home;
