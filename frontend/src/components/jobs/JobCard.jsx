// src/components/JobChart.jsx
import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const JobChart = ({ jobData }) => {
  // Şirketlere göre ilan sayısını hesaplayalım
  const companyCounts = jobData.reduce((acc, job) => {
    acc[job.company] = (acc[job.company] || 0) + 1;
    return acc;
  }, {});

  const data = {
    labels: Object.keys(companyCounts),
    datasets: [
      {
        label: "İlan Sayısı",
        data: Object.values(companyCounts),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Şirketlere Göre İş İlanı Sayısı",
      },
    },
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mt-8">
      <Bar data={data} options={options} />
    </div>
  );
};

export default JobChart;
