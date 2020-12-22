import React, { useState, useEffect } from "react";
import Curso from "./Curso";
import "../css/cursos.css";

export default function CursosDestacados() {
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
    <div className="container" id="destacados">
      <h1>CURSOS DESTACADOS</h1>
      <div className="row">
        {data.cursos.map((curso) => {
          return <Curso curso={curso} />;
        })}
      </div>
    </div>
  );
}
