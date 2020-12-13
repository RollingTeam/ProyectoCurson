import { React, useState } from 'react'
import Modal from "../componentes/Modal";
import LogIn from "../componentes/LogIn";
import Logo from '../img/logo-navbar.png'
import '../css/nabvar.css';

export default function Navbar() {

  const [openModal, setOpenModal] = useState(false)

  const modalIsOpen = () =>{
      setOpenModal(true)
  }

  const modalIsClose = () =>{
      setOpenModal(false)
  }

    return (
<<<<<<< HEAD
      <>
        <div className="navbar navbar-expand-lg navbar-light bg-blanco p-2 navbar-flex">
          <button className="navbar-toggler nav-menuHamb" type="button" data-toggle="collapse"
              data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-brand m-0 d-none d-sm-none d-md-block" href="index.html"><img    className="img-fluid logo" src={Logo} alt="logo curson navbar"/>
            </div>
          <button className="btn btn-danger float-right" onClick={modalIsOpen}>Log in</button>
        </div>
          {openModal &&
            <Modal>
              <LogIn modalIsClose={modalIsClose}/>
            </Modal>}
      </>
          
  
=======
      <div className="navbar navbar-expand-lg navbar-light bg-blanco p-2">
      <button className="navbar-toggler nav-menuHamb" type="button" data-toggle="collapse"
          data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
      </button>
      <div className="navbar-brand m-0 d-none d-sm-none d-md-block" href="index.html"><img className="img-fluid logo" src={Logo} alt="logo curson navbar"/>
        </div>
      </div>    
>>>>>>> 59f7b12ed724687d7265573def2d1bc4894e67da
    );
  }





