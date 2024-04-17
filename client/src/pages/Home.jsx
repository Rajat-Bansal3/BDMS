import React from "react";
import Header from "./_components/globalComponents/Header";
import HeroBanner from "./_components/homeComponents/Hero";
import DonationStatistics from "./_components/homeComponents/DonationStatistics";
import DonationEvents from "./_components/homeComponents/DonationEvents";
import Footer from "./_components/globalComponents/Footer";

const Home = () => {
  return (
    <>
      <HeroBanner />
      <DonationStatistics/>
    </>
  );
};

export default Home;
