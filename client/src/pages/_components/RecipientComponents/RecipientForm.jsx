import React, { useState } from "react";

const RecipientForm = () => {
  const [formData, setFormData] = useState({
    Name: "",
    BloodType: "",
    Age: "",
    Gender: "",
    ContactInfo: "",
    MedicalHistory: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    // Clear form fields after submission
    setFormData({
      Name: "",
      BloodType: "",
      Age: "",
      Gender: "",
      ContactInfo: "",
      MedicalHistory: "",
    });
  };

  return (
    <div className='max-w-lg mx-auto px-4 py-8'>
      <h2 className='text-3xl font-bold mb-6'>Register as Recipient</h2>
      <form
        onSubmit={handleSubmit}
        className='bg-white shadow-md rounded-lg p-6'
      >
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
          <select
            id='bloodType'
            name='BloodType'
            value={formData.BloodType}
            onChange={handleChange}
            className='mt-1 p-2 border border-gray-300 rounded-md w-full'
          >
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
            <option value=''>Select Gender</option>
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
            Contact Info:
          </label>
          <input
            type='text'
            id='contactInfo'
            name='ContactInfo'
            value={formData.ContactInfo}
            onChange={handleChange}
            className='mt-1 p-2 border border-gray-300 rounded-md w-full'
          />
        </div>
        <div className='mb-4'>
          <label
            htmlFor='medicalHistory'
            className='block text-sm font-medium text-gray-700'
          >
            Medical History:
          </label>
          <textarea
            id='medicalHistory'
            name='MedicalHistory'
            value={formData.MedicalHistory}
            onChange={handleChange}
            className='mt-1 p-2 border border-gray-300 rounded-md w-full h-24'
          ></textarea>
        </div>
        <button
          type='submit'
          className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md'
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default RecipientForm;
