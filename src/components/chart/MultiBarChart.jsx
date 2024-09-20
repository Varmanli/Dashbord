import React, { useState } from "react";
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function MultiBarChart({ tabsData, options }) {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="w-full mx-auto">
      <div className="mb-4 text-center">
        {tabsData.map((tab, index) => (
          <button
            key={index}
            onClick={() => handleTabClick(index)}
            className={`relative text-xs px-4 py-2 ${
              activeTab === index
                ? "text-[#242424] font-bold"
                : "text-[#808080] font-sans  font-semibold leading-[18px] text-left"
            }`}
          >
            {tab.label}
            {activeTab === index && (
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[35px] h-[2.4px] bg-[#5B5FC7]"></span>
            )}
          </button>
        ))}
      </div>

      <Bar data={tabsData[activeTab].data} options={options} />
    </div>
  );
}

export default MultiBarChart;
