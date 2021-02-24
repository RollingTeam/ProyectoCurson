import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Logo from "../img/logo-navbar.png";

import "../css/modal.css";

export default function NcursoModal(props) {
  const [solicitudForm, setSolicitudForm] = useState({
    form: {
      nombre: "",
      descripcion: "",
      categoria: "",
      nivel: "",
      cupo: "",
      duracion: "",
      img: "",
      contacto: "",
    },
  });

  const { register, errors} = useForm();
  const [NuevoCurso, setNuevoCurso] = useState([]);
  const [cat, setCat] = useState([]);
  const [activeCat, setActiveCat] = useState([]);
  
  useEffect(() => {
    getCategoria();
  }, []);

  useEffect(() => {
    let categorias = cat.filter((c) => {
      return c.estado === true;
    });
    setActiveCat(categorias);
  }, [cat]);

  const onSubmit = (data, e) => {
    console.log(data);
    e.target.reset();
    setNuevoCurso([...NuevoCurso, data]);
  };

  const handleChange = (e) => {
    setSolicitudForm({
      form: {
        ...solicitudForm.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  const getCategoria = async () => {
    try {
      // const resp = await fetch("http://localhost:3005/categoria", {
        const resp = await fetch("https://afternoon-fjord-84174.herokuapp.com/categoria", {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const data = await resp.json();
      setCat(data.categorias);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    if (
      solicitudForm.form.nombre == "" ||
      solicitudForm.form.descripcion == "" ||
      solicitudForm.form.cupo == "" ||
      solicitudForm.form.nivel == "" ||
      solicitudForm.form.contacto == "" ||
      solicitudForm.form.duracion == "" ||
      solicitudForm.form.img==""
    ) {
      alert("Debes completar todos los Campos");
    } else {
      let token = JSON.parse(localStorage.getItem("token"));
      e.preventDefault();
      try {
        // const resp = await fetch("http://localhost:3005/solicitud", {
          const resp = await fetch("https://afternoon-fjord-84174.herokuapp.com/solicitud", {
          method: "POST",
          body: JSON.stringify(solicitudForm.form),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            token: `${token}`,
          },
        });
        const data = await resp.json();
        console.log(data)
      } catch (error) {
        console.warn(error);
      }
    }
  };

  return (
    <div className="Modal">
      <div className="modal-dialog modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <img src={Logo} alt="logo-curson" className="logo-modal" />
            <button
              type="button"
              onClick={props.handleCloseModal}
              className="close"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  name="nombre"
                  type="text"
                  className="form-control"
                  placeholder="Nombre del curso"
                  onChange={handleChange}
                  value={solicitudForm.form.nombre}
                  required
                  autoComplete="off"
                  ref={register({
                    required: {
                      value: true,
                      message: "Campo obligatorio",
                    },
                  })}
                />
                {errors.nombreCurso && (
                  <span className="text-danger text-small d-block mb-2">
                    {errors.nombreCurso.message}
                  </span>
                )}
              </div>

              <div className="form-group">
                <textarea
                  name="descripcion"
                  className="form-control"
                  rows="3"
                  placeholder="¿De que se trata el curso?"
                  onChange={handleChange}
                  value={solicitudForm.form.descripcion}
                  ref={register({
                    required: {
                      value: true,
                      message: "Campo obligatorio",
                    },
                  })}
                ></textarea>
                {errors.descripcion && (
                  <span className="text-danger text-small d-block mb-2">
                    {errors.descripcion.message}
                  </span>
                )}
              </div>

              <div className="form-group">
                <input
                  name="duracion"
                  type="number"
                  className="form-control"
                  placeholder="Duración (horas)"
                  onChange={handleChange}
                  value={solicitudForm.form.duracion}
                  ref={register({
                    required: {
                      value: true,
                      message: "Campo obligatorio",
                    },
                  })}
                />
                {errors.duracion && (
                  <span className="text-danger text-small d-block mb-2">
                    {errors.duracion.message}
                  </span>
                )}
              </div>

              <div className="form-group">
                <input
                  name="cupo"
                  type="number"
                  className="form-control"
                  placeholder="Cupo máximo"
                  onChange={handleChange}
                  value={solicitudForm.form.cupo}
                  ref={register({
                    required: {
                      value: true,
                      message: "Campo obligatorio",
                    },
                  })}
                />
                {errors.cupo && (
                  <span className="text-danger text-small d-block mb-2">
                    {errors.cupo.message}
                  </span>
                )}
              </div>

              <div className="form-group">
                <label>Categoría del curso</label>
                <select
                  name="categoria"
                  ref={register}
                  className="form-control"
                  onChange={handleChange}
                  value={solicitudForm.form.categoria._id}
                >
                   {activeCat.map((cat) => {
                      return <option key={cat._id} value={cat._id}>{cat.nombre}</option>;
                    })}
                </select>
                {errors.categoria && (
                  <span className="text-danger text-small d-block mb-2">
                    {errors.categoria.message}
                  </span>
                )}
              </div>

              <div className="form-group">
                <label>Nivel del Curso</label>
                <select
                  name="nivel"
                  onChange={handleChange}
                  value={solicitudForm.form.nivel}
                  ref={register({
                    required: {
                      value: true,
                      message: "Campo obligatorio",
                    },
                  })}
                  className="form-control"
                >
                  <option>Basico</option>
                  <option>Intermedio</option>
                  <option>Avanzado</option>
                </select>
                {errors.nivel && (
                  <span className="text-danger text-small d-block mb-2">
                    {errors.nivel.message}
                  </span>
                )}
              </div>

              <div className="form-group">
                <label>Imagen de portada del curso:</label>

                <input
                  name="img"
                  type="url"
                  className="form-control"
                  onChange={handleChange}
                  value={solicitudForm.form.img}
                  autoComplete="off"
                  placeholder="Ingrese la URL de la imagen"
                  ref={register({
                    required: {
                      value: true,
                      message: "Campo obligatorio",
                    },
                  })}
                />

                {errors.img && (
                  <span className="text-danger text-small d-block mb-2">
                    {errors.img.message}
                  </span>
                )}
              </div>

              <div className="form-group">
                <label>Contacto del curso:</label>

                <input
                  name="contacto"
                  type="url"
                  className="form-control"
                  placeholder="Contacto"
                  onChange={handleChange}
                  value={solicitudForm.form.contacto}
                  autoComplete="off"
                  ref={register({
                    required: {
                      value: true,
                      message: "Campo obligatorio",
                    },
                  })}
                />

                {errors.contacto && (
                  <span className="text-danger text-small d-block mb-2">
                    {errors.contacto.message}
                  </span>
                )}
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  onClick={props.handleCloseModal}
                  className="btn btn-secondary"
                >
                  Cancelar
                </button>
                <button type="submit" className="btn btn-danger">
                  Enviar solicitud
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
