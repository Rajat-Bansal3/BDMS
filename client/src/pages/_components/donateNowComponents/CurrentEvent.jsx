import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Assuming you are using axios for API calls

const RecentCenter = () => {
  const [recentCenters, setRecentCenters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [centersPerPage] = useState(10);

  useEffect(() => {
    axios.get('http://localhost:4040/api/center/recent')
      .then(response => {
        console.log(response.data);
        setRecentCenters(response.data.donation); 
      })
      .catch(error => {
        console.error('Error fetching recent centers:', error);
      });
  }, []);

  const indexOfLastCenter = currentPage * centersPerPage;
  const indexOfFirstCenter = indexOfLastCenter - centersPerPage;
  const currentCenters = recentCenters.slice(indexOfFirstCenter, indexOfLastCenter);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="overflow-x-hidden w-full mt-10">
      <h2 className="text-2xl font-semibold mb-4 text-center">Recent Centers</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="px-6 py-3 bg-gray-200 text-gray-700 font-semibold uppercase border border-gray-300 justify-center items-center">CenterID</th>
            <th className="px-6 py-3 bg-gray-200 text-gray-700 font-semibold uppercase border border-gray-300 justify-center items-center">Name</th>
            <th className="px-6 py-3 bg-gray-200 text-gray-700 font-semibold uppercase border border-gray-300 justify-center items-center">Location</th>
            <th className="px-6 py-3 bg-gray-200 text-gray-700 font-semibold uppercase border border-gray-300 justify-center items-center">Contact Info</th>
            <th className="px-6 py-3 bg-gray-200 text-gray-700 font-semibold uppercase border border-gray-300 justify-center items-center">Date</th>
          </tr>
        </thead>
        <tbody>
          {currentCenters.map(center => (
            <tr key={center.CenterID} className='justify-center items-center'>
              <td className="px-6 py-4 border border-gray-300 justify-center items-center text-center">{center.CenterID}</td>
              <td className="px-6 py-4 border border-gray-300 justify-center items-center text-center">{center.Name}</td>
              <td className="px-6 py-4 border border-gray-300 justify-center items-center text-center">{center.Location}</td>
              <td className="px-6 py-4 border border-gray-300 justify-center items-center text-center">{center.ContactInfo}</td>
              <td className="px-6 py-4 border border-gray-300 justify-center items-center text-center">{new Date(center.Date).toLocaleDateString()}</td>
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
          disabled={currentCenters.length < centersPerPage}
          className="mx-1 px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded-md"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default RecentCenter;
