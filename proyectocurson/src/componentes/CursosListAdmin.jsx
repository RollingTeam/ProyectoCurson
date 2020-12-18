import React, { useState } from "react";
import Modal from "./Modal";
import ModalEditarCurso from "./ModalEditarCurso";
import ModalVerMasCursos from "./ModalVerMasCursos";

export default function CursosListAdmin({ data }) {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const borrarCurso = async(e)=>{
    console.log("Entre a borrar Curso")
    console.log(e)
    try {
      await fetch(`http://localhost:3008/cursos/${data.id}`,{
      method:'DELETE',
      })
    } catch (error) {
    }
  }

  return (
    <>
      <hr />
      <div className="row mt-4">
        <div className="col">
          <h3>Lista de Cursos</h3>
        </div>
      </div>
      <div className="row mt-4 text-center">
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">ID Curso</th>
              <th scope="col">Curso</th>
              <th scope="col">
                Categoria:
                <select
                  name="categoria"
                  id="listaCategorias"
                  //   onchange="filtrarDatos()"
                >
                  <option value="Todas">Todas</option>
                  <option value="Tecnología">Tecnología</option>
                  <option value="Hogar">Hogar</option>
                  <option value="Arte">Arte</option>
                  <option value="Salud">Salud</option>
                  <option value="Marketing">Marketing</option>
                </select>
              </th>
              <th scope="col">Cupo</th>
              <th scope="col">
                Estado:
                <select name="estado" id="estado" 
                // onChange="filtrarDatos()"
                >
                  <option value="0">Todos</option>
                  <option value="1">Activo</option>
                  <option value="2">Pendiente</option>
                  <option value="3">Inactivo</option>
                </select>
              </th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {data.map((data) => {
              return (
                <tr key={data.id} className="text-center">
                  <th scope="row">{data.id}</th>
                  <th scope="row">{data.nombre}</th>
                  <td>{data.categoria}</td>
                  <td>{data.cupo}</td>
                  <td>{data.estado}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-dark mx-1"
                      onClick={handleOpenModal}
                    >
                      Editar
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger mr-1"
                      onClick={borrarCurso}
                    >
                      Eliminar
                    </button>
                    {/* {btnSuspender} {btnActivar} */}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {openModal && (
          <Modal>
            <ModalEditarCurso curso={data.id} handleCloseModal={handleCloseModal}/>
          </Modal>
        )}
      </div>
    </>
  );
}
