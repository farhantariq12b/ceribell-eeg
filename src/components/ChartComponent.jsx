import React from "react";
import PropTypes from "prop-types";
import { Line } from "react-chartjs-2";
import "chartjs-adapter-date-fns";
import { enUS } from "date-fns/locale";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  TimeScale,
  Tooltip,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  TimeScale
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  aspectRatio: 2,
  plugins: {
    title: {
      display: false,
      text: "",
    },
    tooltip: {
      callbacks: {
        title: () => {
          return "";
        },
        label: (tooltipItem) => {
          var label = "";

          if (label) {
            label += ": ";
          }
          if (tooltipItem.formattedValue <= 40) {
            label += tooltipItem.formattedValue + "  good quality";
          } else if (tooltipItem.formattedValue > 40) {
            label += tooltipItem.formattedValue + "  bad quality";
          }
          return label;
        },
      },
    },
  },
  interaction: {
    intersect: false,
    mode: "index",
  },
  scales: {
    x: {
      display: true,
      type: "time",
      time: {
        unit: "second",
        displayFormats: {
          second: "m:ss",
        },
      },
      adapters: {
        date: {
          locale: enUS,
        },
      },
      ticks: {
        autoSkip: true,
        stepSize: 10,
      },
    },
    y: {
      min: -100,
      max: 100,
      ticks: {
        stepSize: 100,
      },
      grid: {
        drawBorder: false,
      },
    },
  },
  color: "#0000FF",
  backgroundColor: "#0000FF",
  borderColor: "#0000FF",
  elements: {
    point: {
      radius: 0,
    },
    line: {
      borderWidth: 0.5,
      tension: 0.1,
      backgroundColor: "black",
    },
  },
};

const ChartComponent = ({ csvData }) => {
  return (
    <div>
      {csvData?.length ? (
        <div style={{ width: "8000px" }}>
          <Line
            data={{
              labels: csvData?.map((value, index) => index),
              datasets: [
                {
                  data: csvData,
                  fill: false,
                },
              ],
            }}
            options={options}
          />
        </div>
      ) : (
        <p>Loading Charts</p>
      )}
    </div>
  );
};

ChartComponent.propTypes = {
  csvData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
};

export default ChartComponent;
