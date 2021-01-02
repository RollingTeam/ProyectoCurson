import React, { useState, useEffect } from "react";
import NewCursoAdmin from "../componentes/NewCursoAdmin";
import Modal from "../componentes/Modal";
import ModalDeleteCurso from "../componentes/ModalDeleteCurso";
import NavbarAdminHome from "../componentes/NavbarAdminHome";
import { getCategoria } from "../helpers/Categorias";

export default function EditarCursoAdmin(props) {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };
  const cursoId = props.match.params.cursoId;

  const [actualizado, setActualizado] = useState({
    nombre: "",
    estado: true,
    categoria: {},
    descripcion: "",
    cupo: 0,
    nivel: "",
    contacto: "",
    img: "",
  });

  const [cat, setCat] = useState([]);

  const getDataId = async () => {
    try {
      const resp = await fetch(`http://localhost:3005/curso/${cursoId}`, {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const data = await resp.json();
      setActualizado(data.curso);
    } catch (error) {
      console.warn(error);
    }
  };

  useEffect(() => {
    getDataId();
    getCategoria()
      .then((response) => setCat(response))
      .catch((error) => console.log(error));
  }, []);

  const handleChange = ({ target }) => {
    setActualizado({
      ...actualizado,
      [target.name]: target.value,
    });
  };

  const cleanForm = (e) => {
    e.preventDefault();
    props.history.push("/admin/cursos");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let token = JSON.parse(localStorage.getItem("token"));
    try {
      await fetch(`http://localhost:3005/curso/${cursoId}`, {
        method: "PUT",
        body: JSON.stringify(actualizado),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          token: `${token}`,
        },
      });
      props.history.push("/admin/cursos");
    } catch (error) {
      console.warn(error);
    }
  };

  const borrarCurso = async (e) => {
    let token = JSON.parse(localStorage.getItem("token"));
    try {
      await fetch(`http://localhost:3005/curso/${cursoId}`, {
        method: "DELETE",
        headers: {
          token: `${token}`,
        },
      });
      props.history.push("/admin/cursos");
    } catch (error) {
      console.warn(error);
    }
  };

  const activarCurso = async (e) => {
    e.preventDefault();
    let token = JSON.parse(localStorage.getItem("token"));
    try {
      await fetch(`http://localhost:3005/curso/${cursoId}`, {
        method: "PUT",
        body: JSON.stringify({
          estado: true,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          token: `${token}`,
        },
      });
      props.history.push("/admin/cursos");
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <>
      <NavbarAdminHome />
      <div className="container-fluid mt-5">
      <NewCursoAdmin
        handleChange={handleChange}
        formValues={actualizado}
        categorias={cat}
      />
      <div className="form-group d-flex justify-content-center mt-4">
        <button
          type="button"
          className="btn btn-secondary mx-3"
          onClick={cleanForm}
        >
          Cancelar
        </button>
        <button
          type="button"
          className="btn btn-secondary mx-3"
          onClick={handleSubmit}
        >
          Guardar
        </button>
        {actualizado.estado === true && (
          <button
            type="button"
            className="btn btn-danger mx-3"
            onClick={handleOpenModal}
          >
            Eliminar
          </button>
        )}
        {actualizado.estado === false && (
          <button
            type="button"
            className="btn btn-success mx-3"
            onClick={activarCurso}
          >
            Activar
          </button>
        )}
        {openModal && (
          <Modal>
            <ModalDeleteCurso
              handleCloseModal={handleCloseModal}
              borrarCurso={borrarCurso}
            />
          </Modal>
        )}
      </div>
      </div>
    </>
  );
}
