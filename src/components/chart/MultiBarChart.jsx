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
    <div className="w-full md:w-[100%] mx-auto">
      <div className="mb-9 text-center md:text-left ">
        {tabsData.map((tab, index) => (
          <button
            key={index}
            onClick={() => handleTabClick(index)}
            className={`relative text-xs md:text-[14px] md:text-sm px-4 md:px-2 py-2 ${
              activeTab === index
                ? "text-[#242424] font-semibold"
                : "text-[#808080]"
            }`}
          >
            {tab.label}
            {activeTab === index && (
              <span className="absolute bottom-0 left-[25%] w-[35px] h-[2.4px] bg-[#5B5FC7]"></span>
            )}
          </button>
        ))}
      </div>
      <div className="md:h-[242px]">
        <Bar data={tabsData[activeTab].data} options={options} />
      </div>
    </div>
  );
}

export default MultiBarChart;
