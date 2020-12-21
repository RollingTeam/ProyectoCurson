import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import "../css/modalVerMasCursos.css";
// import "../css/botones.css";

export default function ModalVerDetalleCurso(props) {
  const cursoId = props.match.params.cursoId;
  // console.log(cursoId)
  const handleCloseModal = () => {
    props.history.push("/cursos");
  };
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
  return (
    <Modal>
      <div className="Modal">
        <div className="Modal__container modal-dialog-scrollable">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header p-1">
                <h5 className="modal-title p-2">
                  <strong>{cursoForm.form.nombre}</strong>
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={handleCloseModal}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <img
                  src={cursoForm.form.imagen}
                  className="card-img-top img-card img-fluid"
                  alt="..."
                ></img>
                <span className="badge badge-warning categorias">
                  {cursoForm.form.categoria}
                </span>
                <span className="badge badge-pill badge-info cupos">
                  {cursoForm.form.cupo} Lugares
                </span>
                <div className="text-center mt-1">
                  <p>{cursoForm.form.descripcion}</p>
                </div>
                <div className="text-center">
                  Contacto:<a href="link">{cursoForm.form.contacto}</a>
                </div>
              </div>
              <div className="modal-footer justify-content-center">
                <button
                  type="button"
                  className="btn btn-primary-curso"
                  data-dismiss="modal"
                >
                  Inscribirse
                </button>
                <button type="button" className="btn btn-primary-curso">
                  Agregar a mis favoritos
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
