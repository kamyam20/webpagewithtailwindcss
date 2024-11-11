// ChartComponent.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register Chart.js modules
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ChartComponent = () => {
  const [chartData, setChartData] = useState({
    labels: ["January", "February", "March", "April"],
  datasets: [
    {
      label: "Sales Data",
      data: [300, 500, 100, 400],
      backgroundColor: ["rgba(75, 192, 192, 0.5)", "rgba(255, 99, 132, 0.5)", "rgba(54, 162, 235, 0.5)", "rgba(153, 102, 255, 0.5)"],
      borderColor: ["rgba(75, 192, 192, 1)", "rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)", "rgba(153, 102, 255, 1)"],
      borderWidth: 1,
    }
  ]

      
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.example.com/data');
        const data = response.data;
        
        // Assuming `data` is an array of objects with `label` and `value` keys
        const labels = data.map(item => item.label);
        const values = data.map(item => item.value);
        
        setChartData({
          labels,
          datasets: [{
            label: 'Data from API',
            data: values,
            backgroundColor: 'rgba(75, 192, 192, 0.5)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2,
            
          }],
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    
    fetchData();
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <Bar
        data={chartData}
        options={{
          responsive: true,
          plugins: {
            legend: { position: 'top' },
            title: { display: true, text: 'API Data Chart' },
          },
        }}
      />
    </div>
  );
};

export default ChartComponent;
