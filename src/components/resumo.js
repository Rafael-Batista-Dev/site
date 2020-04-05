import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Graduacao from "./graduacao";
import Experiencia from "./experiencia";
import Habilidade from "./habilidade";

class Resumo extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                style={{ marginTop: "40px" }}
                src="https://cdn.iconscout.com/icon/free/png-256/avatar-371-456323.png"
                alt="avatar"
              />
            </div>
            <h2 style={{ textAlign: "center" }}> Rafael</h2>
            <h4 style={{ color: "#000" }}>Developer</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p style={{ textAlign: "justify" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5>Logradouro</h5>
            <p>Centro Juazeiro do Norte - CE, 94025</p>
            <h5>Cel.</h5>
            <p>(88) 9.0000-0000</p>
            <h5>Email</h5>
            <p>admin@admin.com</p>
            <h5>Web</h5>
            <p>rafaelbatista.com</p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>
          <Cell
            style={{ borderRadius: "10px" }}
            className="resumo-right-col"
            col={8}
          >
            <h2>Graduação</h2>

            <Graduacao
              startYear={2002}
              endYear={2006}
              schoolName="Universidade"
              schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            />

            <Graduacao
              startYear={2007}
              endYear={2009}
              schoolName="Universidade 2"
              schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            />
            <hr style={{ borderTop: "3px solid #833fb2" }} />

            <h2>Experiência</h2>

            <Experiencia
              startYear={2009}
              endYear={2012}
              jobName="Trabalho"
              jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            />

            <Experiencia
              startYear={2012}
              endYear={2016}
              jobName="Trabalho 2"
              jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            />
            <hr style={{ borderTop: "3px solid #833fb2" }} />
            <h2>Skills</h2>
            <Habilidade skill="javascript" progress={100} />
            <Habilidade skill="HTML/CSS" progress={80} />
            <Habilidade skill="NodeJS" progress={50} />
            <Habilidade skill="React" progress={25} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resumo;
