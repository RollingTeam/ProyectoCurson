import React from 'react';
import { useForm } from "react-hook-form";


export default function CursoModal() {

    const { register, errors, handleSubmit } = useForm();

    const onSubmit = (nuevoCurso, e) => {
        console.log(nuevoCurso)
        e.target.reset()
    }

    
    return (
        <div>
            <div className="modal" tabindex="-1" id="exampleSolicitud" aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable">
                    <div className="modal-content" style="background-color: #EDF2F4;">
                        <div className="modal-header text text-center">
                            <h5 className="modal-title">Formulario de solicitud</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
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
                                                    ref={
                                                        register({
                                                            required: { value: true, message: 'Campo obligatorio' }
                                                        })
                                                    }
                                                />
                                                <span className="text-danger text-small d-block mb-2">
                                                    {errors?.nombreCurso?.message}
                                                </span>
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
                                                    ref={
                                                        register({
                                                            required: { value: true, message: 'Campo obligatorio' }
                                                        })
                                                    }
                                                >
                                                </textarea>
                                                <span className="text-danger text-small d-block mb-2">
                                                    {errors?.contenidoCurso?.message}
                                                </span>
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
                                                    ref={
                                                        register({
                                                            required: { value: true, message: 'Campo obligatorio' }
                                                        })
                                                    }
                                                />
                                                <span className="text-danger text-small d-block mb-2">
                                                    {errors?.duracionCurso?.message}
                                                </span>
                                            </div>
                                            <div className="form-group col-12 col-sm-12 col-md-6 col-md-6">
                                                <input
                                                    name="cuposCurso"
                                                    type="number"
                                                    className="form-control"
                                                    id="cuposCursoInput"
                                                    placeholder="Cupo máximo"
                                                    ref={
                                                        register({
                                                            required: { value: true, message: 'Campo obligatorio' }
                                                        })
                                                    }
                                                />
                                                <span className="text-danger text-small d-block mb-2">
                                                    {errors?.cupoCurso?.message}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="form-group col-12 col-sm-12 col-md-6 col-md-6">
                                                <label>Categoría del curso</label>
                                                <select
                                                    name="categoriaCurso" ref={register}
                                                    className="form-control"
                                                    id="categoriaCursoInput">
                                                    <option>Tecnología</option>
                                                    <option>Hogar</option>
                                                    <option>Arte</option>
                                                    <option>Salud</option>
                                                    <option>Marketing</option>
                                                </select>
                                            </div>
                                            <div className="form-group col-12 col-sm-12 col-md-6 col-md-6">
                                                <label>Nivel del Curso</label>
                                                <select 
                                                    name="nivelCurso" ref={register}
                                                    className="form-control"
                                                    id="dificultadCursoInput">
                                                    <option>Principiante</option>
                                                    <option>Intermedio</option>
                                                    <option>Avanzado</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="form-group col">
                                                <label>Imagen de portada del curso:</label>
                                                <input
                                                    name="imagenCurso"
                                                    type="file"
                                                    class="form-control-file"
                                                    id="imagenCursoInput"
                                                    ref={
                                                        register({
                                                            required: { value: true, message: 'Campo obligatorio' }
                                                        })
                                                    }
                                                />
                                                <span className="text-danger text-small d-block mb-2">
                                                    {errors?.imagenCurso?.message}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                                <button type="submit" className="btn cursonBtn">Enviar solicitud</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}
