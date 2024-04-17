import axios from "axios";
import React, { useState } from "react";

const TalkWithDonor = () => {
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:4040/api/send-mail", { message });
      console.log("Email sent successfully");
    } catch (error) {
      console.error("Error sending email:", error);
    }

    setMessage("");
  };

  return (
    <div className='bg-white rounded-lg shadow-md p-6 mb-10'>
      <h2 className='text-2xl font-bold mb-4'>Contact BloodBank</h2>
      <form onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label
            htmlFor='message'
            className='block text-sm font-medium text-gray-700'
          >
            Your Message:
          </label>
          <textarea
            id='message'
            name='message'
            value={message}
            onChange={handleChange}
            rows={4}
            className='mt-1 p-2 border border-gray-300 rounded-md w-full'
            placeholder='Enter your message to the donor...'
            required
          />
        </div>
        <button
          type='submit'
          className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md'
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default TalkWithDonor;
