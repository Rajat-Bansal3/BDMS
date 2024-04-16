import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ShowRecipients = () => {
  const [recipients, setRecipients] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [recipientsPerPage] = useState(10);

  const fetchRecipients = async () => {
    try {
      const res = await axios.get("http://localhost:4040/api/recipients/");
      setRecipients(res.data.recipients);
    } catch (error) {
      console.error("Error fetching recipients:", error);
    }
  };

  useEffect(() => {
    fetchRecipients();
  }, []);

  const indexOfLastRecipient = currentPage * recipientsPerPage;
  const indexOfFirstRecipient = indexOfLastRecipient - recipientsPerPage;
  const currentRecipients = recipients.slice(indexOfFirstRecipient, indexOfLastRecipient);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="overflow-x-hidden w-full mt-10">
      <h2 className="text-2xl font-semibold mb-4 text-center">List of Recipients</h2>
      <table className="table-auto w-full border-collapse">
        <thead>
          <tr>
            <th className="px-6 py-3 bg-gray-200 text-gray-700 font-semibold uppercase border border-gray-300">Name</th>
            <th className="px-6 py-3 bg-gray-200 text-gray-700 font-semibold uppercase border border-gray-300">Blood Type</th>
            <th className="px-6 py-3 bg-gray-200 text-gray-700 font-semibold uppercase border border-gray-300">Age</th>
            <th className="px-6 py-3 bg-gray-200 text-gray-700 font-semibold uppercase border border-gray-300">Gender</th>
            <th className="px-6 py-3 bg-gray-200 text-gray-700 font-semibold uppercase border border-gray-300">Contact Info</th>
            <th className="px-6 py-3 bg-gray-200 text-gray-700 font-semibold uppercase border border-gray-300">Medical History</th>
            <th className="px-6 py-3 bg-gray-200 text-gray-700 font-semibold uppercase border border-gray-300">Status</th>
          </tr>
        </thead>
        <tbody>
          {currentRecipients.map((recipient, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
              <td className="px-6 py-4 border border-gray-300 text-center">{recipient.Name}</td>
              <td className="px-6 py-4 border border-gray-300 text-center">{recipient.BloodType}</td>
              <td className="px-6 py-4 border border-gray-300 text-center">{recipient.Age}</td>
              <td className="px-6 py-4 border border-gray-300 text-center">{recipient.Gender}</td>
              <td className="px-6 py-4 border border-gray-300 text-center">{recipient.ContactInfo}</td>
              <td className="px-6 py-4 border border-gray-300 text-center">{recipient.MedicalHistory}</td>
              <td className="px-6 py-4 border border-gray-300 text-center">{recipient.status === 0 ? "waiting" : "completed"}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center mt-4">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="mx-1 px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded-md"
        >
          Previous
        </button>
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentRecipients.length < recipientsPerPage}
          className="mx-1 px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded-md"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ShowRecipients;
