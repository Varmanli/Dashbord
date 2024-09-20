import React, { useEffect, useRef, useState } from "react";
import { Chart, ArcElement, Tooltip, DoughnutController } from "chart.js";

Chart.register(DoughnutController, ArcElement, Tooltip);

function SemiCircleChart({ data, config, tabs }) {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    const chartData = {
      labels: ["Label 1", "Label 2"],
      datasets: [
        {
          data: [data[activeTab], 100 - data[activeTab]],
          backgroundColor: ["#00B7C3", "#D1D1D1"],
          borderWidth: 3,
          borderColor: "#ffffff",
        },
      ],
    };

    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    chartInstanceRef.current = new Chart(ctx, {
      type: "doughnut",
      data: chartData,
      options: { ...config, plugins: { legend: { display: false } } }, // مخفی کردن لجند داخلی
    });

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [activeTab, data, config]);

  return (
    <div>
      {/* دکمه‌های تب */}
      <div className="flex justify-center ">
        {tabs.map((tabLabel, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`relative text-xs px-4 py-2 ${
              activeTab === index
                ? "text-[#242424] font-bold"
                : "text-[#808080] font-sans  font-semibold leading-[18px] text-left"
            }`}
          >
            {tabLabel}
            {activeTab === index && (
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[35px] h-[2.4px] bg-[#5B5FC7]"></span>
            )}
          </button>
        ))}
      </div>

      {/* نمودار نیم‌دایره */}
      <div className="w-[190px] h-[132px] mx-auto relative">
        <canvas ref={chartRef} className="w-full h-full" />

        {/* نمایش درصد زیر نمودار */}
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[20%]">
          <p className="font-sans text-[34px] font-bold leading-[41px] tracking-[0.4px] text-center text-[#242424]">
            {data[activeTab]}%
          </p>
        </div>

        {/* مقیاس‌های 0 و 100 درصد */}
        <p className="absolute left-[-5%] top-[70%] font-sans text-[12px] font-semibold leading-[16px] text-left text-[#242424]">
          0
        </p>
        <p className="absolute right-[-11%] top-[70%] font-sans text-[12px] font-semibold leading-[16px] text-left text-[#242424]">
          100
        </p>
      </div>

      {/* لیبل ها */}
      <div className="md:flex hidden justify-center mt-4 ا">
        {["Label 1", "Label 2"].map((label, index) => (
          <div key={index} className="flex items-center mx-2">
            <div
              className="w-3 h-3 mr-2 "
              style={{
                backgroundColor: index === 0 ? "#00B7C3" : "#D1D1D1",
              }}
            />
            <span className="text-gray-700 text-sm">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SemiCircleChart;
