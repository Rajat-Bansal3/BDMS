import React, { useEffect, useState } from 'react';
import Chart from 'chart.js/auto';
import axios from 'axios';

const AgeGroupChart = () => {
  const [ageData, setAgeData] = useState({});

  useEffect(() => {
    const fetchAgeData = async () => {
      try {
        const res = await axios.get('http://localhost:4040/api/donors');
        console.log(res.data.donors)
        const ages = res.data.donors.map(donor => donor.Age);
        const ageGroups = calculateAgeGroups(ages);

        setAgeData({
          labels: Object.keys(ageGroups),
          datasets: [{
            label: 'Age Distribution',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(54, 162, 235, 0.4)',
            hoverBorderColor: 'rgba(54, 162, 235, 1)',
            data: Object.values(ageGroups),
          }]
        });
      } catch (err) {
        console.error('Error fetching age data:', err);
      }
    };

    fetchAgeData();

    // Cleanup function
    return () => {
      // Destroy the chart instance to prevent memory leaks
      if (ageData.labels && ageData.labels.length > 0) {
        const chartCanvas = document.getElementById('ageGroupChart');
        const chartInstance = Chart.getChart(chartCanvas);
        if (chartInstance) {
          chartInstance.destroy();
        }
      }
    };
  }, []);

  useEffect(() => {
    if (ageData.labels && ageData.labels.length > 0) {
      const ctx = document.getElementById('ageGroupChart');

      const chart = new Chart(ctx, {
        type: 'bar',
        data: ageData,
        options: {
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Number of Donors',
              },
            },
            x: {
              title: {
                display: true,
                text: 'Age Group',
              },
            },
          },
        },
      });

      return () => {
        chart.destroy();
      };
    }
  }, [ageData]);

  // Function to calculate age from date of birth
  const calculateAge = (dob) => {
    const today = new Date();
    const birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  // Function to calculate age groups
  const calculateAgeGroups = (ages) => {
    const ageGroups = {
      'Under 18': 0,
      '18-24': 0,
      '25-34': 0,
      '35-44': 0,
      '45-54': 0,
      '55-64': 0,
      '65 and over': 0,
    };

    ages.forEach(age => {
      if (age < 18) {
        ageGroups['Under 18']++;
      } else if (age >= 18 && age <= 24) {
        ageGroups['18-24']++;
      } else if (age >= 25 && age <= 34) {
        ageGroups['25-34']++;
      } else if (age >= 35 && age <= 44) {
        ageGroups['35-44']++;
      } else if (age >= 45 && age <= 54) {
        ageGroups['45-54']++;
      } else if (age >= 55 && age <= 64) {
        ageGroups['55-64']++;
      } else {
        ageGroups['65 and over']++;
      }
    });

    return ageGroups;
  };

  return (
    <div>
      <h2>Age Group Distribution</h2>
      <canvas id="ageGroupChart" width="400" height="200"></canvas>
    </div>
  );
};

export default AgeGroupChart;
