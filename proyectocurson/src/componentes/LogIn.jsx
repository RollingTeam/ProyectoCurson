import {React, useState} from 'react'
import Logo from "../img/logo-navbar.png"
import "../css/modal.css"
import Modal from './Modal'
import Register from "./Register"


export default function LogIn({modalIsClose}) {

    const [openRegister, setOpenRegister] = useState(false)

    const handleOpenRegister = () => {
        // modalIsClose(true)
        setOpenRegister(true)
    }

    const handleCloseRegister = () => {
        setOpenRegister(false)
    }

    return (
        <>
            <div className="Modal-login">
                <div className="Modal_container">
                    <div className="modal-dialog">
                        <div className="modal-content text-center">
                            <div className="modal-header">
                                <img src={Logo} alt="logo-curson" class="logo-modal"/>
                                <button type="button" className="close" data-dismiss="modal" onClick={modalIsClose} aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-group">
                                        <input type="text" name="usuario" className="form-control" placeholder="Ingresa tu usuario"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" name="password" className="form-control" placeholder="Contraseña"/>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-danger btn-block">Ingresar</button>
                                    </div>
                                </form>
                                <button className="btn btn-outline-primary" onClick = {handleOpenRegister}>¿No eres usuario? Resgistrate</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {openRegister &&
            <Modal>
                <Register modalIsClose={handleCloseRegister}/>
            </Modal>}
        </>
    )
}
