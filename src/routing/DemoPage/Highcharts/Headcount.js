import React from "react";
import { Container, Grid } from "@material-ui/core";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
const Headcount = () => {
    
  const options1 = {
    chart: {
      type: "column",
      height: 200,
    },
    title: {
      text: "",
    },
    series: [
      {
        data: [1, 2, 1, 4, 3, 6,2,3,2,7,3,7,2,0,10,25],
      },
    ],
  };
  return (
    <React.Fragment>
      <h2 className="d-flex align-items-center title"> <i className="fas fa-cog " style={{ marginRight: 4}}></i>Headcount (Global)</h2>
      <div className="content">
        <Grid container spacing={8} style={{ marginTop: 0, padding: "0px 30px 15px 30px", borderRadius: 10 }}>
          <Grid item xs={6} md={6}  >
            <Grid container spacing={2} className="row-item" style={{justifyContent:"center",height:"40vh"}}>
              {/* <Grid item xs={4} md={4} >
                  <div style={{textAlign: "center"}}>The Tech Team globally is <b>4%</b> (1,471 / 34,262) of total headcount</div>
              </Grid>
              <Grid item xs={8} md={8} >
                <HighchartsReact highcharts={Highcharts} options={options1} />
              </Grid> */}
               <p> Sorry, we don't have enough data for this card yet!</p>
            </Grid>
          </Grid>
          <Grid item xs={6} md={6} >
          <Grid container spacing={2} className="row-item" style={{justifyContent:"center",height:"40vh"}}>
              {/* <Grid item xs={4} md={4} >
                  <div style={{textAlign: "center"}}>The Tech Team globally is <b>4%</b> (1,471 / 34,262) of total headcount</div>
              </Grid>
              <Grid item xs={8} md={8} >
                <HighchartsReact highcharts={Highcharts} options={options1} />
              </Grid> */}
               <p> Sorry, we don't have enough data for this card yet!</p>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
};
export default Headcount;
