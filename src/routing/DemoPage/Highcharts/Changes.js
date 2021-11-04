import React from "react";
import { Container, Grid } from "@material-ui/core";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { Doughnut } from "react-chartjs-2";
const Changes = () => {
  const data = {
    labels: ["Red", "Blue"],
    datasets: [
      {
        label: "# of Votes",
        data: [20, 3],
        backgroundColor: ["#ccc", "#1fc76a"],
        borderColor: ["#ccc", "#1fc76a"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        display: true,
      },
    },
    tooltip: {
      callbacks: {
        label: function (tooltipItem) {
          return tooltipItem.dataset.data;
        },
      },
    },
  };
  return (
    <React.Fragment>
      <h2 className="d-flex align-items-center title">
        {" "}
        <i className="fas fa-chart-line" style={{ marginRight: 4 }}></i>Title
        Changes (SG)
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
              <Grid item xs={8} md={8}>
                <Doughnut
                  data={data}
                  options={options}
                  width={200}
                  height={200}
                />
              </Grid>
              <Grid item xs={4} md={4}>
                <div
                  style={{
                    textAlign: "center",
                    color: "#1fc76a",
                    fontSize: 50,
                    fontWeight: 600,
                  }}
                >
                  33%
                </div>
                <div style={{ textAlign: "center", fontSize: 15 }}>
                  Female Engineers
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} md={6}>
            <Grid container spacing={2} className="row-item">
              <Grid item xs={8} md={8}>
                <Doughnut
                  data={data}
                  options={options}
                  width={200}
                  height={200}
                />
              </Grid>
              <Grid item xs={4} md={4}>
                <div
                  style={{
                    textAlign: "center",
                    color: "#1fc76a",
                    fontSize: 50,
                    fontWeight: 600,
                  }}
                >
                  22%
                </div>
                <div style={{ textAlign: "center", fontSize: 15 }}>
                  Female Engineers
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
};
export default Changes;
