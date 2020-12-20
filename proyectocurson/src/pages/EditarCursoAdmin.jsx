import React, { useState, useEffect } from "react";
import NewCursoAdmin from "../componentes/NewCursoAdmin";
import Modal from "../componentes/Modal";
import ModalDeleteCurso from "../componentes/ModalDeleteCurso";

export default function EditarCursoAdmin(props) {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };
  const cursoId = props.match.params.cursoId;
  const [cursoForm, setCursoForm] = useState({
    form: {
      id: "",
      nombre: "",
      descripcion: "",
      categoria: "",
      nivel: "",
      cupo: "",
      duracion: "",
      imagen: "",
      estado: 1,
      contacto: "",
    },
  });

  const getDataId = async () => {
    try {
      const resp = await fetch(`http://localhost:3008/cursos?id=${cursoId}`);
      const data = await resp.json();
      console.log(data);
      setCursoForm({
        form: data[0],
      });
    } catch (error) {
      console.warn(error);
    }
  };

  useEffect(() => {
    getDataId();
  }, []);

  const handleChange = (e) => {
    setCursoForm({
      form: {
        ...cursoForm.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  const cleanForm = (e) => {
    e.preventDefault();
    props.history.push("/admin/cursos");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch(`http://localhost:3008/cursos/${cursoId}`, {
        method: "PUT",
        body: JSON.stringify(cursoForm.form),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      props.history.push("/admin/cursos");
    } catch (error) {
      console.warn(error);
    }
  };

  const borrarCurso = async (e) => {
    console.log("Entre a borrar Curso");
    console.log(e);
    try {
      await fetch(`http://localhost:3008/cursos/${cursoId}`, {
        method: "DELETE",
      });
      props.history.push("/admin/cursos");
    } catch (error) {}
  };

  return (
    <div>
      <NewCursoAdmin handleChange={handleChange} formValues={cursoForm.form} />
      <div className="form-group d-flex justify-content-center mt-4">
        <button
          type="button"
          className="btn btn-secondary mr-3"
          onClick={cleanForm}
        >
          Cancelar
        </button>
        <button
          type="button"
          className="btn btn-secondary ml-3"
          onClick={handleSubmit}
        >
          Editar
        </button>
        <button
          type="button"
          className="btn btn-secondary ml-3"
          onClick={handleOpenModal}
        >
          Eliminar
        </button>
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
  );
}
