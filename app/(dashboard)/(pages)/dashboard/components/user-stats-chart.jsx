"use client";

import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useTheme } from "next-themes";
import { siteConfig } from "@/config/site";

const UserStats = ({ height = 250 }) => {

  const { theme: mode } = useTheme();

  const series = [1200, 1400];

  const options = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    labels: ["Old User", "New User"],
    dataLabels: {
      enabled: false,
    },
    colors: [siteConfig.sitePrimaryColor, "#06B6D4"],
    tooltip: {
      theme: mode === "dark" ? "dark" : "light",
    },
    stroke: {
      width: 0
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            name: {
              show: true,
              fontSize: "14px",
              fontWeight: 600,
              colors: mode === "dark" ? "#94a3b8" : "#475569",
            },
            value: {
              show: true,
              label: "Total",
              fontSize: "14px",
              fontWeight: 600,
              color: mode === "dark" ? "#94a3b8" : "#475569",
            },
            total: {
              show: true,
              label: "Total",
              fontSize: "16px",
              fontWeight: 600,
              color: mode === "dark" ? "#94a3b8" : "#475569",
            },
          },
        },
      },
    },
    legend: {
      position: "bottom",
      labels: {
        colors: mode === "dark" ? "#94a3b8" : "#475569",
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
      type="donut"
      height={height}
      width={"100%"}
    />
  );
};

export default UserStats;
