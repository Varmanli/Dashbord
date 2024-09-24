import React, { useMemo } from "react";
// charts
import BarChart from "../chart/BarChart";
import SemiCircleChart from "../chart/SemiCircleChart";
import LineChart from "../chart/LineChart";
import MultiLayerDoughnutChart from "../chart/MultiLayerDoughnutChart";
import MultiBarChart from "../chart/MultiBarChart";
import DoughnutChart from "../chart/DoughnutChart";
// configs chart
import {
  barChartOptions,
  doughnutOptions,
  lineChartConfig,
  multiLayerDoughnutChartOptions,
  semiCircleChartOptions,
} from "../../utils/chartConfig";
// data chart
import {
  barChartData,
  doughnutChartColors,
  doughnutChartData,
  lineChartData,
  lineChartTabColors,
  multiChartTabsData,
  multiLayerDoughnutChartData,
  semiCirclePercentages,
  semiCircletabs,
} from "../../utils/chartData";
// ui component
import MobileHeader from "./MobileHeader";
import MobileMenu from "./MobileMenu";
import Card from "./Card";

function MobileLayout() {
  const chartConfigs = [
    {
      title: "Chart 1",
      description: "Description",
      details: true,
      component: (
        <SemiCircleChart
          data={semiCirclePercentages}
          config={semiCircleChartOptions}
          tabs={semiCircletabs}
        />
      ),
    },
    {
      title: "Chart 2",
      description: "Description",
      details: true,
      component: <BarChart data={barChartData} options={barChartOptions} />,
    },
    {
      title: "Chart 3",
      description: "Description",
      details: true,
      component: (
        <LineChart
          chartData={lineChartData}
          chartConfig={lineChartConfig}
          tabColors={lineChartTabColors}
        />
      ),
    },
    {
      title: "Chart 4",
      description: "Description",
      details: true,
      component: (
        <MultiLayerDoughnutChart
          data={multiLayerDoughnutChartData}
          options={multiLayerDoughnutChartOptions}
        />
      ),
    },
    {
      title: "Chart 5",
      description: "Description",
      details: true,
      component: (
        <DoughnutChart
          dataSets={doughnutChartData}
          colors={doughnutChartColors}
          options={doughnutOptions}
        />
      ),
    },
    {
      title: "Chart 6",
      description: "Description",
      details: false,
      component: (
        <MultiBarChart
          tabsData={multiChartTabsData}
          options={multiLayerDoughnutChartOptions}
        />
      ),
    },
  ];

  return (
    <div className="md:hidden w-full">
      <MobileHeader />
      <div className="flex flex-col justify-center items-center gap-4 mt-5 w-full mb-20">
        {chartConfigs.map((chart, index) => (
          <Card
            key={index}
            title={chart.title}
            description={chart.description}
            details={chart.details}
          >
            {chart.component}
          </Card>
        ))}
        <MobileMenu />
      </div>
    </div>
  );
}

export default MobileLayout;
