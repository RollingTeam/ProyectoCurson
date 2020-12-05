import React from 'react'
import Logo from "../img/logo-navbar.png"

export default function Register({modalIsClose}) {
    return (
        <div className="Modal-register">
            <div className="Modal_container">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <img src={Logo} alt="logo-curson" class="logo-modal"/>
                            <button type="button" className="close" data-dismiss="modal" onClick={modalIsClose} aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label>Nombre completo:</label>
                                    <input type="text" name="nombre" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label>Usuario:</label>
                                    <input type="text" name="nombre" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label>E-mail</label>
                                    <input type="email" name="nombre" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label>Contraseña</label>
                                    <input type="password" name="nombre" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label>Repetir contraseña</label>
                                    <input type="password" name="nombre" className="form-control" />
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-danger btn-block">Registrarse</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
