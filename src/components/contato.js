import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class Contato extends Component {
  render() {
    return (
      <div className="contato-body">
        <Grid className="contato-grid">
          <Cell col={6}>
            <h2>Rafael</h2>
            <img
              src="https://cdn3.iconfinder.com/data/icons/adult-man/265/Avatar_Adult_Man_Guy_Face-10-512.png"
              alt="avatar"
              style={{ height: "250px" }}
            />
            <p
              style={{
                width: "75%",
                margin: "auto",
                textAlign: "justify",
                paddingTop: "1em",
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contato</h2>
            <hr />

            <div className="contato-list">
              <List>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "20px", fontFamily: "Roboto" }}
                  >
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    (55) (88)9.0000-0000
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "20px", fontFamily: "Roboto" }}
                  >
                    <i className="fa fa-fax" aria-hidden="true" />
                    (55) (88)9.0000-0000
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "20px", fontFamily: "Roboto" }}
                  >
                    <i className="fa fa-envelope" aria-hidden="true" />
                    admin@admin.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "20px", fontFamily: "Roboto" }}
                  >
                    <i className="fa fa-skype" aria-hidden="true" />
                    MeuSkypeID
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contato;
