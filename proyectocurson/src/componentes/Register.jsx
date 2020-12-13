import React from 'react'
import md5 from "md5";
import Logo from "../img/logo-navbar.png"

export default function Register({modalRegisterClose, datosRegistro, handleChangeRegistro, handleSubmitRegistro, setRegistro}) {
    
    const verificarClave = (e) => {
        e.preventDefault()
        if(datosRegistro.password===datosRegistro.passwordRepetir){
            datosRegistro.password = md5(datosRegistro.password)
            datosRegistro.passwordRepetir = md5(datosRegistro.passwordRepetir)
            handleSubmitRegistro()
            alert('Te registraste exitosamente!')
            setRegistro({
                formulario:{
                    nombre:"",
                    userName:"",
                    email:"",
                    password:"",
                    passwordRepetir:"",
                    logueado: false,
                    estado: "activo"
                  }
                })
            modalRegisterClose()
        } else {
            alert('La contraseña no coincide')
        }
      }
    
    return (
        <div className="modal-register">
            <div className="modal_container">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <img src={Logo} alt="logo-curson" className="logo-modal"/>
                            <button type="button" className="close" data-dismiss="modal" onClick={modalRegisterClose} aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={verificarClave}>
                                <div className="form-group">
                                    <label>Nombre completo:</label>
                                    <input type="text" name="nombre" value={datosRegistro.nombre} onChange={handleChangeRegistro} className="form-control" autoComplete="off"/>
                                </div>
                                <div className="form-group">
                                    <label>Usuario:</label>
                                    <input type="text" name="userName" value={datosRegistro.userName} onChange={handleChangeRegistro} className="form-control" autoComplete="off"/>
                                </div>
                                <div className="form-group">
                                    <label>E-mail</label>
                                    <input type="email" name="email" value={datosRegistro.email} onChange={handleChangeRegistro} className="form-control" autoComplete="off"/>
                                </div>
                                <div className="form-group">
                                    <label>Contraseña</label>
                                    <input type="password" name="password" value={datosRegistro.password} onChange={handleChangeRegistro} className="form-control" autoComplete="off"/>
                                </div>
                                <div className="form-group">
                                    <label>Repetir contraseña</label>
                                    <input type="password" name="passwordRepetir" value={datosRegistro.passwordRepetir} onChange={handleChangeRegistro} className="form-control" autoComplete="off"/>
                                </div>
                                <div className="modal-footer">
                                    <button type="submit" className="btn btn-danger btn-block">Registrarse</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
