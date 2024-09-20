//line chart data
export const lineChartData = [
  {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Line 1",
        data: [63000, 97000, 90000, 20000, 82000, 5000],
        backgroundColor: "rgba(0, 200, 200, 0.5)",
        borderColor: "#637CEF",
        borderWidth: 2,
        fill: true,
        pointRadius: 0,
      },
      {
        label: "Line 2",
        data: [50000, 57000, 40000, 50000, 58000, 72000],
        backgroundColor: "#00B7C34D",
        borderColor: "#00B7C3",
        borderWidth: 2,
        fill: true,
        pointRadius: 0,
      },
    ],
  },
  {
    labels: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Line 1",
        data: [82000, 54000, 75000, 34000, 29000, 62000],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderColor: "#FF6384",
        borderWidth: 2,
        fill: true,
        pointRadius: 0,
      },
      {
        label: "Line 2",
        data: [60000, 70000, 50000, 80000, 90000, 75000],
        backgroundColor: "#FFB74D",
        borderColor: "#FF8A65",
        borderWidth: 2,
        fill: true,
        pointRadius: 0,
      },
    ],
  },
  {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Line 1",
        data: [40000, 60000, 30000, 70000, 50000, 60000],
        backgroundColor: "rgba(75, 192, 192, 0.5)",
        borderColor: "#4BC0C0",
        borderWidth: 2,
        fill: true,
        pointRadius: 0,
      },
      {
        label: "Line 2",
        data: [45000, 55000, 35000, 65000, 60000, 70000],
        backgroundColor: "#FFCE56",
        borderColor: "#FFCE56",
        borderWidth: 2,
        fill: true,
        pointRadius: 0,
      },
    ],
  },
];

//doughnut chart data
export const doughnutChartData = [
  [35, 20, 15, 10, 20], // 7 days data
  [20, 25, 15, 10, 30], // 30 days data
  [40, 10, 20, 10, 20], // 60 days data
];
export const doughnutChartColors = [
  "#A6E9ED",
  "#00666D",
  "#005B70",
  "#00B7C3",
  "#F5F5F5",
];

//Bar chart data
export const barChartData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Dataset",
      data: [76000, 80000, 65000, 75000, 64000, 95000],
      backgroundColor: "#00b7c3",
      borderColor: "#ffffff",
      borderWidth: 2, // اضافه کردن حاشیه سفید بین ستون‌ها
    },
  ],
};

//multi bar chart data
export const multiChartTabsData = [
  {
    label: "First tab",
    data: {
      labels: ["XS", "S", "M", "L", "XL", "XXL"],
      datasets: [
        {
          label: "Data 1",
          data: [65, 65, 65, 65, 65, 65],
          backgroundColor: "#93C5FD",
        },
        {
          label: "Data 2",
          data: [83, 83, 83, 83, 83, 83],
          backgroundColor: "#1D4ED8",
        },
        {
          label: "Data 3",
          data: [30, 30, 30, 30, 30, 30],
          backgroundColor: "#888888",
        },
      ],
    },
  },
  {
    label: "Second tab",
    data: {
      labels: ["XS", "S", "M", "L", "XL", "XXL"],
      datasets: [
        {
          label: "Data A",
          data: [60, 50, 60, 50, 60, 50],
          backgroundColor: "#005B70",
        },
        {
          label: "Data B",
          data: [90, 90, 90, 90, 90, 90],
          backgroundColor: "#00666D",
        },
        {
          label: "Data C",
          data: [40, 30, 40, 30, 40, 100],
          backgroundColor: "#A6E9ED",
        },
      ],
    },
  },
  {
    label: "Third tab",
    data: {
      labels: ["XS", "S", "M", "L", "XL", "XXL"],
      datasets: [
        {
          label: "Data X",
          data: [65, 75, 85, 95, 55, 45],
          backgroundColor: "#555555",
        },
        {
          label: "Data Y",
          data: [85, 95, 65, 75, 45, 55],
          backgroundColor: "#A6e",
        },
        {
          label: "Data Z",
          data: [40, 30, 50, 60, 70, 80],
          backgroundColor: "#f34",
        },
      ],
    },
  },
];

//multiLayer Doughnut Chart Data
export const multiLayerDoughnutChartData = {
  datasets: [
    {
      label: "Layer 1",
      data: [90, 10],
      backgroundColor: ["#555555", "#F5F5F5"],
      weight: 0.1,
      borderWidth: 5,
      borderColor: "#fff",
      hoverBorderWidth: 0, // حذف بردر هنگام هاور
    },
    {
      label: "Layer 2",
      data: [80, 20],
      backgroundColor: ["#2563EB", "#F5F5F5"],
      weight: 0.1,
      borderWidth: 5,
      borderColor: "#fff",
      hoverBorderWidth: 0, // حذف بردر هنگام هاور
    },
    {
      label: "Layer 3",
      data: [70, 30],
      backgroundColor: ["#3B82F6", "#F5F5F5"],
      weight: 0.1,
      borderWidth: 5,
      borderColor: "#fff",
      hoverBorderWidth: 0, // حذف بردر هنگام هاور
    },
    {
      label: "Layer 4",
      data: [50, 50],
      backgroundColor: ["#AAAAAA", "#F5F5F5"],
      weight: 0.1,
      borderWidth: 5,
      borderColor: "#fff",
      hoverBorderWidth: 0, // حذف بردر هنگام هاور
    },
    {
      label: "Layer 5",
      data: [90, 10],
      backgroundColor: ["#60A5FA", "#F5F5F5"],
      weight: 0.1,
      borderWidth: 5,
      borderColor: "#fff",
      hoverBorderWidth: 0, // حذف بردر هنگام هاور
    },
    {
      label: "Layer 6",
      data: [60, 40],
      backgroundColor: ["#1D4ED8", "#F5F5F5"],
      weight: 0.1,
      borderWidth: 5,
      borderColor: "#fff",
      hoverBorderWidth: 0, // حذف بردر هنگام هاور
    },
    {
      label: "Layer 7",
      data: [80, 20],
      backgroundColor: ["#1E3A8A", "#F5F5F5"],
      weight: 0.1,
      borderWidth: 5,
      borderColor: "#fff",
      hoverBorderWidth: 0, // حذف بردر هنگام هاور
    },
    {
      label: "Layer 8",
      data: [60, 40],
      backgroundColor: ["#BFDBFE", "#F5F5F5"],
      weight: 0.1,
      borderWidth: 5,
      borderColor: "#fff",
      hoverBorderWidth: 0, // حذف بردر هنگام هاور
    },
  ],
};

//semi circle chart data
export const semiCirclePercentages = [72, 85, 60]; // درصدهای مختلف برای تب‌ها
export const semiCircletabs = ["7 days", "30 days", "60 days"]; // عنوان تب‌ها
