import React, { useEffect, useState } from 'react';
import Chart from 'chart.js/auto';
import axios from 'axios';

const BloodTypeChart = () => {
  const [bloodData, setBloodData] = useState({});

  useEffect(() => {
    let isMounted = true; // Flag to track component mount status

    const fetchBloodData = async () => {
      try {
        const res = await axios.get('http://localhost:4040/api/inventory/available');
        if (isMounted) {
          const bloodTypes = res.data.blood.map(b => b.BloodType);
          const quantities = res.data.blood.map(b => b.Quantity);

          setBloodData({
            labels: bloodTypes,
            datasets: [{
              label: 'Blood Types Available',
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
              hoverBackgroundColor: 'rgba(75, 192, 192, 0.4)',
              hoverBorderColor: 'rgba(75, 192, 192, 1)',
              data: quantities,
            }]
          });
        }
      } catch (err) {
        console.error('Error fetching blood data:', err);
      }
    };

    fetchBloodData();

    // Cleanup function to set isMounted to false when component unmounts
    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (bloodData.labels && bloodData.labels.length > 0) {
      const ctx = document.getElementById('bloodTypeChart');

      const chart = new Chart(ctx, {
        type: 'bar',
        data: bloodData,
        options: {
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Quantity(L)',
              },
            },
            x: {
              title: {
                display: true,
                text: 'Blood Type',
              },
            },
          },
        },
      });

      // Cleanup function to destroy chart instance when component unmounts
      return () => {
        chart.destroy();
      };
    }
  }, [bloodData]);

  return (
    <div>
      <h2>Blood Types Available</h2>
      <canvas id="bloodTypeChart" width="400" height="200"></canvas>
    </div>
  );
};

export default BloodTypeChart;
