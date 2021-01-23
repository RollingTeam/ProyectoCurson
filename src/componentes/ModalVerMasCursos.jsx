import React from 'react'
import '../css/modalVerMasCursos.css'
import "../css/botones.css"

export default function ModalVerMasCursos(props) {
    return (
        <div className="Modal">
                <div>
                    <div className="modal-dialog modal-dialog-scrollable">
                        <div className="modal-content">
                            <div className="modal-header p-1">
                                <h5 className="modal-title p-2"><strong>Curso de Mecánica Avanzada</strong></h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={props.handleCloseModal}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <img src="https://picsum.photos/400/200/" class="card-img-top img-card img-fluid" alt="..."></img>
                                <span class="badge badge-warning categorias">categorias</span>
                                <span class="badge badge-pill badge-info cupos"> Lugares Disponibles</span>
                                <div className="text-center mt-1">
                                    <p>¿Siempre has querido aprender a dibujar pero no sabes por dónde empezar? En este curso el ilustrador y educador Puño, te enseñará las claves para convertirte en dibujante desde cualquier nivel y a cualquier edad a través de una aproximación</p>
                                </div>
                                <div class="text-center">Contacto:<a href="link">https://www.domestika.org/es</a></div>
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
