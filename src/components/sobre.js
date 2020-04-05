import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Graduacao from "./graduacao";
import Experiencia from "./experiencia";
import Habilidade from "./habilidade";

class Sobre extends Component {
  render() {
    return (
      <div>
        <Cell className="resumo-right-col" col={12}>
          <hr style={{ borderTop: "3px solid #833fb2" }} />
          <h2>Skills</h2>
          <Habilidade skill="javascript" progress={100} />
          <Habilidade skill="HTML/CSS" progress={80} />
          <Habilidade skill="NodeJS" progress={50} />
          <Habilidade skill="React" progress={25} />
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
        </Cell>
      </div>
    );
  }
}

export default Sobre;
