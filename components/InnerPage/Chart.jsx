"use client";
import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement, // This is needed for the circle effect
} from "chart.js";

// Register necessary components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement // Register ArcElement for drawing circles
);

const data = {
  labels: [
    "Page A",
    "Page B",
    "Page C",
    "Page D",
    "Page E",
    "Page F",
    "Page G",
  ],
  datasets: [
    {
      label: "UV",
      data: [4000, 3000, 2000, 2780, 1890, 2390, 3490],
      backgroundColor: "rgba(179, 205, 173, 0.5)",
    },
    {
      label: "PV",
      data: [2400, 1398, 3800, 3908, 4800, 3800, 4300],
      backgroundColor: "rgba(255, 95, 94, 0.5)",
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    tooltip: {
      // Customize tooltip appearance
      callbacks: {
        title: (tooltipItems) => {
          return `Category: ${tooltipItems[0].label}`;
        },
        label: (tooltipItem) => {
          return `${tooltipItem.dataset.label}: ${tooltipItem.raw}`;
        },
      },
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      titleFont: { size: 16 },
      bodyFont: { size: 14 },
    },
  },
  // Add custom hover effect for the circle
  hover: {
    onHover: (event, chartElement) => {
      const ctx = event.native.target.getContext("2d");
      if (chartElement.length) {
        const { index, datasetIndex } = chartElement[0];
        const dataPoint = data.datasets[datasetIndex].data[index];
        const x = chartElement[0].element.x;
        const y = chartElement[0].element.y;

        // Draw a small circle on hover
        ctx.beginPath();
        ctx.arc(x, y - 10, 6, 0, 2 * Math.PI);
        ctx.fillStyle = "rgba(255, 99, 132, 0.6)";
        ctx.fill();
      }
    },
  },
};

const Chart = () => (
  <div className="pet-container mt-20">
    <div className="w-full lg:w-1/2">
      <Bar data={data} options={options} />
    </div>
  </div>
);

export default Chart;
