import React, { useState } from "react";
import { useForm } from "react-hook-form";

import "../css/modal.css";

export default function NuevoCursoModal(props) {
  const { register, errors, handleSubmit } = useForm();

  const [NuevoCurso, setNuevoCurso] = useState([])

  const onSubmit = (data, e) => {
    console.log(data);
    e.target.reset();
    setNuevoCurso([
      ...NuevoCurso,
      data
    ])
  };

  return (
    <div className="Modal">
      <div>
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header text text-center">
              <h5 className="modal-title">Formulario de solicitud</h5>
              <button
                type="button"
                onClick={props.handleCloseModal}
                className="close"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="modal-body">
                <div className="row">
                  <div className="col">
                    <div className="row">
                      <div className="form-group col">
                        <input
                          name="nombreCurso"
                          type="text"
                          className="form-control"
                          id="nombreCursoInput"
                          placeholder="¿Nombre del curso?"
                          ref={register({
                            required: {
                              value: true,
                              message: "Campo obligatorio",
                            },
                          })}
                        />
                        {errors.nombreCurso && (
                          <span className="text-danger text-small d-block mb-2">
                            {errors.nombreCurso.message}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="row">
                      <div className="form-group col">
                        <textarea
                          name="contenidoCurso"
                          id="contenidoCursoInput"
                          className="form-control"
                          rows="3"
                          placeholder="¿De que se trata el curso?"
                          ref={register({
                            required: {
                              value: true,
                              message: "Campo obligatorio",
                            },
                          })}
                        ></textarea>
                        {errors.contenidoCurso && (
                          <span className="text-danger text-small d-block mb-2">
                            {errors.contenidoCurso.message}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="row">
                      <div className="form-group col-12 col-sm-12 col-md-6 col-md-6">
                        <input
                          name="duracionCurso"
                          type="number"
                          className="form-control"
                          id="duracionCursoInput"
                          placeholder="Duración (horas)"
                          ref={register({
                            required: {
                              value: true,
                              message: "Campo obligatorio",
                            },
                          })}
                        />
                        {errors.duracionCurso && (
                          <span className="text-danger text-small d-block mb-2">
                            {errors.duracionCurso.message}
                          </span>
                        )}
                      </div>
                      <div className="form-group col-12 col-sm-12 col-md-6 col-md-6">
                        <input
                          name="cuposCurso"
                          type="number"
                          className="form-control"
                          id="cuposCursoInput"
                          placeholder="Cupo máximo"
                          ref={register({
                            required: {
                              value: true,
                              message: "Campo obligatorio",
                            },
                          })}
                        />
                        {errors.cuposCurso && (
                          <span className="text-danger text-small d-block mb-2">
                            {errors.cuposCurso.message}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="row">
                      <div className="form-group col-12 col-sm-12 col-md-6 col-md-6">
                        <label>Categoría del curso</label>
                        <select
                          name="categoriaCurso"
                          ref={register}
                          className="form-control"
                          id="categoriaCursoInput"
                        >
                          <option>Tecnología</option>
                          <option>Hogar</option>
                          <option>Arte</option>
                          <option>Salud</option>
                          <option>Marketing</option>
                        </select>
                        {errors.categoriaCurso && (
                          <span className="text-danger text-small d-block mb-2">
                            {errors.categoriaCurso.message}
                          </span>
                        )}
                      </div>
                      <div className="form-group col-12 col-sm-12 col-md-6 col-md-6">
                        <label>Nivel del Curso</label>
                        <select
                          name="nivelCurso"
                          ref={register({
                            required: {
                              value: true,
                              message: "Campo obligatorio",
                            },
                          })}
                          className="form-control"
                          id="dificultadCursoInput"
                        >
                          <option>Principiante</option>
                          <option>Intermedio</option>
                          <option>Avanzado</option>
                        </select>
                        {errors.nivelCurso && (
                          <span className="text-danger text-small d-block mb-2">
                            {errors.nivelCurso.message}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="row">
                      <div className="form-group col">
                        <label>Imagen de portada del curso:</label>
                        <input
                          name="imagenCurso"
                          type="text"
                          className="form-control"
                          id="imagenCursoInput"
                          placeholder="Ingrese la URL de la imagen"
                          ref={register({
                            required: {
                              value: true,
                              message: "Campo obligatorio",
                            },
                          })}
                        />
                        {errors.imagenCurso && (
                          <span className="text-danger text-small d-block mb-2">
                            {errors.imagenCurso.message}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  onClick={props.handleCloseModal}
                  className="btn btn-secondary"
                >
                  Cancelar
                </button>
                <button type="submit" className="btn cursonBtn">
                  Enviar solicitud
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
