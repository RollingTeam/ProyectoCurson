import React from "react";

export default function ModalDeleteCurso(props) {
  return (
    <div className="Modal">
      <div className="Modal_container"></div>
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Eliminar Curso</h5>
            <button
              type="button"
              className="close"
              onClick={props.handleCloseModal}
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p>Está seguro que desea eliminar este curso?</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={props.handleCloseModal}
            >
              Cancelar
            </button>
            <button
              type="button"
              className="btn btn-primary btn-danger"
              onClick={props.borrarCurso}
            >
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
