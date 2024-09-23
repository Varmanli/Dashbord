import React, { useEffect, useRef, useState } from "react";
import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

Chart.register(
  LineController,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  Filler
);

function LineChart({ chartData, chartConfig }) {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  const [activeTab, setActiveTab] = useState(0);
  const [hiddenDatasets, setHiddenDatasets] = useState([]);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    const filteredDatasets = chartData[activeTab].datasets.map(
      (dataset, index) => ({
        ...dataset,
        hidden: hiddenDatasets.includes(index),
      })
    );

    chartInstanceRef.current = new Chart(ctx, {
      type: "line",
      data: { ...chartData[activeTab], datasets: filteredDatasets },
      options: chartConfig.options,
    });

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [activeTab, hiddenDatasets]);

  const handleLegendClick = (index) => {
    setHiddenDatasets((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const tabColors = [
    ["#637CEF", "#00B7C3"],
    ["#FF6384", "#FF8A65"],
    ["#4BC0C0", "#FFCE56"],
  ];

  return (
    <div>
      {/* دکمه‌های تب */}
      <div className="flex justify-center md:justify-start mt-2 mb-6 md:mt-0">
        {["7 days", "30 days", "60 days"].map((tabLabel, index) => (
          <button
            key={index}
            className={`relative text-xs md:text-[14px] md:text-sm px-4 py-2  ${
              activeTab === index
                ? "text-[#242424] font-semibold"
                : "text-[#808080]"
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tabLabel}
            {activeTab === index && (
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[35px] md:w-[40px] h-[2.4px] bg-[#5B5FC7]"></span>
            )}
          </button>
        ))}
      </div>

      {/* نمودار خطی */}
      <div className="w-full  mx-auto">
        <canvas ref={chartRef} className="w-full h-full" />
      </div>

      {/* لیبل‌های سفارشی */}
      <div className="hidden md:flex justify-start text-base ml-4 mt-4">
        {chartData[activeTab].datasets.map((dataset, index) => (
          <div
            key={index}
            className={`flex items-center mx-4 cursor-pointer ${
              hiddenDatasets.includes(index) ? "opacity-50" : ""
            }`}
            onClick={() => handleLegendClick(index)}
          >
            <div
              className="w-3 h-3"
              style={{
                backgroundColor: tabColors[activeTab][index],
              }}
            ></div>
            <span className="ml-2">{dataset.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LineChart;
