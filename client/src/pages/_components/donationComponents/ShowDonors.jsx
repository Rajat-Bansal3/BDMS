import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ShowDonors = () => {
  const [donors, setDonors] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [donorsPerPage] = useState(10);

  const fetchDonors = async () => {
    try {
      const res = await axios.get("http://localhost:4040/api/donors/");
      setDonors(res.data.donors);
    } catch (error) {
      console.error("Error fetching donors:", error);
    }
  };

  useEffect(() => {
    fetchDonors();
  }, []);

  // Get current donors
  const indexOfLastDonor = currentPage * donorsPerPage;
  const indexOfFirstDonor = indexOfLastDonor - donorsPerPage;
  const currentDonors = donors.slice(indexOfFirstDonor, indexOfLastDonor);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="overflow-x-hidden w-full mt-10">
      <h2 className="text-2xl font-semibold mb-4 text-center">List of Donors</h2>
      <table className="table-auto w-full border-collapse">
        <thead>
          <tr>
            <th className="px-6 py-3 bg-gray-200 text-gray-700 font-semibold uppercase border border-gray-300">Name</th>
            <th className="px-6 py-3 bg-gray-200 text-gray-700 font-semibold uppercase border border-gray-300">Blood Type</th>
            <th className="px-6 py-3 bg-gray-200 text-gray-700 font-semibold uppercase border border-gray-300">Age</th>
            <th className="px-6 py-3 bg-gray-200 text-gray-700 font-semibold uppercase border border-gray-300">Gender</th>
            <th className="px-6 py-3 bg-gray-200 text-gray-700 font-semibold uppercase border border-gray-300">Contact Info</th>
            <th className="px-6 py-3 bg-gray-200 text-gray-700 font-semibold uppercase border border-gray-300">Last Donation Date</th>
          </tr>
        </thead>
        <tbody>
          {currentDonors.map((donor, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
              <td className="px-6 py-4 border border-gray-300 text-center">{donor.Name}</td>
              <td className="px-6 py-4 border border-gray-300 text-center">{donor.BloodType}</td>
              <td className="px-6 py-4 border border-gray-300 text-center">{donor.Age}</td>
              <td className="px-6 py-4 border border-gray-300 text-center">{donor.Gender}</td>
              <td className="px-6 py-4 border border-gray-300 text-center">{donor.ContactInfo}</td>
              <td className="px-6 py-4 border border-gray-300 text-center">{new Date(donor.LastDonationDate).toLocaleDateString()}</td>
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
          disabled={currentDonors.length < donorsPerPage}
          className="mx-1 px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded-md"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ShowDonors;
