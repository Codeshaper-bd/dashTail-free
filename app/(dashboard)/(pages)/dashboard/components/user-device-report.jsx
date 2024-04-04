"use client";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

import { useThemeStore } from "@/store";
import { useTheme } from "next-themes";
import { themes } from "@/config/thems";

const UserDeviceReport = ({ height = 250 }) => {
  const { theme: config, setTheme: setConfig } = useThemeStore();
  const { theme: mode } = useTheme();
  const theme = themes.find((theme) => theme.name === config);
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
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].primary})`,
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
              color: `hsl(${theme?.cssVars[
                mode === "dark" || mode === "system" ? "dark" : "light"
              ].chartLabel
                })`,
            },
            value: {
              show: true,
              label: "Total",
              fontSize: "18px",
              fontWeight: 600,
              color: `hsl(${theme?.cssVars[
                mode === "dark" || mode === "system" ? "dark" : "light"
              ].chartLabel
                })`,
            },
            total: {
              show: true,
              label: "Total",
              fontSize: "16px",
              fontWeight: 600,
              color: `hsl(${theme?.cssVars[
                mode === "dark" || mode === "system" ? "dark" : "light"
              ].chartLabel
                })`

            },
          },
        },
      },
    },
    legend: {
      position: "bottom",
      labels: {
        colors: `hsl(${theme?.cssVars[
          mode === "dark" || mode === "system" ? "dark" : "light"
        ].chartLabel
          })`,
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
