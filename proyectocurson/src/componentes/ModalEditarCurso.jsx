import React from "react";

export default function ModalEditarCurso(props) {
  console.log(props);
  return (
    <div className="Modal">
    <div className="Modal__container modal-dialog-scrollable">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5
              className="modal-title color-rosa size-review mb-2"
              id="exampleModalLabel"
            >
              Detalle Curso
            </h5>
            <button
              type="button"
              className="close"
              onClick={props.handleCloseModal}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div id="modalBody" className="modal-body">
            <form>
              <div className="container">
                <div className="row">
                  <div className="col">
                    <div className="row">
                      <div className="form-group col">
                        <label className="color-rosa">Nombre del Curso</label>
                        <input
                          type="text"
                          className="form-control"
                          id="nombreCursoInput"
                          value={props.curso[0].nombre}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="form-group col">
                        <label className="color-rosa">Descripcion</label>
                        <textarea
                          id="contenidoCursoInput"
                          className="form-control"
                          rows="3"
                        >
                          {props.curso[0].descripcion} 
                        </textarea>
                      </div>
                    </div>
                    <div className="row">
                      <div className="form-group col-12 col-sm-12 col-md-6 col-md-4">
                        <label className="color-rosa">Duracion</label>
                        <input
                          type="number"
                          className="form-control"
                          id="duracionCursoInput"
                          value={props.curso[0].duracion}
                        />
                      </div>
                      <div className="form-group col-12 col-sm-12 col-md-6 col-md-4">
                        <label className="color-rosa">
                          Lugares Disponibles
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          id="cuposCursoInput"
                          value={props.curso[0].cupo}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="form-group col-12 col-sm-12 col-md-6 col-md-6">
                        <label className="color-rosa">Categoría</label>
                        <select
                          className="form-control"
                          id="categoriaCursoInput"
                        >
                          <option value="" defaultValue>
                            {props.curso[0].categoria}
                          </option>
                          <option>Tecnología</option>
                          <option>Hogar</option>
                          <option>Arte</option>
                          <option>Salud</option>
                          <option>Marketing</option>
                        </select>
                      </div>
                      <div className="form-group col-12 col-sm-12 col-md-6 col-md-6">
                        <label className="color-rosa">Nivel</label>
                        <select
                          className="form-control"
                          id="dificultadCursoInput"
                        >
                          <option value="" defaultValue>
                            {props.curso[0].nivel}
                          </option>
                          <option>Principiante</option>
                          <option>Intermedio</option>
                          <option>Avanzado</option>
                        </select>
                      </div>
                    </div>
                    <div className="row">
                      <div className="form-group col">
                        <label className="color-rosa">
                          Imagen de Portada del Curso
                        </label>
                        <input
                          type="url"
                          className="form-control"
                          id="imagenCursoInput"
                          value={props.curso[0].imagen} 
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="form-group col">
                        <label className="color-rosa">Contacto:</label>
                        <input
                          type="url"
                          className="form-control"
                          id="contactoCursoInput"
                          value={props.curso[0].contacto}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-group d-flex justify-content-center mt-4">
                <button
                  type="button"
                  className="btn btn-secondary mr-3"
                  data-dismiss="modal"
                  onClick={props.handleCloseModal}
                >
                  Cancelar
                </button>
                <button
                  type="button"
                  className="btn btn-secondary ml-3"
                  data-dismiss="modal"
                //   onclick="updateCurso({idCurso})"
                >
                  Modificar Curso
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
