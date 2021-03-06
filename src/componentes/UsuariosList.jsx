import React from 'react'
import { ImUserMinus } from "react-icons/im";
import { ImUserCheck } from "react-icons/im";
import { FaUserShield } from "react-icons/fa";

export default function UsuariosList({ usuarios }) {
  const validarAdminUsers = () => {
    let admin = 0;
    for (let i = 0; i < usuarios.length; i++) {
      if (usuarios[i].role === "ADMIN_ROLE" && usuarios[i].estado === true) {
        admin += 1;
      }
    }
    if (admin > 1) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <>
      <div className="row">
        <div className="col">
          <h3>Lista de usuarios</h3>
        </div>
      </div>
      <div className="row mt-4 text-center d-flex justify-content-center">
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Usuario</th>
              <th scope="col">Rol</th>
              <th scope="col">Estado</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((usuario) => {
              return (
                <tr key={usuario._id} className="text-center">
                  <td>{`${usuario.nombre} ${usuario.apellido}`}</td>
                  <td>{usuario.email}</td>
                  <td>
                    {usuario.role === "ADMIN_ROLE"
                      ? "Administrador"
                      : "Usuario"}
                  </td>
                  <td>
                    {usuario.estado ? (
                      <span className="text-success">Activo</span>
                    ) : (
                        <span className="text-danger">Inactivo</span>
                      )}
                  </td>
                  <td>
                    {usuario.estado ? (
                      <ImUserMinus
                        className="icons-table icons-table__delete"
                        onClick={async (e) => {
                          let token = JSON.parse(localStorage.getItem("token"));
                          let valor = window.confirm(
                            `¿Deseas suspender a ${usuario.email}?`
                          );
                          if (valor) {
                            if (
                              usuario.role !== "ADMIN_ROLE" ||
                              validarAdminUsers()
                            ) {
                              try {
                                await fetch(
                                  // `http://localhost:3005/usuarios/${usuario._id}`,
                                  `https://afternoon-fjord-84174.herokuapp.com/usuarios/${usuario._id}`,
                                  {
                                    method: "DELETE",
                                    headers: {
                                      "Content-type":
                                        "application/json; charset=UTF-8",
                                      token: `${token}`,
                                    },
                                  }
                                );
                                alert(
                                  "El usuario fue deshabilitado correctamente"
                                );
                              } catch (error) {
                                console.warn(error);
                              }
                            } else {
                              alert(
                                "Al menos un usuario de tipo ADMIN debe estar habilitado"
                              );
                            }
                          }
                        }}
                      />
                    ) : (
                        <ImUserCheck
                          className="icons-table icons_table_approve"
                          onClick={async (e) => {
                            let token = JSON.parse(localStorage.getItem("token"));

                            try {
                              // await fetch(`http://localhost:3005/usuarios/${usuario._id}`,{
                              await fetch(
                                `https://afternoon-fjord-84174.herokuapp.com/usuarios/${usuario._id}`,
                                {
                                  method: "PUT",
                                  body: JSON.stringify({
                                    estado: true,
                                  }),
                                  headers: {
                                    "Content-type":
                                      "application/json; charset=UTF-8",
                                    token: `${token}`,
                                  },
                                }
                              );
                              alert(`Diste de alta a ${usuario.email}!`);
                            } catch (error) {
                              console.warn(error);
                            }
                          }}
                        />
                      )}
                    <FaUserShield
                      className="icons-table icons_table_admin"
                      onClick={async (e) => {
                        let token = JSON.parse(localStorage.getItem("token"));

                        try {
                          // await fetch(`http://localhost:3005/usuarios/${usuario._id}`,{
                          await fetch(
                            `https://afternoon-fjord-84174.herokuapp.com/usuarios/${usuario._id}`,
                            {
                              method: "PUT",
                              body: JSON.stringify({
                                role: "ADMIN_ROLE",
                              }),
                              headers: {
                                "Content-type":
                                  "application/json; charset=UTF-8",
                                token: `${token}`,
                              },
                            }
                          );
                          alert(
                            `Ahora ${usuario.email} es un administrador!`
                          );
                        } catch (error) {
                          console.warn(error);
                        }
                      }}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
