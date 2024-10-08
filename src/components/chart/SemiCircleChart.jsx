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
    <div className="md:mb-[50px]">
      {/* دکمه‌های تب */}
      <div className="flex justify-center md:justify-start">
        {tabs.map((tabLabel, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`relative text-xs md:text-[14px] px-4 py-2 md:px-2  ${
              activeTab === index
                ? "text-secendery font-semibold"
                : "text-[#808080] font-sans  leading-[18px] text"
            }`}
          >
            {tabLabel}
            {activeTab === index && (
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[35px] h-[2.4px] bg-primary"></span>
            )}
          </button>
        ))}
      </div>

      {/* نمودار نیم‌دایره */}
      <div className="flex items-end justify-center md:mt-5  w-[190px] md:w-[75%]  h-[132px] md:h-auto mx-auto relative md:mb- ">
        {/* نمایش درصد زیر نمودار */}
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[12%] md:bottom-[23%]">
          <p className="text-[34px] md:text-[32px] font-bold md:font-semibold leading-[41px] tracking-[0.4px] text-center text-secendery">
            {data[activeTab]}%
          </p>
        </div>

        {/* مقیاس‌های 0 و 100 درصد */}
        <p className="absolute left-[-18px] bottom-5 md:bottom-[38px] md:left-[-10px] text-[12px] font-semibold leading-[16px] text-left text-secendery">
          0
        </p>
        <canvas ref={chartRef} className="w-full h-full" />
        <p className="absolute right-[-25px] bottom-5 md:bottom-[38px] md:right-[-20px]   text-[12px] font-semibold leading-[16px] text-left text-secendery">
          100
        </p>
      </div>

      {/* لیبل ها */}
      <div className="md:flex hidden justify-center">
        {["Label 1", "Label 2"].map((label, index) => (
          <div key={index} className="flex items-center mx-2 md:mt-2">
            <div
              className="w-2 h-2 mr-2 "
              style={{
                backgroundColor: index === 0 ? "#00B7C3" : "#D1D1D1",
              }}
            />
            <span className="text-secendery text-xs">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SemiCircleChart;
