import React, { useEffect, useState } from "react";
import CursoInfo from "./CursoInfo";
import { getCategoria } from "../helpers/Categorias";

export default function CursosPorCategoria() {
  const [cat, setCat] = useState([]);
  const [activeCat, setActiveCat] = useState([]);
  const [catValue, setCatValue] = useState("");
  const [page, setPage] = useState(0);
  const [lista, setLista] = useState({
    datos: [],
    error: null,
    loading: true,
    cantidad: 0,
  });

  useEffect(() => {
    let categorias = cat.filter((c) => {
      return c.estado === true;
    });
    setActiveCat(categorias);
  }, [cat]);

  const filtrarCursosPorCategoria = (e) => {
    setCatValue(e.target.value);
    ejecutarFiltrado(e.target.value);
  };

  useEffect(() => {
    setPage(0);
    console.log(catValue)
  }, [filtrarCursosPorCategoria]);


  const ejecutarFiltrado = (e) => {
    if (e !== "") {
      getCursosXCategoria(e, page)
        .then((response) => {
          setLista(response);
        })
        .catch((response) => {
          setLista(response);
        });
    }
  };

  useEffect(() => {
    getCategoria()
    .then((response) => setCat(response))
    .catch((error) => console.log(error));
    if (catValue !== "") {
      getCursosXCategoria(catValue, page);
    } else {
      actualizaLista(page);
    }
  }, [page]);

  //Obtengo los datos de los cursos
  const actualizaLista = (page) => {
    getCursos(page)
      .then((response) => {
        setLista(response);
      })
      .catch((response) => {
        setLista(response);
      });
  };

  // funcion para manejar paginado next
  const paginando = () => {
    if (page < lista.cantidad - 3) {
      setPage(page + 3);
    }
  };

  // Función para manejar paginado previo
  const despaginando = () => {
    if (page >= 3) {
      setPage(page - 3);
    }
  };

  const getCursos = async (page) => {
    try {
      // envío los parámetros para la paginacion y defino el desde con el valor
      // del estado page
      const resp = await fetch(
        `http://localhost:3005/curso?limite=3&desde=${page}`,
        {
          method: "GET",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      const data = await resp.json();

      //Almaceno en el estado lista los datos obtenidos
      return {
        datos: data.cursos,
        loading: false,
        cantidad: data.cantidad,
        error: null,
      };
    } catch (error) {
      return {
        datos: {},
        loading: false,
        error: error,
      };
    }
  };

  const getCursosXCategoria = async (e, page) => {
    try {
      // envío los parámetros para la paginacion y defino el desde con el valor
      // del estado page
      const resp = await fetch(
        `http://localhost:3005/cursos/${e}?limite=3&desde=${page}`,
        {
          method: "GET",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      const data = await resp.json();
        console.log(data.cursos)
      //Almaceno en el estado lista los datos obtenidos
      return {
        datos: data.cursos,
        loading: false,
        cantidad: data.cantidad,
        error: null,
      };
    } catch (error) {
      return {
        datos: {},
        loading: false,
        error: error,
      };
    }
  };

  return (
    <div>
      <div className="container mb-4">
        <br />
        <hr className="bg-gris" />
        <div className="row pt-2 pb-2 pl-0 pr-0 m-0">
          <h3 className="size-titulo color-rosa mb-4 ml-2">
            Cursos por Categoría
          </h3>
        </div>
        <div className="row ml-2">
          <div className="col-lg-2">
            <label className="color-rosa">Categorias</label>
            <select
              name="categoria"
              className="col-lg-10"
              onChange={filtrarCursosPorCategoria}
            >
              {activeCat.map((categoria) => (
                <option
                  key={categoria._id}
                  value={categoria._id}
                >
                  {categoria.nombre}
                </option>
              ))}
            </select>
          </div>
          {/* <!-- TARJETAS DE CATEGORIAS --> */}
          <div className="col-10 col-md-10 col-lg-10">
            <div className="row">
              {lista.datos.map((curso, _id) => {
                return <CursoInfo _id={curso._id} />;
              })}
            </div>
            <div className="row text-center mb-4 display-flex justify-content-center my-2">
              <button className="btn btn-dark mr-2" onClick={despaginando}>
                <i className="fa fa-angle-double-left" aria-hidden="true"></i>
              </button>
              <button className="btn btn-dark" onClick={paginando}>
                <i className="fa fa-angle-double-right" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
