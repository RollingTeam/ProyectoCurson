import React, { useState } from 'react'

export default function NuevoCursoModal(props) {

    const [nuevoCurso, setNuevoCurso] = useState({
        nombreCurso: '',
        contenidoCurso: '',
        duracionCurso: '',
        cuposCurso: '',
        categoriaCurso: '',
        nivelCurso:'',
        imagenCurso: '',
    });

    const handleInputChange = (event) => {
        console.log(event.target.value)
        setNuevoCurso({
            ...nuevoCurso,
            [event.target.name]: event.target.value
        })
    }

    //probando procesar los datos del form
    const enviarCurso = (event) => {
        event.preventDefault()
        console.log('enviando datos...' + nuevoCurso.nombreCurso)
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
                        <form onSubmit={enviarCurso}>
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
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="form-group col">
                                                <textarea
                                                    name="contenidoCurso"
                                                    id="contenidoCursoInput"
                                                    className="form-control"
                                                    rows="3"
                                                    placeholder="¿De que se tratan el curso?"
                                                    onChange={handleInputChange}>    
                                                    </textarea>
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
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                            <div className="form-group col-12 col-sm-12 col-md-6 col-md-6">
                                                <input
                                                    name="cuposCurso"
                                                    type="number"
                                                    className="form-control"
                                                    id="cuposCursoInput"
                                                    placeholder="Cupo máximo"
                                                    onChange={handleInputChange} />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="form-group col-12 col-sm-12 col-md-6 col-md-6">
                                                <label>Categoría del curso</label>
                                                <select
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
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                                <button type="submit" className="btn cursonBtn" onClick={props.handleCloseModal}>Enviar solicitud</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}
