import React from "react";
import Header from "./_components/homeComponents/Header";
import HeroBanner from "./_components/homeComponents/Hero";
import DonationStatistics from "./_components/homeComponents/DonationStatistics";
import DonationEvents from "./_components/homeComponents/DonationEvents";

const Home = () => {
  return (
    <>
      <Header />
      <HeroBanner />
      <DonationStatistics/>
      <DonationEvents/>
    </>
  );
};

export default Home;
