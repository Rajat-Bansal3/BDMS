import React, { useState } from "react";
import axios from "axios";

const DonorForm = () => {
  const [formData, setFormData] = useState({
    Name: "",
    BloodType: "",
    Age: "",
    Gender: "",
    ContactInfo: "",
    LastDonationDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      new Date(formData.LastDonationDate).toLocaleDateString() <
      new Date(Date.now() - 56 * 24 * 60 * 60 * 1000).toLocaleDateString()
    ) {
      alert(
        "Thank you for your willingness to donate! However, for your well-being and the best use of your generosity, we kindly request that you wait at least 56 days between blood donations. This ensures that your body has enough time to replenish its blood supply and maintain your health. We appreciate your understanding and commitment to helping others. Take care!"
      );
      return;
    }
    try {
      const res = await axios.post(
        "http://localhost:4040/api/donors/",
        formData
      );
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className='flex flex-col max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-md'>
      <h2 className='text-2xl font-bold mb-6'>Register as a Donor</h2>
      <form onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label
            htmlFor='name'
            className='block text-sm font-medium text-gray-700'
          >
            Name:
          </label>
          <input
            type='text'
            id='name'
            name='Name'
            value={formData.Name}
            onChange={handleChange}
            className='mt-1 p-2 border border-gray-300 rounded-md w-full'
          />
        </div>
        <div className='mb-4'>
          <label
            htmlFor='bloodType'
            className='block text-sm font-medium text-gray-700'
          >
            Blood Type:
          </label>
          <input
            type='text'
            id='bloodType'
            name='BloodType'
            value={formData.BloodType}
            onChange={handleChange}
            className='mt-1 p-2 border border-gray-300 rounded-md w-full'
          />
        </div>
        <div className='mb-4'>
          <label
            htmlFor='age'
            className='block text-sm font-medium text-gray-700'
          >
            Age:
          </label>
          <input
            type='text'
            id='age'
            name='Age'
            value={formData.Age}
            onChange={handleChange}
            className='mt-1 p-2 border border-gray-300 rounded-md w-full'
          />
        </div>
        <div className='mb-4'>
          <label
            htmlFor='gender'
            className='block text-sm font-medium text-gray-700'
          >
            Gender:
          </label>
          <select
            id='gender'
            name='Gender'
            value={formData.Gender}
            onChange={handleChange}
            className='mt-1 p-2 border border-gray-300 rounded-md w-full'
          >
            <option value='Male'>Male</option>
            <option value='Female'>Female</option>
            <option value='Rather Not Say'>Rather Not Say</option>
            <option value='Others'>Others</option>
          </select>
        </div>

        <div className='mb-4'>
          <label
            htmlFor='contactInfo'
            className='block text-sm font-medium text-gray-700'
          >
            Email:
          </label>
          <input
            type='email'
            id='contactInfo'
            name='ContactInfo'
            value={formData.ContactInfo}
            onChange={handleChange}
            className='mt-1 p-2 border border-gray-300 rounded-md w-full'
          />
        </div>
        <div className='mb-4'>
          <label
            htmlFor='lastDonationDate'
            className='block text-sm font-medium text-gray-700'
          >
            Last Donation Date:
          </label>
          <input
            type='date'
            id='lastDonationDate'
            name='LastDonationDate'
            value={formData.LastDonationDate}
            onChange={handleChange}
            className='mt-1 p-2 border border-gray-300 rounded-md w-full'
          />
        </div>
        <button
          type='submit'
          className='bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200'
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default DonorForm;
