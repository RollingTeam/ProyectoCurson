import React from "react";
import { Link } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import "../css/iconsTable.css";

export default function TablaCategorias({ cat }) {

  return (
    <div className="container mt-2 mb-2">
      <h3>Categorías</h3>
      <div className="table-responsive my-5">
        <table className="table table-hover">
          <thead className="thead-dark">
            <tr className="text-center">
              <th scope="col">Categoría</th>
              <th scope="col">Estado</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {cat.map((categoria) => {
              return (
                <tr key={categoria._id} className="text-center">
                  <th scope="row">{categoria.nombre}</th>
                  <td>
                    {categoria.estado ? (
                      <span className="text-success">Activa</span>
                    ) : (
                      <span className="text-danger">Inactiva</span>
                    )}
                  </td>
                  <td>
                    {categoria.estado && (
                      <MdDeleteForever
                        className="icons-table icons-table__delete"
                        onClick={async (e) => {
                          let token = JSON.parse(localStorage.getItem("token"));
                          try {
                            await fetch(
                              `http://localhost:3005/categoria/${categoria._id}`,
                              {
                                method: "DELETE",
                                headers: {
                                  "Content-type": "application/json; charset=UTF-8",
                                  token: `${token}`
                                },
                              }
                            );
                            alert("La categoria fue eliminada correctamente");
                          } catch (error) {
                            console.warn(error);
                          }
                        }}
                      />
                    )}
                    <Link to={`categoriaDetails/${categoria._id}`}>
                      <FaEdit className="icons-table icons-table__edit" />
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
