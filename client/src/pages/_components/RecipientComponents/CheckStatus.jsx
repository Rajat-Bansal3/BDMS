import React, { useState } from "react";
import axios from "axios";

const CheckStatus = () => {
  const [bloodType, setBloodType] = useState("");
  const [status, setStatus] = useState(0);
  const [loading, setLoading] = useState(false);

  const checkStatus = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:4040/api/inventory/status/${bloodType}`
      );
      console.log(response.data);
      if (response.status === 200) {
        setStatus(response.data.blood +"  " +  "units available");
      }
    } catch (error) {
      console.error("Error fetching status:", error);
      setStatus("unavailable");
    }
    setLoading(false);
  };

  return (
    <div className='flex flex-col items-center space-y-4'>
      <label htmlFor='bloodType' className='text-lg font-semibold'>
        Select Blood Type:
      </label>
      <select
        id='bloodType'
        value={bloodType}
        onChange={(e) => setBloodType(e.target.value)}
        className='p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500'
      >
        {/* Options for different blood types */}

        <option value=''>Select Blood Type</option>
        <option value='A+'>A+</option>
        <option value='A-'>A-</option>
        <option value='B+'>B+</option>
        <option value='B-'>B-</option>
        <option value='AB+'>AB+</option>
        <option value='AB-'>AB-</option>
        <option value='O+'>O+</option>
        <option value='O-'>O-</option>
      </select>
      <button
        onClick={checkStatus}
        className='px-4 py-2 bg-blue-500 text-white rounded-md shadow-md transition duration-300 ease-in-out hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500'
        disabled={!bloodType || loading}
      >
        {loading ? "Checking..." : "Check Status"}
      </button>
      {status && (
        <p className='text-lg font-semibold'>
          Status: <span className='text-blue-500'>{status}</span>
        </p>
      )}
    </div>
  );
};

export default CheckStatus;
