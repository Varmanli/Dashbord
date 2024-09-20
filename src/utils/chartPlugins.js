//multi layer Doughnut plugins

export const multiLayerDoughnutLabelsPlugin = {
  id: "customLabels",
  afterDraw(chart) {
    const { ctx, chartArea } = chart;
    const datasets = chart.data.datasets;

    ctx.save();
    const xPosition = chartArea.left + chartArea.width / 1.45;
    let yPosition = chartArea.top + chartArea.height / 24;

    datasets.forEach((dataset) => {
      const total = dataset.data.reduce((acc, val) => acc + val, 0);
      const value = dataset.data[0];
      const percentage = Math.round((value / total) * 100) + "%";

      ctx.fillStyle = dataset.backgroundColor[0];
      ctx.fillRect(xPosition - 32, yPosition - 4, 8, 8);
      ctx.fillStyle = "#555555";
      ctx.font = "9px Segoe";
      ctx.textAlign = "left";
      ctx.fillText(percentage, xPosition - 20, yPosition + 3);
      yPosition += 14;
    });

    ctx.restore();
  },
};

export const multiLayerDoughnutReverseDrawPlugin = {
  id: "reverseDraw",
  beforeDatasetDraw(chart) {
    const { ctx } = chart;
    ctx.save();
    ctx.scale(-1, 1);
    ctx.translate(-chart.width, 0);
  },
  afterDatasetDraw(chart) {
    const { ctx } = chart;
    ctx.restore();
  },
};
