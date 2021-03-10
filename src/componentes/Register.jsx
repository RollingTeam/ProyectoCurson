import React, { useState } from 'react'
import Logo from "../img/logo-navbar.png"

export default function Register({ modalRegisterClose, setIngreso }) {

    //------------- Estados -------------//

    const [registro, setRegistro] = useState({
        formulario: {
            nombre: "",
            apellido: "",
            email: "",
            password: "",
        }
    });

    const [login, setLogin] = useState({
        token: "",
        error: null,
        ok: true,
        loading: false,
    });

    const [repetir, setRepetir] = useState({
        contraseña: {
            passwordRepetir: ""
        }
    })


    //------------- Control de estados -------------//


    const handleChangeRepetir = (e) => {
        setRepetir({
            contraseña: {
                [e.target.name]: e.target.value,
            }
        })
    };

    const handleChange = (e) => {
        setRegistro({
            formulario: {
                ...registro.formulario,
                [e.target.name]: e.target.value,
            }
        })
    };

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (registro.formulario.password === repetir.contraseña.passwordRepetir) {

            try {

                const res = await fetch(`https://afternoon-fjord-84174.herokuapp.com/usuario/${registro.formulario.email}`, {
                    method: "GET",
                    headers: {
                        "Content-type": "application/json; charset=UTF-8",
                    },
                });

                const dataUser = await res.json()
                if (dataUser.usuario === null) {
                    // const resp = await fetch("http://localhost:3005/usuarios", {
                    const resp = await fetch("https://afternoon-fjord-84174.herokuapp.com/usuarios", {
                        method: "POST",
                        body: JSON.stringify(registro.formulario),
                        headers: {
                            "Content-type": "application/json; charset=UTF-8",
                        },
                    });

                    const data = await resp.json()
                    let credenciales = {
                        email: registro.formulario.email,
                        password: registro.formulario.password
                    }
                    alert('Te has registrado con exito!')
                    modalRegisterClose();
                    if (data.ok) {

                        setLogin({
                            loading: true,
                        });

                        try {
                            // const resp = await fetch("http://localhost:3005/login", {
                            const resp = await fetch("https://afternoon-fjord-84174.herokuapp.com/login", {
                                method: "POST",
                                body: JSON.stringify(credenciales),
                                headers: {
                                    "Content-type": "application/json; charset=UTF-8",
                                },
                            });

                            const data = await resp.json()

                            if (data.ok) {
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

                                modalRegisterClose()

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
                    }
                } else {
                    alert("El email ingresado ya existe para una cuenta de Curson")
                    modalRegisterClose()
                }
            } catch (error) {
                console.warn(error)
            }

        } else {
            alert('Las contraseñas no coinciden')
        }
    }

    return (
        <div className="modal-register">
            <div className="modal_container">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <img src={Logo} alt="logo-curson" className="logo-modal" />
                            <button type="button" className="close" data-dismiss="modal" onClick={modalRegisterClose} aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label>Nombre:</label>
                                    <input type="text" name="nombre" maxLength="20" value={registro.formulario.nombre} onChange={handleChange} className="form-control" autoComplete="off" required />
                                </div>
                                <div className="form-group">
                                    <label>Apellido:</label>
                                    <input type="text" name="apellido" maxLength="20" value={registro.formulario.apellido} onChange={handleChange} className="form-control" autoComplete="off" required />
                                </div>
                                <div className="form-group">
                                    <label>E-mail</label>
                                    <input type="email" name="email" value={registro.formulario.email} onChange={handleChange} className="form-control" autoComplete="off" required />
                                </div>
                                <div className="form-group">
                                    <label>Contraseña</label>
                                    <input type="password" name="password" minLength="8" maxLength="20" value={registro.formulario.password} onChange={handleChange} className="form-control" autoComplete="off" required />
                                </div>
                                <div className="form-group">
                                    <label>Repetir contraseña</label>
                                    <input type="password" name="passwordRepetir" minLength="8" maxLength="20" value={repetir.contraseña.passwordRepetir} onChange={handleChangeRepetir} className="form-control" autoComplete="off" required />
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
