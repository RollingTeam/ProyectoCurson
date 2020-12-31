import React from 'react'
import Logo from "../img/logo-navbar.png"
import "../css/modal.css"


export default function LogIn({modalRegisterOpen, modalLoginClose, credencialesValue, handleChangeLogin, inciarSesion}) {

    return (
        <>
            <div className="modal-login">
                <div className="modal_container">
                    <div className="modal-dialog">
                        <div className="modal-content text-center">
                            <div className="modal-header">
                                <img src={Logo} alt="logo-curson" className="logo-modal"/>
                                <button type="button" className="close" data-dismiss="modal" onClick={modalLoginClose} aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={inciarSesion}>
                                    <div className="form-group">
                                        <input type="text" name="userName" value={credencialesValue.userName} onChange={handleChangeLogin} className="form-control" placeholder="Ingresa tu usuario" autoComplete="off"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" name="password" value={credencialesValue.password} onChange={handleChangeLogin} className="form-control" placeholder="Contraseña" autoComplete="off"/>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="submit" className="btn btn-danger btn-block">Ingresar</button>
                                    </div>
                                </form>
                                <button className="btn btn-outline-primary" onClick = {modalRegisterOpen}>¿No eres usuario? Resgistrate</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
