import React from "react";
import { Switch, Route } from "react-router-dom";

import LandingPage from "./landingpage";
import Contato from "./contato";
import Projetos from "./projetos";
import Resumo from "./resumo";
import Sobre from "./sobre";

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/contato" component={Contato} />
    <Route path="/projetos" component={Projetos} />
    <Route path="/resumo" component={Resumo} />
    <Route path="/sobre" component={Sobre} />
  </Switch>
);

export default Main;
