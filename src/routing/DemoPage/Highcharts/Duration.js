import React from "react";
import { Container, Grid } from "@material-ui/core";
import { Bar } from "react-chartjs-2";
const Duration = () => {
  const data = {
    labels: ["<1y", "1y-2y", "2y-5y", "5y-10y", ">10y"],
    datasets: [
      {
        label: "",
        data: [340, 411, 86, 8, 2],
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
  
  
  return (
    <React.Fragment>
      <h2 className="d-flex align-items-center title"> <i className="fas fa-clock" style={{ marginRight: 4}}></i>Duration of Service (SG)</h2>
      <div className="content">
        <Grid container spacing={8} style={{ marginTop: 0, padding: "0px 30px 15px 30px", borderRadius: 10 }}>
          <Grid item xs={6} md={6}  >
            <Grid container spacing={2} className="row-item">
              <Grid item xs={4} md={4} >
                  <div style={{textAlign: "center"}}>The tech team in SG serve for the following duration</div>
              </Grid>
              <Grid item xs={8} md={8} >
                <Bar data={data} options={options} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} md={6} >
            <Grid container spacing={2} className="row-item">
              <Grid item xs={4} md={4} >
                <div style={{textAlign: "center"}}>The tech team in SG serve for the following duration</div>
              </Grid>
              <Grid item xs={8} md={8} >
                <Bar data={data} options={options} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
};
export default Duration;
