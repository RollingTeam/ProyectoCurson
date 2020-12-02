import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import VerCursos from "../pages/VerCursos";
import Home from "../pages/Home";

export default function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cursos" component={VerCursos} />
        </Switch>
    </BrowserRouter>
  );
}