import { Button, Grid } from "@material-ui/core";
import React, { Component } from "react";
import "./Content2.scss";
function Content2(props) {
  return (
    <div className="content-2-wrapper">
      <div className="css-124pr08">
        <div className="css-1ucnjt8">
          <div className="css-14k4spz">
            <Grid container spacing={8} className="align-items-center">
              <Grid item xs={12} md={6}>
                <div className="css-1udzyt7">
                  <img
                    src="https://images.snaphunt.com/assets/images/w_600/complete-profile.png"
                    className="ui fluid image"
                  />
                </div>
              </Grid>
              <Grid item xs={12} md={6}>
                <h2 className="ui teal medium header css-1s1po1q">
                  Jobseekers
                </h2>
                <h2 className="ui huge header css-15bxtoc">
                  Find jobs with reputable companies, anywhere in the world
                </h2>
                <p className="css-rmhymj e56oal20">
                  Receive job proposals from the world’s top employers by
                  creating your Snaphunt profile and letting our AI match you
                  with global jobs that are aligned with your experience, goals
                  &amp; preferences.
                </p>
                <div className="css-1xaekgw">
                <Button variant="contained" color="success">Submit your CV</Button>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
        <div className="css-1rdlosm">
          <Grid container>
            <Grid item xs={12} sm={12} lg={8}>
              <div className="css-14k4spz">
                <Grid container spacing={6}>
                  <Grid item xs={12}>
                    <div className="ui huge header">
                      Accelerate your job search with Snaphunt
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <div className="css-w6dtwh">
                      <img
                        src="https://images.snaphunt.com/assets/vectors/icons/bell-icon.svg"
                        className="ui image"
                      />
                      <div className>
                        <div className="ui large header css-ou39ru">
                          <h3>Stay updated about relevant roles</h3>
                        </div>
                        <p className="css-rmhymj e56oal20">
                          We let you know as soon as a matching job comes up, so
                          you know what roles are out there, and can apply with
                          a simple click.
                        </p>
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <div className="css-w6dtwh">
                      <img
                        src="https://images.snaphunt.com/assets/vectors/icons/doc.svg"
                        className="ui image"
                      />
                      <div className>
                        <div className="ui large header css-ou39ru">
                          <h3>Receive job invitations from employers</h3>
                        </div>
                        <p className="css-rmhymj e56oal20">
                          Get invitations to apply from the world’s top
                          employers while maintaining the confidentiality of
                          your profile.
                        </p>
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <div className="css-w6dtwh">
                      <img
                        src="https://images.snaphunt.com/assets/vectors/icons/interview-icon.svg"
                        className="ui image"
                      />
                      <div className>
                        <div className="ui large header css-ou39ru">
                          <h3>Improve your interview chances by 5x</h3>
                        </div>
                        <p className="css-rmhymj e56oal20">
                          Our AI matches you to roles in line with your
                          experience &amp; skills, so you are 5 times more
                          likely to be interviewed when you apply for a matching
                          job on Snaphunt.
                        </p>
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <div className="css-w6dtwh">
                      <img
                        src="https://images.snaphunt.com/assets/vectors/icons/growth.svg"
                        className="ui image"
                      />
                      <div className>
                        <div className="ui large header css-ou39ru">
                          <h3>Accelerate your career without boundaries</h3>
                        </div>
                        <p className="css-rmhymj e56oal20">
                          Snaphunt matches you to relevant jobs from around the
                          world, so you find the best jobs, no matter where you
                          are based.
                        </p>
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <div className="css-w6dtwh">
                      <img
                        src="https://images.snaphunt.com/assets/vectors/icons/track.svg"
                        className="ui image"
                      />
                      <div className>
                        <div className="ui large header css-ou39ru">
                          <h3>Track your applications till hire</h3>
                        </div>
                        <p className="css-rmhymj e56oal20">
                          Receive real time updates on the status of your
                          applications so that you always know where you stand
                          in each process.
                        </p>
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <div className="css-w6dtwh">
                      <img
                        src="https://images.snaphunt.com/assets/vectors/icons/candidate.svg"
                        className="ui image"
                      />
                      <div className>
                        <div className="ui large header css-ou39ru">
                          <h3>Get job search &amp; career support</h3>
                        </div>
                        <p className="css-rmhymj e56oal20">
                          Make your job search more effective and stay ahead in
                          your career with tools, insights &amp; advice from
                          experts to support each stage of your career
                          lifecycle.
                        </p>
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} lg={4} style={{ textAlign: "center", marginTop: 40 }}>
              <img
                src="https://images.snaphunt.com/assets/images/snap-mobile.png"
                className="ui medium centered image"
              />
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default Content2;
