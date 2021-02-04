import React from "react";
import { Link } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import "../css/iconsTable.css";

export default function TablaSolicitudes({ solicitud }) {

  return (
    <div className="container mt-2 mb-2">
      <h3>Solicitudes</h3>
      <div className="table-responsive my-5">
        <table className="table table-hover">
          <thead className="thead-dark">
            <tr className="text-center">
              <th scope="col">Solicitud</th>
              <th scope="col">Estado</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {solicitud.map((s) => {
              return (
                <tr key={s._id} className="text-center">
                  <th scope="row">{s.nombre}</th>
                  <td>
                    {s.isActive ? (
                      <span className="text-success">Activa</span>
                    ) : (
                      <span className="text-danger">Inactiva</span>
                    )}
                  </td>
                  <td>
                    {s.isActive && (
                      <MdDeleteForever
                        className="icons-table icons-table__delete"
                        onClick={async (e) => {
                          let token = JSON.parse(localStorage.getItem("token"));
                          try {
                            await fetch(
                              // `http://localhost:3005/solicitud/${s._id}`,
                              ` https://afternoon-fjord-84174.herokuapp.com/solicitud/${s._id}`,
                              {
                                method: "DELETE",
                                headers: {
                                  "Content-type": "application/json; charset=UTF-8",
                                  token: `${token}`
                                },
                              }
                            );
                            alert("La solicitud fue eliminada correctamente");
                          } catch (error) {
                            console.warn(error);
                          }
                        }}
                      />
                    )}
                    <Link to={`solicitud/${s._id}`}>
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
