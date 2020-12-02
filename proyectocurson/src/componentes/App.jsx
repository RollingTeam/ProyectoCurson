import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import VerCursos from "../pages/VerCursos";
import Home from "../pages/Home";

import Layout from "./Layout";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cursos" component={VerCursos} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}