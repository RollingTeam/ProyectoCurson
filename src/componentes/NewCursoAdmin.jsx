import React, { useState, useEffect } from "react";

export default function NewCursoAdmin({ handleChange, formValues }) {
  const [categorias, setData] = useState([]);
  useEffect(() => {
    getCategorias();
  }, []);
  const getCategorias = async () => {
    const resp = await fetch("http://localhost:3009/categorias");
    const datos = await resp.json();
    console.log(datos);
    setData(datos);
  };

  return (
    <div className="container my-4">
      <form>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="row">
                <div className="form-group col">
                  <label className="color-rosa">Nombre del Curso</label>
                  <input
                    type="text"
                    className="form-control"
                    name="nombre"
                    onChange={handleChange}
                    value={formValues.nombre}
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-group col">
                  <label className="color-rosa">Descripcion</label>
                  <textarea
                    className="form-control"
                    rows="3"
                    name="descripcion"
                    onChange={handleChange}
                    value={formValues.descripcion}
                  ></textarea>
                </div>
              </div>
              <div className="row">
                <div className="form-group col-12 col-sm-12 col-md-6 col-md-4">
                  <label className="color-rosa">Duracion</label>
                  <input
                    type="number"
                    className="form-control"
                    name="duracion"
                    onChange={handleChange}
                    value={formValues.duracion}
                  />
                </div>
                <div className="form-group col-12 col-sm-12 col-md-6 col-md-4">
                  <label className="color-rosa">Lugares Disponibles</label>
                  <input
                    type="number"
                    className="form-control"
                    name="cupo"
                    onChange={handleChange}
                    value={formValues.cupo}
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-group col-12 col-sm-12 col-md-6 col-md-6">
                  <label className="color-rosa">Categoría</label>
                  <select
                    className="form-control"
                    name="categoria"
                    onChange={handleChange}
                    value={formValues.categoria}
                    defaultValue
                  >
                    {categorias.map((cat) => {
                      return <option>{cat.nombre}</option>;
                    })}
                  </select>
                </div>
                <div className="form-group col-12 col-sm-12 col-md-6 col-md-6">
                  <label className="color-rosa">Nivel</label>
                  <select
                    className="form-control"
                    name="nivel"
                    onChange={handleChange}
                    value={formValues.nivel}
                    defaultValue
                  >
                    <option>Principiante</option>
                    <option>Intermedio</option>
                    <option>Avanzado</option>
                  </select>
                </div>
              </div>
              <div className="row">
                <div className="form-group col">
                  <label className="color-rosa">
                    Imagen de Portada del Curso
                  </label>
                  <input
                    type="url"
                    className="form-control"
                    name="imagen"
                    onChange={handleChange}
                    value={formValues.imagen}
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-group col">
                  <label className="color-rosa">Contacto:</label>
                  <input
                    type="url"
                    className="form-control"
                    name="contacto"
                    onChange={handleChange}
                    value={formValues.contacto}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
