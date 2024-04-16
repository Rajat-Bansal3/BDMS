import React, { useEffect, useState } from "react";
import axios from "axios";
import BloodTypeChart from "./BloodTypeChart";
import AgeGroupChart from "./AgeGroupChart";

const DonationStatistics = () => {
  const [totalDonations, setTotalDonations] = useState(0);
  const [totalTransfusions, setTotalTransfusions] = useState(0);

  const fetchDonationStats = async () => {
    try {
      const res = await axios.get("http://localhost:4040/api/donors/");
      setTotalDonations(res.data.donors.length);
    } catch (err) {
      console.log(err);
    }
  };
  const fetchTransfusionStats = async () => {
    try {
      const res = await axios.get("http://localhost:4040/api/recipients//");
      setTotalTransfusions(res.data.recipients.length);
    } catch (err) {
      console.log("Error occurred:", err.message);
    }
  };

  useEffect(() => {
    fetchDonationStats();
    fetchTransfusionStats();
  }, []);
  return (
    <div className='bg-white p-6 rounded-lg shadow-md'>
      <h2 className='text-xl font-bold mb-4'>Donation Statistics</h2>
      <div className='grid grid-cols-2 gap-4'>
        <div className='flex items-center justify-center bg-blue-500 text-white p-4 rounded-lg'>
          <div>
            <h3 className='text-3xl font-bold flex items-center justify-center'>
              {totalDonations}
            </h3>
            <p className='text-sm'>Total Donations</p>
          </div>
        </div>
        <div className='flex items-center justify-center bg-green-500 text-white p-4 rounded-lg'>
          <div>
            <h3 className='text-3xl font-bold flex items-center justify-center'>
              {totalTransfusions}
            </h3>
            <p className='text-sm'>Successful Transfusions</p>
          </div>
        </div>
        <BloodTypeChart/>
        <AgeGroupChart/>
      </div>
    </div>
  );
};

export default DonationStatistics;
