import React, { useState } from 'react';

const DonateForm = () => {
  const [donationData, setDonationData] = useState({
    DonationID: '',
    DonorID: '',
    DonationDate: '',
    BloodType: '',
    Quantity: '',
    TestingStatus: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDonationData({ ...donationData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted data:", donationData);
    setDonationData({
      DonationID: '',
      DonorID: '',
      DonationDate: '',
      BloodType: '',
      Quantity: '',
      TestingStatus: ''
    });
  };
  // sendMail({
  //   from: "Donor Appointment<BloodLink@gmail.com>",
  //   to: donation[0].ContactInfo,
  //   subject: "Donating req from a respectful citizen",
  //   text: "mail to book appointment for today for a Donor to Donate Blood",
  // });
  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Donate Form</h2>
      <p className='text-red-600 my-4'>*when u register here we will book a appointment to most recent blood donation camp from now and send an appointment mail to them for today</p>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-1">DonationID:</label>
          <input type="text" name="DonationID" value={donationData.DonationID} onChange={handleInputChange} className="border border-gray-300 px-4 py-2 w-full rounded-lg" />
        </div>
        <div className="mb-4">
          <label className="block mb-1">DonorID:</label>
          <input type="text" name="DonorID" value={donationData.DonorID} onChange={handleInputChange} className="border border-gray-300 px-4 py-2 w-full rounded-lg" />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Donation Date:</label>
          <input type="date" name="DonationDate" value={donationData.DonationDate} onChange={handleInputChange} className="border border-gray-300 px-4 py-2 w-full rounded-lg" />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Blood Type:</label>
          <input type="text" name="BloodType" value={donationData.BloodType} onChange={handleInputChange} className="border border-gray-300 px-4 py-2 w-full rounded-lg" />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Quantity:</label>
          <input type="text" name="Quantity" value={donationData.Quantity} onChange={handleInputChange} className="border border-gray-300 px-4 py-2 w-full rounded-lg" />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Testing Status:</label>
          <input type="text" name="TestingStatus" value={donationData.TestingStatus} onChange={handleInputChange} className="border border-gray-300 px-4 py-2 w-full rounded-lg" />
        </div>
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">Submit</button>
      </form>
    </div>
  );
};

export default DonateForm;
