import React, { useState, useEffect } from "react";
import Curso from "./Curso";
import "../css/cursos.css";
import "../css/botones.css";

export default function TodosCursos() {
  const [data, setData] = useState({
    cursos: [],
  });

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const resp = await fetch("http://localhost:3008/cursos");
    const data = await resp.json();
    setData({
      cursos: data,
    });
  };
  return (
    <div className="container" id="todosLosCursos">
      <h1>TODOS LOS CURSOS</h1>
      <div className="row">
        {data.cursos.map((curso) => {
          return <Curso curso={curso} />;
        })}
      </div>
    </div>
  );
}
