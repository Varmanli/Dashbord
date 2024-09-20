import BarChart from "./components/chart/BarChart";
import Card from "./components/Card";
import SemiCircleChart from "./components/chart/SemiCircleChart";
import LineChart from "./components/chart/LineChart";
import MultiLayerDoughnutChart from "./components/chart/MultiLayerDoughnutChart";
import MultiBarChart from "./components/chart/MultiBarChart";
import {
  barChartOptions,
  lineChartConfig,
  multiLayerDoughnutChartOptions,
  semiCircleChartOptions,
} from "./utils/chartConfig";
import {
  barChartData,
  doughnutChartColors,
  doughnutChartData,
  lineChartData,
  multiChartTabsData,
  multiLayerDoughnutChartData,
  semiCirclePercentages,
  semiCircletabs,
} from "./utils/ChartData";
import DoughnutChart from "./components/chart/DoughnutChart";

function App() {
  return (
    <div className="flex flex-col justify-center items-center gap-4 my-10">
      <Card title={"Chart 1"} description={"Description"}>
        <SemiCircleChart
          data={semiCirclePercentages}
          config={semiCircleChartOptions}
          tabs={semiCircletabs}
        />
      </Card>
      <Card title={"Chart 2"} description={"Description"}>
        <BarChart data={barChartData} options={barChartOptions} />
      </Card>
      <Card title={"Chart 3"} description={"Description"}>
        <LineChart chartData={lineChartData} chartConfig={lineChartConfig} />
      </Card>
      <Card title={"Chart 4"} description={"Description"}>
        <MultiLayerDoughnutChart
          data={multiLayerDoughnutChartData}
          options={multiLayerDoughnutChartOptions}
        />
      </Card>
      <Card title={"Chart 5"} description={"Description"}>
        <DoughnutChart
          dataSets={doughnutChartData}
          colors={doughnutChartColors}
        />
      </Card>
      <Card title={"Chart 6"} description={"Description"}>
        <MultiBarChart
          tabsData={multiChartTabsData}
          options={multiLayerDoughnutChartOptions}
        />
      </Card>
    </div>
  );
}

export default App;
