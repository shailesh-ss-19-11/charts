import React,{useState} from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement,Tooltip, Legend } from "chart.js";
const TicketSummery = () => {
  Chart.register(ArcElement, Tooltip, Legend);
  const chartdata ={
    Open : 200,
    Resolved: 80,
    Closed: 87,
    Pending: 30
  }
  const data = {
    labels: Object.keys(chartdata),
    datasets: [
      {
        label: "Interaction Summery",
        data: Object.values(chartdata),
        borderColor: ["rgba(255,206,86,0.2)"],
        backgroundColor: [
          "rgba(232,99,132,1)",
          "rgba(232,211,6,1)",
          "rgba(54,162,235,1)",
          "rgba(255,159,64,1)",
          "rgba(153,102,255,1)",
        ],
        pointBackgroundColor: "rgba(255,206,86,0.2)",
      },
    ],
  };
  const options = {
    plugins: {
      title: {
        display: true,
        text: "Doughnut Chart",
        color: "blue",
        font: {
          size: 34,
        },
        padding: {
          top: 30,
          bottom: 30,
        },
        responsive: true,
        animation: {
          animateScale: true,
        },
      },
    },
};
  return (
      <div>
      <Doughnut data={data} options={options} />
    </div>
  );
};
export default TicketSummery;