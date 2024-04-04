"use client";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

import { useTheme } from "next-themes";
import { siteConfig } from "@/config/site";

const UserDeviceReport = ({ height = 250 }) => {
  const { theme: mode } = useTheme();
  const series = [2200, 800, 1500];
  const options = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    labels: ["Desktop ", "Tablet", "Mobile"],
    dataLabels: {
      enabled: false,
    },
    colors: [
      siteConfig.sitePrimaryColor,
      "#FF9E69", "#FFD1A7"
    ],
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
              fontSize: "24px",
              fontWeight: 500,
              color: mode === "dark" ? "#94a3b8" : "#475569",
            },
            value: {
              show: true,
              label: "Total",
              fontSize: "18px",
              fontWeight: 600,
              color: mode === "dark" ? "#94a3b8" : "#475569",
            },
            total: {
              show: true,
              label: "Total",
              fontSize: "16px",
              fontWeight: 600,
              color: mode === "dark" ? "#94a3b8" : "#475569"
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

export default UserDeviceReport;
