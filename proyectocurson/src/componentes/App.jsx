import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import VerCursos from "../pages/VerCursos";
import AdminHome from "../pages/AdminHome";
import CursosAdmin from "../pages/CursosAdmin";
import NuevoCursoAdmin from "../pages/NuevoCursoAdmin";
import EditarCursoAdmin from "../pages/EditarCursoAdmin"
import ModalVerDetalleCurso from "./ModalVerDetalleCurso";
import Error404 from '../pages/Error404'
import LandingPage from '../pages/LandingPage'

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/cursos" component={VerCursos} />
        <Route exact path="/admin" component={AdminHome} />
        <Route exact path="/admin/cursos" component={CursosAdmin} />
        <Route exact path="/admin/nuevoCurso" component={NuevoCursoAdmin} />
        <Route exact path="/admin/cursoDetails/:cursoId" component={EditarCursoAdmin} />
        <Route exact path="/cursos/:cursoId" component={ModalVerDetalleCurso} />
        <Route component={Error404} />
      </Switch>
    </BrowserRouter>
  );
}
