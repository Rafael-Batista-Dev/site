import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton,
} from "react-mdl";

class Projetos extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategorias() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projeto">
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#363636",
                height: "176px",
                background:
                  "url(https://nagarsoftwaresolution.com/wp-content/uploads/2020/02/icons8-react-native-256.png) center / cover",
              }}
            >
              Projeto React
            </CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#363636" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#363636",
                height: "176px",
                background:
                  "url(https://nagarsoftwaresolution.com/wp-content/uploads/2020/02/icons8-react-native-256.png) center / cover",
              }}
            >
              Projeto React
            </CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#363636" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                fontWeight: "bold",
                color: "#363636",
                height: "176px",
                background:
                  "url(https://nagarsoftwaresolution.com/wp-content/uploads/2020/02/icons8-react-native-256.png) center / cover",
              }}
            >
              Projeto React
            </CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#363636" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#363636",
                height: "176px",
                background:
                  "url(https://nagarsoftwaresolution.com/wp-content/uploads/2020/02/icons8-react-native-256.png) center / cover",
              }}
            >
              Projeto React
            </CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#363636" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div className="projeto">
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#FFF",
                height: "176px",
                background:
                  "url(https://i.ytimg.com/vi/-I1dT1huWdo/maxresdefault.jpg) center / cover",
              }}
            >
              Projeto AgularJS
            </CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#FFF" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#FFF",
                height: "176px",
                background:
                  "url(https://i.ytimg.com/vi/-I1dT1huWdo/maxresdefault.jpg) center / cover",
              }}
            >
              Projeto AgularJS
            </CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#FFF" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                fontWeight: "bold",
                color: "#FFF",
                height: "176px",
                background:
                  "url(https://i.ytimg.com/vi/-I1dT1huWdo/maxresdefault.jpg) center / cover",
              }}
            >
              Projeto AgularJS
            </CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#FFF" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#FFF",
                height: "176px",
                background:
                  "url(https://i.ytimg.com/vi/-I1dT1huWdo/maxresdefault.jpg) center / cover",
              }}
            >
              Projeto AgularJS
            </CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#FFF" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div className="projeto">
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#FFF",
                height: "176px",
                background:
                  "url(https://pbs.twimg.com/profile_images/1235652877059842049/IUi1TKu7_400x400.jpg) center / cover",
              }}
            >
              Projeto VueJS
            </CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#FFF" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#FFF",
                height: "176px",
                background:
                  "url(https://pbs.twimg.com/profile_images/1235652877059842049/IUi1TKu7_400x400.jpg) center / cover",
              }}
            >
              Projeto VueJS
            </CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#FFF" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                fontWeight: "bold",
                color: "#FFF",
                height: "176px",
                background:
                  "url(https://pbs.twimg.com/profile_images/1235652877059842049/IUi1TKu7_400x400.jpg) center / cover",
              }}
            >
              Projeto VueJS
            </CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#FFF" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#FFF",
                height: "176px",
                background:
                  "url(https://pbs.twimg.com/profile_images/1235652877059842049/IUi1TKu7_400x400.jpg) center / cover",
              }}
            >
              Projeto VueJS
            </CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#FFF" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div className="projeto">
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#FFF",
                height: "176px",
                background:
                  "url(https://www.codewall.co.uk/wp-content/uploads/2019/02/updating-data-mongo-db-database.jpg) center / cover",
              }}
            >
              Projeto MongoDB
            </CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#FFF" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#FFF",
                height: "176px",
                background:
                  "url(https://www.codewall.co.uk/wp-content/uploads/2019/02/updating-data-mongo-db-database.jpg) center / cover",
              }}
            >
              Projeto MongoDB
            </CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#FFF" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                fontWeight: "bold",
                color: "#FFF",
                height: "176px",
                background:
                  "url(https://www.codewall.co.uk/wp-content/uploads/2019/02/updating-data-mongo-db-database.jpg) center / cover",
              }}
            >
              Projeto MongoDB
            </CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#FFF" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#FFF",
                height: "176px",
                background:
                  "url(https://www.codewall.co.uk/wp-content/uploads/2019/02/updating-data-mongo-db-database.jpg) center / cover",
              }}
            >
              Projeto MongoDB
            </CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#FFF" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    }
  }

  render() {
    return (
      <div style={{ marginTop: "80px" }}>
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>React</Tab>
          <Tab>Angular</Tab>
          <Tab>VueJS</Tab>
          <Tab>MongoDB</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategorias()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projetos;
