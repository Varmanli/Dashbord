//charts
import BarChart from "../chart/BarChart";
import SemiCircleChart from "../chart/SemiCircleChart";
import LineChart from "../chart/LineChart";
import MultiLayerDoughnutChart from "../chart/MultiLayerDoughnutChart";
import MultiBarChart from "../chart/MultiBarChart";
import DoughnutChart from "../chart/DoughnutChart";
//configs chart
import {
  barChartOptions,
  lineChartConfig,
  multiBarOptions,
  multiLayerDoughnutChartOptions,
  semiCircleChartOptions,
} from "../../utils/chartConfig";
//data chart
import {
  barChartData,
  doughnutChartColors,
  doughnutChartData,
  lineChartData,
  multiChartTabsData,
  multiLayerDoughnutChartData,
  semiCirclePercentages,
  semiCircletabs,
} from "../../utils/chartData";
//ui
import Card from "./Card";

function DesktopLayout() {
  return (
    <div className="flex flex-wrap gap-4 py-2 pl-2 w-[81vw] border border-l  h-[calc(100vh-113px)]  custom-scroll overflow-y-auto">
      {/* First Row */}
      <Card
        title={"Chart 1"}
        description={"Description"}
        className="w-[48%] lg:w-[25.79%]"
        details={true}
      >
        <SemiCircleChart
          data={semiCirclePercentages}
          config={semiCircleChartOptions}
          tabs={semiCircletabs}
        />
      </Card>
      <Card
        title={"Chart 2"}
        description={"Description"}
        className="w-[48%] lg:w-[28.79%]"
        details={true}
      >
        <BarChart data={barChartData} options={barChartOptions} />
      </Card>
      <Card
        title={"Chart 3"}
        description={"Description"}
        className="md:w-[100%]  lg:w-[41%]"
        details={true}
      >
        <LineChart chartData={lineChartData} chartConfig={lineChartConfig} />
      </Card>

      {/* Second Row */}
      <Card
        title={"Chart 4"}
        description={"Description"}
        className="md:w-[48%] lg:w-[25.29%]"
        details={true}
      >
        <MultiLayerDoughnutChart
          data={multiLayerDoughnutChartData}
          options={multiLayerDoughnutChartOptions}
        />
      </Card>
      <Card
        title={"Chart 5"}
        description={"Description"}
        className="md:w-[48%]  lg:w-[26.29%]"
        details={true}
      >
        <DoughnutChart
          dataSets={doughnutChartData}
          colors={doughnutChartColors}
        />
      </Card>
      <Card
        title={"Chart 6"}
        description={"Description"}
        className="md:w-[100%]  lg:w-[44%]"
        details={false}
      >
        <MultiBarChart
          tabsData={multiChartTabsData}
          options={multiBarOptions}
        />
      </Card>
    </div>
  );
}

export default DesktopLayout;
