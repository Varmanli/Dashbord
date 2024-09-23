import React, { useEffect, useRef, useState } from "react";
import {
  Chart,
  DoughnutController,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

// ثبت اجزای مورد نیاز
Chart.register(DoughnutController, ArcElement, Tooltip, Legend);

function DoughnutChart({ dataSets, colors }) {
  const [activeTab, setActiveTab] = useState(0); // حالت برای تب‌ها
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    const canvas = chartRef.current;
    const ctx = canvas.getContext("2d");

    // داده‌های نمودار با توجه به تب فعال
    const data = {
      datasets: [
        {
          data: dataSets[activeTab],
          backgroundColor: colors,
          borderWidth: 2,
          borderColor: "#FFFFFF",
          hoverBorderWidth: 0,
        },
      ],
    };

    const options = {
      responsive: true,
      cutout: "74%", // ایجاد فضای مرکزی
      plugins: {
        legend: { display: false },
        tooltip: { enabled: true },
        // پلاگین به صورت لوکال فقط برای این چارت
        centerText: {
          beforeDraw(chart) {
            const { width, height, ctx } = chart;
            ctx.restore();
            const fontSize = (height / 114).toFixed(2);
            ctx.font = `${fontSize}em sans-serif`;
            ctx.textBaseline = "middle";
            const text = "1000"; // مقدار مرکزی
            const textX = Math.round((width - ctx.measureText(text).width) / 2);
            const textY = height / 2;
            ctx.fillText(text, textX, textY);
            ctx.save();
          },
        },
      },
    };

    // تخریب نمودار قبلی در صورت وجود
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    // ایجاد نمودار جدید
    chartInstanceRef.current = new Chart(ctx, {
      type: "doughnut",
      data,
      options,
      plugins: [options.plugins.centerText], // پلاگین به صورت محلی اعمال می‌شود
    });

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [activeTab, dataSets, colors]);

  return (
    <div>
      <div className="flex justify-center items-center text-xs mb-7 md:mb-5 mt-2 md:justify-start w-full">
        {["7 days", "30 days", "60 days"].map((tabLabel, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`relative text-xs md:text-[14px] md:text-sm px-4 py-2 md:px-2 ${
              activeTab === index
                ? "text-[#242424] font-semibold"
                : "text-[#808080]"
            }`}
          >
            {tabLabel}
            {activeTab === index && (
              <span className="absolute bottom-0 left-[25%]  w-[35px] h-[2.4px] bg-[#5B5FC7]"></span>
            )}
          </button>
        ))}
      </div>

      {/* نمودار */}
      <div className="w-[235px] h-[235px] md:w-[90%] md:h-[70%] mx-auto mb-2">
        <canvas ref={chartRef}></canvas>
      </div>
    </div>
  );
}

export default DoughnutChart;
