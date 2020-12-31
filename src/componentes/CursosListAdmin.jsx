import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCursos } from "../helpers/Cursos";
import { getCategoria } from "../helpers/Categorias";

export default function CursosListAdmin() {
  const [cat, setCat] = useState([]);
  //Estado para manejar la paginación
  const [page, setPage] = useState(0);

  //Estado para manejar los datos de la tabla
  const [lista, setLista] = useState({
    datos: {},
    error: null,
    loading: true,
    cantidad: 0,
  });

  // //Estado para manejar el filtro de categoria
  // const [ca, setCa] = useState("");

  // Si cambia el estado de Page vuelvo a cargar los datos
  // de los cursos usando el helper
  useEffect(() => {
    actualizaLista(page);
    getCategoria()
      .then((response) => setCat(response))
      .catch((error) => console.log(error));
  }, [page]);

  //Obtengo los datos de los cursos usando helpers
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
    if (page < lista.cantidad - 5) {
      setPage(page + 5);
    }
  };

  // Función para manejar paginado previo
  const despaginando = () => {
    if (page >= 5) {
      setPage(page - 5);
    }
  };
  // let cate="" ;
  // const filtrarCategoria = (e) => {
  //   console.log(e.target.value)
  //   cate = e.target.value
  //   console.log("Entre a filtrar categoria");
  //   setCa(cate);
  //   console.log(ca)
  //   filtrarDatos(cate);
  // };

  // const filtrarDatos = () => {
  //   console.log(cate)
  //   console.log("Entre a filtrar datos");
  //   if (cate !== "") {
  //     lista.datos.filter((c) => {
  //       return setLista({
  //         datos:c.categoria.id === cate,
  //       });
  //     });
  //   }
  // };

  // // useEffect(() => {
  // //   actualizaLista(page);
  // //   getCategoria()
  // //     .then((response) => setCat(response))
  // //     .catch((error) => console.log(error));
  // // }, [lista.datos]);

  return (
    <>
      {lista.loading ? (
        <h2>Loading...</h2>
      ) : (
        <>
          <hr />
          <div className="row mt-4">
            <div className="col">
              <h3>Lista de Cursos</h3>
            </div>
          </div>
          <div className="row mt-4 text-center d-flex justify-content-center">
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Curso</th>
                  <th scope="col">
                    Categoria:
                    <select name="categoria" /*onChange={filtrarCategoria}*/>
                      {cat.map((categoria) => (
                        <option key={categoria._id} value={categoria._id}>
                          {categoria.nombre}
                        </option>
                      ))}
                    </select>
                  </th>
                  <th scope="col">Nivel</th>
                  <th scope="col">Cupo</th>
                  <th scope="col">
                    Estado:
                    <select
                      name="estado"
                      id="estado"
                      // onChange="filtrarDatos()"
                    >
                      <option value="0">Todos</option>
                      <option value="1">Activo</option>
                      <option value="2">Inactivo</option>
                    </select>
                  </th>
                  <th scope="col">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {lista.datos.map((curso) => {
                  return (
                    <tr key={curso._id} className="text-center">
                      <th scope="row">{curso.nombre}</th>
                      <td>{curso.categoria.nombre}</td>
                      <th>{curso.nivel}</th>
                      <td>{curso.cupo}</td>
                      <td>
                        {curso.estado ? (
                          <span className="text-success">Activo</span>
                        ) : (
                          <span className="text-danger">Inactivo</span>
                        )}
                      </td>
                      <td>
                        <Link
                          to={`cursoDetails/${curso._id}`}
                          className="btn btn-dark mx-1 text-decoration-none"
                        >
                          Ver/Editar
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <button className="btn btn-dark mr-2" onClick={despaginando}>
              <i className="fa fa-angle-double-left" aria-hidden="true"></i>
            </button>
            <button className="btn btn-dark" onClick={paginando}>
              <i className="fa fa-angle-double-right" aria-hidden="true"></i>
            </button>
          </div>
        </>
      )}
    </>
  );
}
