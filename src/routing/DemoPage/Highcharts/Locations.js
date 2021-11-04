import React from "react";
import { Container, Grid } from "@material-ui/core";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { Bar } from "react-chartjs-2";
const Locations = () => {
  const data = {
    labels: ["Singapore", "China", "Indonesia", "Vietnam", "Taiwan"],
    datasets: [
      {
        label: "",
        data: [847, 234, 115, 65, 59],
        backgroundColor: "#b7edcf",
        borderColor: "transparent",
        borderWidth: 2,
      },
    ],
  };
  const data2 = {
    labels: ["Singapore", "India", "Indonesia", "China", "Vietnam"],
    datasets: [
      {
        label: "",
        data: [750, 284, 150, 109, 72],
        backgroundColor: "#b7edcf",
        borderColor: "transparent",
        borderWidth: 2,
      },
    ],
  };
  const options = {
    indexAxis: "y",
    // Elements options apply to all of the options unless overridden in a dataset
    // In this case, we are setting the border of each horizontal bar to be 2px wide
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: "right",
        display: false,
      },
      // title: {
      //   display: true,
      //   text: 'Chart.js Horizontal Bar Chart',
      // },
    },
    scales: {
      x: {
        display: false,
        grid: {
          display: false,
        },
        ticks: {
          beginAtZero: true,
          display: true,
        },
      },
      y: {
       
        grid: {
          display: false,
          tick: false,
        },
    //     ticks: {
    //       beginAtZero: true,
    //       display: false,
    //     },
      },
    },
  };
  // const options = {
  //   plugins: {
  //       legend: {
  //         display: false
  //       },
  //       datalabels:{
  //         display:true,
  //       }
  //     },
  //   tooltips: {
  //       callbacks: {
  //          label: function(tooltipItem) {
  //                 return tooltipItem.yLabel;
  //          }
  //       }
  //   },
  //   scales: {
  //       x: {
  //         grid: {
  //           display:false,
  //         },
  //         ticks: {
  //           beginAtZero: true,
  //           display: true
  //       }
  //       },
  //       y: {
  //         display:false,
  //         grid: {
  //           display:false,
  //           tick:false
  //         },
  //         ticks: {
  //           beginAtZero: true,
  //           display: false
  //       }
  //       },
  //    }
  // };
  return (
    <React.Fragment>
      <h2 className="d-flex align-items-center title">
        {" "}
        <i className="fas fa-globe-americas" style={{ marginRight: 4 }}></i>Tech
        Team Locations
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
                <div style={{textAlign: "center"}}>Top 5 locations with Tech Headcount (including SG):</div>
              </Grid>
              <Grid item xs={8} md={8}>
                <Bar data={data} options={options} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} md={6}>
            <Grid container spacing={2} className="row-item">
              <Grid item xs={4} md={4}>
                <div style={{textAlign: "center"}}>Top 5 locations with Tech Headcount (including SG):</div>
              </Grid>
              <Grid item xs={8} md={8}>
                <Bar data={data2} options={options} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
};
export default Locations;
