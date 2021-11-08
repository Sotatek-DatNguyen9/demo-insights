import { Grid } from "@material-ui/core";
import React from "react";
import './Footer.scss'
function Footer(props) {
  return (
    <div className="footer-wrapper">
      <div className="css-1fn09h8">
        <div className="container">
          <Grid container spacing={4} style={{ justifyContent: "center"}} >
            <Grid item xs={12} md={3}>
              <div className="css-3i4eun">
                <img
                  src="https://images.snaphunt.com/assets/vectors/icons/logoheader.svg"
                  className="ui small centered image css-1hj6uzr"
                />
                <br/>
                © 2020 Snaphunt Pte. Ltd.
              </div>
            </Grid>
            <Grid container item spacing={2} style={{ justifyContent: "space-between"}} xs={12} md={6}>
              <Grid item xs={6} sm={3} md={6} lg={3}>
                <div role="list" className="ui link relaxed list">
                  <div className="header-item-item">
                    <div className="ui teal small header-item css-893sjf">
                      About Snaphunt
                    </div>
                  </div>
                  <a
                    role="listitem"
                    className="item css-1ko80kz"
                    href="https://careers.snaphunt.com"
                    rel="noopener noreferrer"
                  >
                    Careers
                  </a>
                  <a role="listitem" className="item css-1ko80kz" href="/help">
                    FAQs
                  </a>
                  <a
                    role="listitem"
                    className="item css-1ko80kz"
                    href="/contact"
                  >
                    Contact Us
                  </a>
                  <a
                    role="listitem"
                    className="item css-1ko80kz"
                    href="/job-listing"
                  >
                    Browse Jobs
                  </a>
                  <a
                    role="listitem"
                    className="item css-1ko80kz"
                    href="/terms-conditions"
                  >
                    Terms of Use
                  </a>
                  <a
                    role="listitem"
                    className="item css-1ko80kz"
                    href="/privacy-policy"
                  >
                    Privacy Policy
                  </a>
                </div>
              </Grid>
              <Grid item xs={6} sm={3} md={6} lg={3}>
                <div role="list" className="ui link relaxed list">
                  <div className="header-item-item">
                    <div className="ui teal small header-item css-893sjf">
                      Popular Jobs
                    </div>
                  </div>
                  <a
                    role="listitem"
                    className="item css-1ko80kz"
                    href="/job-listing/all-countries/all-cities/data science & analytics"
                  >
                    Data Science Jobs
                  </a>
                  <a
                    role="listitem"
                    className="item css-1ko80kz"
                    href="/job-listing/all-countries/all-cities/technology"
                  >
                    IT Jobs
                  </a>
                  <a
                    role="listitem"
                    className="item css-1ko80kz"
                    href="/job-listing/all-countries/all-cities/sales"
                  >
                    Sales Jobs
                  </a>
                  <a
                    role="listitem"
                    className="item css-1ko80kz"
                    href="/job-listing/all-countries/all-cities/marketing"
                  >
                    Marketing Jobs
                  </a>
                  <a
                    role="listitem"
                    className="item css-1ko80kz"
                    href="/job-listing/all-countries/all-cities/human resources"
                  >
                    HR Jobs
                  </a>
                  <a
                    role="listitem"
                    className="item css-1ko80kz"
                    href="/job-listing/all-countries/all-cities/accounting & finance"
                  >
                    Accounting Jobs
                  </a>
                  <a
                    role="listitem"
                    className="item css-1ko80kz"
                    href="/job-listing/all-countries/all-cities/media"
                  >
                    Media Jobs
                  </a>
                </div>
              </Grid>
              <Grid item xs={6} sm={3} md={6} lg={3}>
                <div role="list" className="ui link relaxed list">
                  <div className="header-item-item">
                    <div className="ui teal small header-item css-893sjf">
                      Popular Locations
                    </div>
                  </div>
                  <a
                    role="listitem"
                    className="item css-1ko80kz"
                    href="/job-listing/india/delhi ncr - new delhi"
                  >
                    Jobs in Delhi
                  </a>
                  <a
                    role="listitem"
                    className="item css-1ko80kz"
                    href="/job-listing/india/mumbai - south"
                  >
                    Jobs in Mumbai
                  </a>
                  <a
                    role="listitem"
                    className="item css-1ko80kz"
                    href="/job-listing/india/bengaluru - central"
                  >
                    Jobs in Bengaluru
                  </a>
                  <a
                    role="listitem"
                    className="item css-1ko80kz"
                    href="/job-listing/singapore"
                  >
                    Jobs in Singapore
                  </a>
                  <a
                    role="listitem"
                    className="item css-1ko80kz"
                    href="/job-listing/indonesia/jakarta"
                  >
                    Jobs in Jakarta
                  </a>
                  <a
                    role="listitem"
                    className="item css-1ko80kz"
                    href="/job-listing/malaysia/kuala lumpur"
                  >
                    Jobs in Kuala Lumpur
                  </a>
                  <a
                    role="listitem"
                    className="item css-1ko80kz"
                    href="/job-listing/philippines/manila"
                  >
                    Jobs in Manila
                  </a>
                </div>
              </Grid>
            </Grid>
            <Grid item xs={12} sm>
              <div className="ui teal small center aligned header-item css-1bcxy5f">
                Join the conversation
              </div>
              <div className="css-1lgcwbb">
                <Grid container spacing={1} style={{ justifyContent: "center" }}>
                  <Grid item>
                    <a
                      href="https://www.facebook.com/snaphuntjobs/"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="ui tiny circular icon button"
                      role="button"
                    >
                      <i
                        aria-hidden="true"
                        className="sh-logo-fb-simple-1 icon"
                      />
                    </a>
                  </Grid>
                  <Grid item>
                    <a
                      href="https://twitter.com/snaphuntjobs/"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="ui tiny circular icon button"
                      role="button"
                    >
                      <i
                        aria-hidden="true"
                        className="sh-logo-twitter-2 icon"
                      />
                    </a>
                  </Grid>
                  <Grid item>
                    <a
                      href="https://www.instagram.com/snaphuntjobs/"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="ui tiny circular icon button"
                      role="button"
                    >
                      <i
                        aria-hidden="true"
                        className="sh-logo-instagram-2 icon"
                      />
                    </a>
                  </Grid>
                  <Grid item>
                    <a
                      href="https://www.linkedin.com/company/snaphunt/"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="ui tiny circular icon button"
                      role="button"
                    >
                      <i
                        aria-hidden="true"
                        className="sh-logo-linkedin-2 icon"
                      />
                    </a>
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default Footer;
