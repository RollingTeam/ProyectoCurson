import React from 'react'

export default function NuevoCursoModal() {
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
                <form>
                    <div className="modal-body">
                        <div className="row">
                            <div className="col">
                                <div className="row">
                                    <div className="form-group col">
                                        <input type="text" className="form-control" id="nombreCursoInput"
                                            placeholder="¿Nombre del curso?"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col">
                                        <textarea id="contenidoCursoInput" className="form-control" rows="3"
                                            placeholder="¿De que se tratan el curso?"></textarea>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-12 col-sm-12 col-md-6 col-md-6">
                                        <input type="number" className="form-control" id="duracionCursoInput"
                                            placeholder="Duración (horas)"/>
                                    </div>
                                    <div className="form-group col-12 col-sm-12 col-md-6 col-md-6">
                                        <input type="number" className="form-control" id="cuposCursoInput"
                                            placeholder="Cupo máximo"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-12 col-sm-12 col-md-6 col-md-6">
                                        <label>Categoría del curso</label>
                                        <select className="form-control" id="categoriaCursoInput">
                                            <option>Tecnología</option>
                                            <option>Hogar</option>
                                            <option>Arte</option>
                                            <option>Salud</option>
                                            <option>Marketing</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-12 col-sm-12 col-md-6 col-md-6">
                                        <label>Nivel del Curso</label>
                                        <select className="form-control" id="dificultadCursoInput">
                                            <option>Principiante</option>
                                            <option>Intermedio</option>
                                            <option>Avanzado</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col">
                                        <label>Imagen de portada del curso:</label>
                                        <input type="file" class="form-control-file" id="imagenCursoInput"/>
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
