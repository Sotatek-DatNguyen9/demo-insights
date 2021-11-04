import React from "react";
import { Container, Grid } from "@material-ui/core";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
const Hiring = () => {
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
        data: [1, 2, 1, 4, 3, 6, 2, 3, 2, 7, 3, 7, 2, 0, 10, 25],
      },
    ],
  };
  return (
    <React.Fragment>
      <h2 className="d-flex align-items-center title">
        {" "}
        <i className="fas fa-history" style={{ marginRight: 4 }}></i>Hiring
        Background (SG)
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
                <div style={{ textAlign: "center" }}>
                  The current Tech Team in SG comprises hires from:
                </div>
                <div
                  style={{
                    marginTop: 10,
                    fontWeight: 600,
                    textAlign: "center",
                  }}
                >
                  Sea, Paypal, IBM , Autodesk, Works Applications
                </div>
              </Grid>
              <Grid item xs={8} md={8}>
                <HighchartsReact highcharts={Highcharts} options={options1} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} md={6}>
            <Grid container spacing={2} className="row-item">
              <Grid item xs={4} md={4}>
                <div style={{ textAlign: "center" }}>
                  The current Tech Team in SG comprises hires from:
                </div>
                <div
                  style={{
                    marginTop: 10,
                    fontWeight: 600,
                    textAlign: "center",
                  }}
                >
                  Sea, Paypal, IBM , Autodesk, Works Applications
                </div>
              </Grid>
              <Grid item xs={8} md={8}>
                <HighchartsReact highcharts={Highcharts} options={options1} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
};
export default Hiring;
