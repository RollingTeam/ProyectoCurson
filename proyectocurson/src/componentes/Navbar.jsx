import { React, useState } from 'react'
import Modal from "../componentes/Modal";
import LogIn from "../componentes/LogIn";
import Register from "../componentes/Register";
import Logo from '../img/logo-navbar.png';
import '../css/nabvar.css';

export default function Navbar() {

  //Estados de modal
  const [openLoginModal, setOpenLoginModal] = useState(false)
  const [openRegisterModal, setOpenRegisterModal] = useState(false)
  const [login, setLogin] = useState({
    credenciales:{
      userName:"",
      password:""
    }
  })
  const [registro, setRegistro] = useState({
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

  //Funciones para controlar apertura y cierre de modales

  const modalLoginOpen = () =>{
      setOpenLoginModal(true)
  }

  const modalLoginClose = () =>{
      setOpenLoginModal(false)
  }

  const modalRegisterOpen = () =>{
    setOpenLoginModal(false)
    setOpenRegisterModal(true)
}

const modalRegisterClose = () =>{
    setOpenRegisterModal(false)
}

//Funciones para controlar cambios de estados de modales

const handleChangeLogin = (e) => {
  setLogin({
    credenciales:{
      ...login.credenciales,
      [e.target.name] : e.target.value
    }
  })
}

const handleChangeRegistro = (e) => {
  setRegistro({
    formulario:{
      ...registro.formulario,
      [e.target.name] : e.target.value
    }
  })
}

//Funciones para controlar submit de modales

const inciarSesion = async(e) => {

  e.preventDefault()

  try {
    const resp = await fetch(`http://localhost:3005/users?userName=${login.credenciales.userName}`)
    const data = resp.json()

  } catch (error) {
    console.warn(error)
  };
};

const handleSubmitRegistro = async () => {

  try {
    const resp = await fetch("http://localhost:3005/users", {
      method: "POST",
      body: JSON.stringify(registro.formulario),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    console.log('Hiciste submit');
  } catch (error) {
    console.warn(error);
  };
};


  return (
    <>
      <div className="navbar navbar-expand-lg navbar-light bg-blanco p-2 navbar-flex">
        <button className="navbar-toggler nav-menuHamb" type="button" data-toggle="collapse"
            data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-brand m-0 d-none d-sm-none d-md-block" href="index.html"><img className="img-fluid logo" src={Logo} alt="logo curson navbar"/>
          </div>
        <button className="btn btn-danger float-right" onClick={modalLoginOpen}>Log in</button>
      </div>
        {openLoginModal &&
          <Modal>
            <LogIn modalLoginClose={modalLoginClose}
                   modalRegisterOpen={modalRegisterOpen} 
                   credencialesValue={login.credenciales} 
                   handleChangeLogin={handleChangeLogin}
                   inciarSesion={inciarSesion}/>
          </Modal>}
  
        {openRegisterModal &&
          <Modal>
              <Register modalRegisterClose={modalRegisterClose} 
                        datosRegistro={registro.formulario} 
                        handleChangeRegistro={handleChangeRegistro}
                        handleSubmitRegistro={handleSubmitRegistro}
                        setRegistro={setRegistro}/>
          </Modal>}
        
    </>
        
  
  );
}






