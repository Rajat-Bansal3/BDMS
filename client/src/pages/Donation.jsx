import React from "react";
import DonorForm from "./_components/donationComponents/DonorForm";
import ShowDonors from "./_components/donationComponents/ShowDonors";

const Donation = () => {
  return (
    <>
      <div className=" mx-7 py-7">
        <DonorForm />
        <ShowDonors />
      </div>
    </>
  );
};

export default Donation;
