import React from "react";
import { Container, Grid } from "@material-ui/core";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import BarChartComponent from "./BarChartComponent";
import { Bar } from "react-chartjs-2";

import { generateData } from './utils';
const { labels, backgroundColor, hoverBackgroundColor } = generateData();
const sampleData = [0,0,0,0,0,0,0,0,0,0,18,1,1,0,2,1,1,2,4,5,20,14,12,16,9,18,26,25,43,39,73,55,60,65,63,99,95,130,112,115,159,108,83,71,56,58,34,28,21,6,105]



const Glassdoor = () => {
  const data = {
    labels: ["<1y", "1y-2y", "2y-5y", "5y-10y", ">10y"],
    datasets: [
      {
        label: "",
        data: [38, 239, 234, 210, 34],
        backgroundColor: "#b7edcf",
        borderColor: "transparent",
        borderWidth: 2,
        datalabels: {
          display: true,
        },
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        display: true,
      },
    },
    tooltips: {
      callbacks: {
        label: function (tooltipItem) {
          return tooltipItem.yLabel;
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          beginAtZero: true,
          display: true,
        },
        categoryPercentage: 0.1,
        barPercentage: 0.1
      },
      y: {
        display: false,
        grid: {
          display: false,
          tick: false,
        },
        ticks: {
          beginAtZero: true,
          display: false,
        },
        categoryPercentage: 0.1,
        barPercentage: 0.1,
      },
    },
  };
  const data2 = {
    labels: ["<1y", "1y-2y", "2y-5y", "5y-10y", ">10y"],
    datasets: [
      {
        label: "",
        data: [7, 54, 213, 323, 141],
        backgroundColor: "#ccc",
        borderColor: "transparent",
        borderWidth: 2,
      },
    ],
  };
  const data3 = {
    labels: ["0.0", "0.6", "1.2", "1.8", "2.4", "3.0", "3.6", "4.2", "4.8"],
    datasets: [
      {
        label: "# of Red Votes",
        data: [0, 19, 3, 5, 2, 3, 0.5, 3, 2],
        backgroundColor: "#ccc",
      },
      {
        label: "# of Blue Votes",
        data: [2, 3, 20, 5, 1, 40, 5, 3, 2],
        backgroundColor: "#ccc",
      },
      {
        label: "# of Green Votes4",
        data: [3, 10, 13, 15, 22, 30, 0.5, 3, 2],
        backgroundColor: "#ccc",
      },
      {
        label: "# of Green Votes4",
        data: [3, 10, 13, 15, 22, 30, 0.5, 3, 2],
        backgroundColor: "#ccc",
      },
      {
        label: "# of Green Votes3",
        data: [3, 10, 13, 15, 22, 30, 0.5, 3, 2],
        backgroundColor: "#ccc",
      },
      {
        label: "# of Green Votes2",
        data: [3, 10, 13, 15, 22, 30, 0.5, 3, 2],
        backgroundColor: "#ccc",
      },
    ],
  };
  return (
    <React.Fragment>
      <h2 className="d-flex align-items-center title">
        {" "}
        <i className="fas fa-star " style={{ marginRight: 4 }}></i> Glassdoor
      </h2>
      <div className="content">
        <Grid
          container
          spacing={8}
          style={{
            marginTop: 0,
            padding: "0px 30px 15px 30px",
            borderRadius: 10,
          }}
        >
          <Grid item xs={6} md={6}>
            <Grid container spacing={2} className="row-item">
              <Grid item xs={4} md={4}>
              <div style={{  textAlign: "center" }}>Company Glassdoor Ratings <b>(2,539)</b> average at:</div>
              <div style={{ color: "#1fc76a", textAlign: "center", fontSize: 17, fontWeight: 600 }}>3.7</div>
              <div style={{  textAlign: "center" }}>compared to other companies</div>
              </Grid>
              <Grid item xs={8} md={8}>
                <BarChartComponent
                  chartData={sampleData}
                  labels={labels}
                  backgroundColor={backgroundColor}
                  hoverBackgroundColor={hoverBackgroundColor}
                  activeValue='3.7'
                  activeColor="#1fc76a"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} md={6}>
            <Grid container spacing={2} className="row-item">
              <Grid item xs={4} md={4}>
              <div style={{  textAlign: "center" }}>Company Glassdoor Ratings <b>(2,539)</b> average at:</div>
              <div style={{ color: "#1fc76a", textAlign: "center", fontSize: 17, fontWeight: 600 }}>3.7</div>
              <div style={{  textAlign: "center" }}>compared to other companies</div>
              </Grid>
              <Grid item xs={8} md={8}>
                <BarChartComponent
                  chartData={sampleData}
                  labels={labels}
                  backgroundColor={backgroundColor}
                  hoverBackgroundColor={hoverBackgroundColor}
                  activeValue='3.7'
                  activeColor="#1fc76a"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
};
export default Glassdoor;
