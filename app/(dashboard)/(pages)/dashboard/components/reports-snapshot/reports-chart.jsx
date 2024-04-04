"use client";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import {
  getGridConfig,
  getXAxisConfig,
  getYAxisConfig,
} from "@/lib/appex-chart-options";
import { useTheme } from "next-themes";
const ReportsChart = ({ series, chartColor, height = 300 }) => {
  const { theme: mode } = useTheme();

  const options = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 4,
    },
    colors: [chartColor],
    grid: getGridConfig(mode === "dark" ? "#334155" : "#e2e8f0"),
    fill: {
      type: "gradient",
      colors: [chartColor],
      gradient: {
        shadeIntensity: 0.1,
        opacityFrom: 0.4,
        opacityTo: 0.1,
        stops: [50, 100, 0],
      },
    },
    yaxis: getYAxisConfig(mode === "dark" ? "#94a3b8" : "#475569"),
    xaxis: getXAxisConfig(mode === "dark" ? "#94a3b8" : "#475569"),
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  };
  return (
    <Chart
      options={options}
      series={series}
      type="area"
      height={height}
      width={"100%"}
    />
  );
};

export default ReportsChart;
