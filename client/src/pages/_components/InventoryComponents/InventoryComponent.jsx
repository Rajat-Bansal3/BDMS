import React, { useState, useEffect } from 'react';
import axios from 'axios';

const InventoryComponent = () => {
  const [inventory, setInventory] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  // Calculate indexes of items to display on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = inventory.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const response = await axios.get('http://localhost:4040/api/inventory');
        console.log(response.data)
        setInventory(response.data.inventory);
      } catch (error) {
        console.error('Error fetching inventory:', error);
      }
    };

    fetchInventory();
  }, []);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="overflow-x-auto">
      <h2 className="text-xl font-semibold mb-4">Inventory</h2>
      <table className="table-auto w-full border-collapse">
        <thead>
          <tr>
            <th className="px-6 py-3 bg-gray-200 text-gray-700 font-semibold uppercase border border-gray-300">Blood Type</th>
            <th className="px-6 py-3 bg-gray-200 text-gray-700 font-semibold uppercase border border-gray-300">Quantity (units)</th>
            <th className="px-6 py-3 bg-gray-200 text-gray-700 font-semibold uppercase border border-gray-300">Expiry Date</th>
            <th className="px-6 py-3 bg-gray-200 text-gray-700 font-semibold uppercase border border-gray-300">Storage Location</th>
            <th className="px-6 py-3 bg-gray-200 text-gray-700 font-semibold uppercase border border-gray-300">Availability Status</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map((item, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
              <td className="px-6 py-4 border border-gray-300">{item.BloodType}</td>
              <td className="px-6 py-4 border border-gray-300">{item.Quantity}</td>
              <td className="px-6 py-4 border border-gray-300">{new Date(item.ExpiryDate).toLocaleDateString()}</td>
              <td className="px-6 py-4 border border-gray-300">{item.StorageLocation}</td>
              <td className="px-6 py-4 border border-gray-300">{item.AvailabilityStatus}</td>
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
          disabled={indexOfLastItem >= inventory.length}
          className="mx-1 px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded-md"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default InventoryComponent;

