/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import useStyles from "./styles";
import { Container, Grid } from "@material-ui/core";
import "./styles.scss";
import StarRatings from "react-star-ratings";
import img2 from "./image/Google.png";
import img1 from "./image/microsoft.png";
const data = [
  {
    id: 1,
    img1: img1,
    name1: "Microsoft",
    star1: 4.4,
    img2: img2,
    name2: "Google",
    star2: 4.5,
  },
  {
    id: 2,
    img1: img1,
    name1: "Microsoft",
    star1: 4.4,
    img2: img2,
    name2: "Google",
    star2: 4.5,
  },
  {
    id: 3,
    img1: img1,
    name1: "Microsoft",
    star1: 4.4,
    img2: img2,
    name2: "Google",
    star2: 4.5,
  },
  {
    id: 4,
    img1: img1,
    name1: "Microsoft",
    star1: 4.4,
    img2: img2,
    name2: "Google",
    star2: 4.5,
  },
  {
    id: 4,
    img1: img1,
    name1: "Microsoft",
    star1: 4.4,
    img2: img2,
    name2: "Google",
    star2: 4.5,
  },
  {
    id: 4,
    img1: img1,
    name1: "Microsoft",
    star1: 4.4,
    img2: img2,
    name2: "Google",
    star2: 4.5,
  },
];
const Footer = () => {
  const styles = useStyles();
  return (
    <div className={styles.footerWrap}>
      <Container>
        <div className="footer">
          <h2 className="title">Popular Company Comparisons</h2>
            <Grid container spacing={6} className="content-footer">
              {data.map((item, index) => {
                return (
                  <Grid item xs={6} md={6} className="row-item">
                    <Grid container className="item">
                      <Grid item xs={6} md={6} className="col-6 content content1">
                        <div className="d-flex align-items-center">
                          <div className="image">
                            <img src={item.img1}></img>
                          </div>
                          <div className="name">{item.name1}</div>
                        </div>
                        <div className="star">
                          {item.star1}
                          <StarRatings
                            rating={item.star1}
                            starDimension="13px"
                            starSpacing="0px"
                            starRatedColor="#ffe03c"
                          />
                          <span>(Glassdoor)</span>
                        </div>
                      </Grid>
                      <Grid item xs={6} md={6} className="col-6 content content2">
                        <div className="d-flex align-items-center">
                          <div className="image">
                            <img src={item.img2}></img>
                          </div>
                          <div className="name">{item.name2}</div>
                        </div>
                        <div className="star">
                          {item.star2}
                          <StarRatings
                            rating={item.star2}
                            starDimension="13px"
                            starSpacing="0px"
                            starRatedColor="#ffe03c"
                          />
                          <span>(Glassdoor)</span>
                        </div>
                      </Grid>
                    </Grid>
                  </Grid>
                );
              })}
             </Grid>
          </div>
      </Container>
    </div>
  );
};
export default Footer;
