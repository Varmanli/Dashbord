import React, { useEffect, useRef } from "react";
import {
  Chart,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

Chart.register(
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

function BarChart({ data, options }) {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    // ایجاد نمودار جدید
    chartInstanceRef.current = new Chart(ctx, {
      type: "bar", // نوع نمودار bar
      data,
      options,
    });

    // تخریب نمودار هنگام از بین رفتن کامپوننت
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className="w-[271px] h-[170px] mx-auto ">
      <canvas ref={chartRef} />
    </div>
  );
}

export default BarChart;
