import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class LandingPage extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-page">
          <Cell col={12}>
            <img
              style={{ marginTop: "30px" }}
              src="https://cdn.iconscout.com/icon/free/png-256/avatar-371-456323.png"
              alt="avatar"
              className="avatar-icon"
            />
            <div className="banner-title">
              <h1>Full Stack - Web Developer</h1>
              <hr />
              <p>
                HTML/CSS | Bootstrap | JavaScript | ReactJS | React Native |
                express | NodeJS | MondoDB
              </p>
              <div className="social-icons">
                {/* google */}
                <a
                  href="http://google.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" arial-hidden="true"></i>
                </a>
                {/* google */}
                <a
                  href="http://google.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-linkedin-square" arial-hidden="true"></i>
                </a>
                {/* google */}
                <a
                  href="http://google.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-facebook-square" arial-hidden="true"></i>
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default LandingPage;
