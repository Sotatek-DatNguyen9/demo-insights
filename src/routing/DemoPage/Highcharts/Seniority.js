import React from "react";
import { Container, Grid } from "@material-ui/core";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { Bar } from "react-chartjs-2";
const Seniority = () => {
  const data = {
    labels: ["<1y", "1y-2y", "2y-5y", "5y-10y", ">10y"],
    datasets: [
      {
        label: "",
        data: [38, 239, 234, 210, 34],
        backgroundColor: "#b7edcf",
        borderColor: "transparent",
        borderWidth: 2,
      },
      
    ],
   
    
  };
  
  const options = {
    responsive:false,
    plugins: {
        legend: {
          display: false
        },
        datalabels:{
          display:true,
          anchor:'end',
          align  :'end',
          color:"#1fc76a",
          font: {
            weight: 'bold',
            size: 14,
          }
        },
       
        
      },
    tooltips: {
        callbacks: {
           label: function(tooltipItem) {
                  return tooltipItem.yLabel;
           }
        }
    },
    scales: {
        x: {
          grid: {
            display:false,
          },
          ticks: {
            beginAtZero: true,
            display: true,
        }
        },
        y: {
          display:false,
          grid: {
            display:false,
            tick:false
          },
          ticks: {
            beginAtZero: true,
            display: false,
            stepSize: 100,
            
        }
        },
     }
  };
  const data2 = {
    labels: ["<1y", "1y-2y", "2y-5y", "5y-10y", ">10y"],
    datasets: [
      {
        label: "",
        data: [7, 54, 213, 323, 141],
        backgroundColor: "#b7edcf",
        borderColor: "transparent",
        borderWidth: 2,
      },
    ],
    
  };
  
  return (
    <React.Fragment>
      <h2 className="d-flex align-items-center title">
        <i className="fas fa-users" style={{ marginRight: 4 }} /> Seniority (SG)
      </h2>
      <div className="content">
        <Grid
          container
          spacing={8}
          style={{ marginTop: 0, padding: "0px 30px 15px 30px" }}
        >
          <Grid item xs={6} md={6}>
            <Grid container spacing={2} className="row-item">
              <Grid item xs={4} md={4}>
                <div style={{textAlign: "center"}}>
                    Tech Team in SG is<span  style={{ color: "#1fc76a", textAlign: "center",  fontWeight: 600 }}> evenly distributed </span>in terms of seniority
                </div>
              </Grid>
              <Grid item xs={8} md={8}>
                <Bar data={data} options={options} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} md={6}>
            <Grid container spacing={2} className="row-item">
              <Grid item xs={4} md={4}>
                <div style={{textAlign: "center"}}>Tech Team in SG consists mainly of <span  style={{ color: "#1fc76a", textAlign: "center", fontWeight: 600 }}> seniors</span></div>
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
export default Seniority;
