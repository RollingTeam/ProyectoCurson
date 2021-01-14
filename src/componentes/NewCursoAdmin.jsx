import React from "react";

export default function NewCursoAdmin({
  handleChange,
  formValues,
  categorias,
}) {
  return (
    <>
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
                    required
                    autoComplete="off"
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
                    required
                    autoComplete="off"
                  ></textarea>
                </div>
              </div>
              <div className="row">
                <div className="form-group col-12 col-sm-12 col-md-6 col-md-4">
                  <label className="color-rosa">Duracion en Horas</label>
                  <input
                    type="number"
                    className="form-control"
                    name="duracion"
                    onChange={handleChange}
                    value={formValues.duracion}
                    required
                    autoComplete="off"
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
                    required
                    autoComplete="off"
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
                    value={formValues.categoria._id}
                  >
                    {categorias.map((cat) => {
                      return <option value={cat._id}>{cat.nombre}</option>;
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
                  >
                    <option>Basico</option>
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
                    name="img"
                    onChange={handleChange}
                    value={formValues.img}
                    required
                    autoComplete="off"
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
                    required
                    autoComplete="off"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
