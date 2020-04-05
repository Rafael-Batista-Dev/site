import React from "react";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import "./App.css";
import Main from "./components/main";
import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Layout>
        <Header className="header-color" title="DevClass" scroll>
          <Navigation>
            <Link to="/resumo">Resumo</Link>
            <Link to="/sobre">Sobre</Link>
            <Link to="/projetos">Projetos</Link>
            <Link to="/contato">Contato</Link>
          </Navigation>
        </Header>
        <Drawer title="DevClass">
          <Navigation>
            <Link to="/resumo">Resumo</Link>
            <Link to="/sobre">Sobre</Link>
            <Link to="/projetos">Projetos</Link>
            <Link to="/contato">Contato</Link>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
          <Main />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
