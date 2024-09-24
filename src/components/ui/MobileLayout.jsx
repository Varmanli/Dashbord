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
//ui component
import MobileHeader from "./MobileHeader";
import MobileMenu from "./MobileMenu";
import Card from "./Card";

function MobileLayout() {
  return (
    <div className="md:hidden w-full">
      <MobileHeader />
      <div className="flex flex-col justify-center items-center gap-4 mt-5 w-full mb-20">
        <Card title={"Chart 1"} description={"Description"} details={true}>
          <SemiCircleChart
            data={semiCirclePercentages}
            config={semiCircleChartOptions}
            tabs={semiCircletabs}
          />
        </Card>
        <Card title={"Chart 2"} description={"Description"} details={true}>
          <BarChart data={barChartData} options={barChartOptions} />
        </Card>
        <Card title={"Chart 3"} description={"Description"} details={true}>
          <LineChart chartData={lineChartData} chartConfig={lineChartConfig} />
        </Card>
        <Card title={"Chart 4"} description={"Description"} details={true}>
          <MultiLayerDoughnutChart
            data={multiLayerDoughnutChartData}
            options={multiLayerDoughnutChartOptions}
          />
        </Card>
        <Card title={"Chart 5"} description={"Description"} details={true}>
          <DoughnutChart
            dataSets={doughnutChartData}
            colors={doughnutChartColors}
          />
        </Card>
        <Card title={"Chart 6"} description={"Description"} details={false}>
          <MultiBarChart
            tabsData={multiChartTabsData}
            options={multiLayerDoughnutChartOptions}
          />
        </Card>
        <MobileMenu />
      </div>
    </div>
  );
}

export default MobileLayout;
