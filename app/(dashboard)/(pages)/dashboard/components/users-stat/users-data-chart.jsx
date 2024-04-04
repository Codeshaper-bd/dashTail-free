"use client";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

import { useTheme } from "next-themes";
import { getGridConfig } from "@/lib/appex-chart-options";
import { siteConfig } from "@/config/site";

const UsersDataChart = ({ height = 160 }) => {

  const { theme: mode } = useTheme();

  const series = [
    {
      data: [400, 60, 448, 50, 540, 580, 690, 800],
    },
  ];

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
      width: 0,
    },
    colors: [siteConfig.sitePrimaryColor],
    tooltip: {
      theme: mode === "dark" ? "dark" : "light",
    },
    grid: getGridConfig(mode === "dark" ? "#334155" : "#e2e8f0"),
    yaxis: {
      show: false,
    },
    bar: {
      columnWidth: "100%",
      barHeight: "100%",
    },

    xaxis: {
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
      },
    },
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
        type="bar"
        height={height}
        width={"100%"}
    />
  );
};

export default UsersDataChart;
