import React, { useState, useEffect } from "react";
import BarraDeNavegacion from "../componentes/BarraDeNavegacion";
import Footer from "../componentes/Footer";
import CursoInfo from "../componentes/CursoInfo";

export default function MisFavoritos() {
  const [ingreso, setIngreso] = useState({
    token: "",
    id: "",
  });
  const [visibilidad, setVisibilidad] = useState(false);
  const [cursos, setCursos] = useState([]);
  useEffect(() => {
    getFav();
    setVisibilidad(true);
  }, []);

  const getFav = async () => {
    const id = JSON.parse(localStorage.getItem("id"));
    if (id) {
      try {
        const resp = await fetch(
          `https://afternoon-fjord-84174.herokuapp.com/usuarios/${id}`,
          {
            method: "GET",
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          }
        );
        const dataUser = await resp.json();
        const cur = dataUser.usuario.misFavoritos;
        if (cur.length > 0) {
          let arrayC = [];
          for (let i = 0; i < cur.length; i++) {
            try {
              // const resp = await fetch(`http://localhost:3005/curso/${cursoId}`, {
              const resp = await fetch(
                `https://afternoon-fjord-84174.herokuapp.com/curso/${cur[i]}`,
                {
                  method: "GET",
                  headers: {
                    "Content-type": "application/json; charset=UTF-8",
                  },
                }
              );
              const data = await resp.json();
              arrayC.push(data.curso);
            } catch (error) {
              console.warn(error);
            }
          }
          setCursos(arrayC);
        } else {
          alert("No tienes ningun curso agregado en Favoritos");
        }
      } catch (error) {
        console.warn(error);
      }
    }
  };

  return (
    <>
      <BarraDeNavegacion ingreso={ingreso} setIngreso={setIngreso} />
      <div className="container-fluid my-5">
        <div className="bd-negro d-flex justify-content-center my-5">
          <label className="size-titulo">Mis Favoritos</label>
        </div>
        {visibilidad && (
          <div className="container">
            <div className="row">
              {cursos.map((curso) => {
                return <CursoInfo _id={curso._id} />;
              })}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
