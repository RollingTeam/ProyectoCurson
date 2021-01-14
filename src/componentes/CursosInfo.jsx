import React from "react";

export default function CursosInfo({data}) {
  return (
    <>
      <div className="row mt-4">
        <div className="col">
          <h3>Estadisticas de Cursos:</h3>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-6 col-sm-6 col-md-3 col-lg-3 statisticsCol">
          <div id="numberCursos" className="statisticsCampus"></div>
          <span>
            <strong>Totales</strong>
          </span>
        </div>
        <div className="col-6 col-sm-6 col-md-3 col-lg-3 statisticsCol">
          <div id="activeCursos" className="statisticsCampus"></div>
          <span>
            <strong>Activos</strong>
          </span>
        </div>
        <div className="col-6 col-sm-6 col-md-3 col-lg-3 statisticsCol">
          <div id="inactiveCursos" className="statisticsCampus"></div>
          <span>
            <strong>Inactivos</strong>
          </span>
        </div>
        <div className="col-6 col-sm-6 col-md-3 col-lg-3 statisticsCol">
          <div id="pendientesCursos" className="statisticsCampus"></div>
          <span>
            <strong>Pendientes</strong>
          </span>
        </div>
      </div>
    </>
  );
}
