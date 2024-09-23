import React, { useEffect, useRef } from "react";
import {
  Chart,
  DoughnutController,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import {
  multiLayerDoughnutLabelsPlugin,
  multiLayerDoughnutReverseDrawPlugin,
} from "../../utils/chartPlugins"; // ایمپورت پلاگین‌ها

// ثبت اجزای مورد نیاز
Chart.register(DoughnutController, ArcElement, Tooltip, Legend);

function MultiLayerDoughnutChart({ data, options }) {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    const canvas = chartRef.current;
    const ctx = canvas.getContext("2d");

    // تخریب نمودار قبلی در صورت وجود
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    // ایجاد نمودار جدید
    chartInstanceRef.current = new Chart(ctx, {
      type: "doughnut",
      data,
      options,
      plugins: [
        multiLayerDoughnutLabelsPlugin,
        multiLayerDoughnutReverseDrawPlugin,
      ],
    });

    return () => {
      // تخریب نمودار هنگام از بین رفتن کامپوننت
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [data, options]); // وابستگی به data و options برای به‌روزرسانی نمودار

  return (
    <div className="w-[235px] h-[235px] md:w-[90%]  md:h-auto mx-auto">
      <canvas ref={chartRef}></canvas>
    </div>
  );
}

export default MultiLayerDoughnutChart;
