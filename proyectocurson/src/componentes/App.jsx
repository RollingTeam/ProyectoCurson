import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import VerCursos from "../pages/VerCursos";
import Home from "../pages/Home";
import AdminHome from "../pages/AdminHome";
import CursosAdmin from "../pages/CursosAdmin";
import NuevoCursoAdmin from "../pages/NuevoCursoAdmin";
import EditarCursoAdmin from "../pages/EditarCursoAdmin"

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cursos" component={VerCursos} />
        <Route exact path="/admin" component={AdminHome} />
        <Route exact path="/admin/cursos" component={CursosAdmin} />
        <Route exact path="/admin/nuevoCurso" component={NuevoCursoAdmin} />
        <Route exact path="/admin/cursoDetails/:cursoId" component={EditarCursoAdmin} />
      </Switch>
    </BrowserRouter>
  );
}
