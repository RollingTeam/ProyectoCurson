import React from 'react'
import '../css/modalVerMasCursos.css'
import "../css/botones.css"

export default function ModalVerMasCursos(props) {
    return (
        <div className="Modal">
                <div className="Modal__container modal-dialog-scrollable">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header p-1">
                                <h5 className="modal-title p-2"><strong>Esto es una prueba</strong></h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={props.handleCloseModal}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <img src="" class="card-img-top img-card img-fluid" alt="..."></img>
                                <span class="badge badge-warning categorias">Tecnologia</span>
                                <span class="badge badge-pill badge-info cupos">25 Lugares</span>
                                <div className="text-center mt-1">
                                    <p>Esto es una prueba</p>
                                </div>
                                <div class="text-center">Contacto:<a href="link">wwww.cursos.com</a></div>
                            </div>
                            <div className="modal-footer justify-content-center">
                                <button type="button" className="btn btn-primary-curso" data-dismiss="modal" onClick={props.handleCloseModal}>Inscribirse</button>
                                <button type="button" className="btn btn-primary-curso">Agregar a mis favoritos</button>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}
