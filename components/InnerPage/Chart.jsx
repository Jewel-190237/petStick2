"use client";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register necessary components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const data = {
  labels: [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ],
  datasets: [
    {
      label: "Earning",
      data: [4000, 3000, 2000, 2780, 1890, 2390, 3490, 2900, 3200, 2500, 2700, 3100],
      backgroundColor: "rgba(179, 205, 173, 0.5)",
    },
    {
      label: "Spending",
      data: [2400, 1398, 3800, 3908, 4800, 3800, 4300, 4100, 3700, 4200, 4500, 3900],
      backgroundColor: "rgba(255, 95, 94, 0.5)",
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    tooltip: {
      callbacks: {
        title: (tooltipItems) => `Category: ${tooltipItems[0].label}`,
        label: (tooltipItem) => `${tooltipItem.dataset.label}: ${tooltipItem.raw}`,
      },
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      titleFont: { size: 16 },
      bodyFont: { size: 14 },
    },
    legend: {
      position: 'top',  // Position the legend at the top of the chart
      labels: {
        boxWidth: 20,    // Adjust the size of the color boxes in the legend
        padding: 10,     // Add padding between the labels
      },
    },
    title: {
      display: true,
      text: 'Earning & Spending - Statistics', // Display title in the center of the chart
      font: {
        size: 20, // Set font size for the title
      },
      position: 'top', // Title position at the top
      align: 'center', // Center align the title
    },
  },
};

const Chart = () => (
  <div className="w-full health-shadow rounded-xl p-5">
    {/* Bar chart */}
    <div className="h-[400px]">
      <Bar data={data} options={options} />
    </div>
  </div>
);

export default Chart;
