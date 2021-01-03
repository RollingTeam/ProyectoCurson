import React, { useState }from 'react'
import Logo from "../img/logo-navbar.png"
// import "../css/modal.css"


export default function LogIn({modalRegisterOpen, modalLoginClose, setIngreso}) {

    const [usuario, setUsuario] = useState({
        credenciales:{
        email:"",
        password:""
        }
    })

    const [login, setLogin] = useState({
        token: "",
        error: null,
        ok: true,
        loading: false,
    });

    const handleChangeLogin = (e) => {
        setUsuario({
        credenciales:{
            ...usuario.credenciales,
            [e.target.name] : e.target.value
            }
        });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        setLogin({
            loading: true,
        });

        try {
            const resp = await fetch("http://localhost:3005/login", {
                method: "POST",
                body: JSON.stringify(usuario.credenciales),
                headers: {
                "Content-type": "application/json; charset=UTF-8",
                },
            });

            const data = await resp.json()

            if(data.ok){
                setLogin({
                    token: data.token,
                    error: null,
                    ok: true,
                    loading: false,  
                });
                
                localStorage.setItem("token", JSON.stringify(data.token));
                
                setIngreso({
                    token: JSON.parse(localStorage.getItem('token')),
                    id: data.usuario._id
                })

                modalLoginClose()

            } else {
                setLogin({
                    token: "",
                    error: data.err.message,
                    ok: false,
                    loading: false,
                  });
            }
        } catch (error) {
            console.warn(error)
        }
    };


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
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <input type="email" name="email" value={usuario.credenciales.email} onChange={handleChangeLogin} className="form-control" placeholder="Ingresa tu email" autoComplete="off"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" name="password" value={usuario.credenciales.password} onChange={handleChangeLogin} className="form-control" placeholder="Contraseña" autoComplete="off"/>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="submit" className="btn btn-danger btn-block">Ingresar</button>
                                    </div>
                                    {login.ok === false && <h5>{login.error}</h5>}
                                </form>
                                <button className="btn btn-outline-dark" onClick = {modalRegisterOpen}>¿No eres usuario? Resgistrate</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
