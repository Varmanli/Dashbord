//line chart configs
export const lineChartConfig = {
  options: {
    scales: {
      x: {
        title: {
          display: true,
          text: "X-axis title",
        },
        ticks: {
          padding: 10,
        },
        grid: {
          display: false,
        },
      },
      y: {
        title: {
          display: true,
          text: "Y-axis title",
        },
        ticks: {
          stepSize: 20000,
          callback: function (value) {
            if (value === 0) return "0";
            return value / 1000 + "K";
          },
        },
        beginAtZero: true,
        max: 100000,
      },
    },
    plugins: {
      legend: {
        display: false, // غیرفعال کردن legend اصلی
      },
      tooltip: {
        enabled: true,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  },
};

//bar chart configs
export const barChartOptions = {
  scales: {
    x: {
      title: {
        display: true,
        text: "X-axis title",
      },
      ticks: {
        font: {
          size: 12, // اندازه فونت
        },
        align: "center", // تراز وسط برای ماه‌ها
      },
      grid: {
        display: false, // غیرفعال کردن خطوط عمودی
      },
    },
    y: {
      title: {
        display: true,
        text: "Y-axis title",
      },
      ticks: {
        stepSize: 20000, // فاصله بین هر مقدار y-axis
        callback: function (value) {
          if (value === 0) return "0"; // نمایش "0" برای مقدار صفر
          return value / 1000 + "K"; // نمایش مقادیر y با K
        },
        font: {
          size: 12, // اندازه فونت
        },
        align: "right", // تراز راست برای اعداد محور y
      },
      beginAtZero: true, // شروع از 0
      max: 100000, // حداکثر مقدار
    },
  },
  plugins: {
    legend: {
      display: false, // غیرفعال کردن نمایش عنوان dataset
    },
    tooltip: {
      enabled: true,
    },
  },
  responsive: true,
  maintainAspectRatio: false, // اجازه تغییر ابعاد نمودار
};

//bmulti bar chart config
export const multiBarOptions = {
  maintainAspectRatio: false, // غیرفعال کردن حفظ نسبت ابعاد
  scales: {
    y: {
      beginAtZero: true, // شروع از 0
      ticks: {
        stepSize: 10, // فاصله 10 واحد بین هر تیک
        font: {
          size: 12, // اندازه فونت 12px
          weight: "400", // وزن فونت 400
          lineHeight: 1.33, // ارتفاع خط (16px/12px)
          color: "#424242",
        },
      },
      min: 0, // حداقل مقدار
      max: 100, // حداکثر مقدار که 100 است
    },
    x: {
      grid: {
        display: false,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: true,
    },
  },
};

//multiLayer Doughnut Chart congigs
export const multiLayerDoughnutChartOptions = {
  responsive: true,
  cutout: "3%",
  rotation: 0, // شروع از زاویه 90 درجه
  circumference: 270, // محدوده 270 درجه‌ای برای رسم
  plugins: {
    legend: {
      display: false, // مخفی کردن لجندها
    },
    tooltip: {
      enabled: true,
    },
  },
};

// semi circle chart configs
export const semiCircleChartOptions = {
  rotation: -90,
  circumference: 180,
  cutout: "70%",
  plugins: {
    legend: {
      display: false,
    },
    tooltip: { enabled: true },
  },
  responsive: true,
  maintainAspectRatio: false,
};
