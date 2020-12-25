import React from "react";
import { Link } from "react-router-dom";
// import Modal from "../componentes/Modal";
// import ModalVerMasCursos from "../componentes/ModalVerMasCursos";
import "../css/cursos.css";

export default function Curso({ curso }) {
  return (
    <div className="col-12 col-md-6 col-lg-4">
      <div className="card-curso m-2">
        <img src={curso.imagen} className="card-img-top img-fluid" alt="..." />
        <div className="card-body">
          <h5 className="card-title">
            <strong>{curso.nombre}</strong>
          </h5>
          <span className="badge badge-primary">{curso.categoria}</span>
          <p className="card-text">{curso.descripcion}</p>
          {/* <button
            type="button"
            className="btn btn-primary-curso float-right"
            onClick={handleOpenModal}
          >
            Ver Más
          </button> */}
          {/* {openModal && (
            <Modal>
              <ModalVerMasCursos
                handleCloseModal={handleCloseModal}
              />
            </Modal>
          )} */}
          <Link
            to={`cursos/${curso.id}`}
            className="btn btn-primary-curso float-right text-decoration-none"
          >
            Ver Mas
          </Link>
        </div>
      </div>
    </div>
  );
}
