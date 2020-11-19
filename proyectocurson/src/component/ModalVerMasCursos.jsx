import React from 'react'

export default function ModalVerMasCursos() {
    return (
        <div>
        <div className="modal-header p-1">
        <div className="nombreCurso">
            <h5 className="modal-title p-2" id="staticBackdropLabel">CURSO DE PROG.</h5>
        </div>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true" className="white-text">&times;</span>
        </button>
    </div>
    <div className="modal-body">
    <img src="https://picsum.photos/400/200/" className="card-img-top img-fluid" alt="..."/>
        <span className="badge badge-warning categorias"></span>
        <span className="badge badge-pill badge-info cupos">Lugares Disponibles</span>
        <div className="text-center">
            <p>curso dedicado a la manufactura de cosas que no se venden nunca</p>
        </div>
        <div className="text-center">Contacto:<a href="link"></a></div>
    </div>
    <div className="modal-footer justify-content-center">
        <button className="btn btn-primary-curso">Inscribirse<i class="far fa-user ml-1 white-text"></i></button>
        <button className="btn btn-primary-curso">Agregar a mis Favoritos<i class="far fa-heart ml-1 white-text"></i></button>
    </div>
    </div>
    )
}
