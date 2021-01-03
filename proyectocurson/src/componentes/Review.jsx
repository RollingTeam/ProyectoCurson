import React from "react";
import "../css/reviews.css";

export default function Review({
  handleChange,
  handleSubmit,
  formValues,
  hiddenReview,
  cleanReview,
}) {
  // let fec;
  // const getFecha = ()=>{
  //     let dia= new Date().getDate()
  //     let mes= new Date().getMonth()+1
  //     let anio= new Date().getFullYear()
  //     return fec =`${anio}-${mes}-${dia}`
  // }

  // useEffect(() => {
  //     getFecha()
  // })

  return (
    <div>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <div className="row mt-3">
          <div className="col-md-5">
            <div className="form-group d-flex justify-content-center">
              <label className="color-rosa">Nombre:</label>
            </div>
            <div className="form-group d-flex justify-content-center">
              <input
                type="text"
                className="input-review"
                name="user"
                onChange={handleChange}
                value={formValues.user}
              />
            </div>
          </div>
          <div className="col-md-5">
            <div className="form-group d-flex justify-content-center">
              <label className="color-rosa">Fecha:</label>
            </div>
            <div className="form-group d-flex justify-content-center">
              <input
                type="date"
                className="input-review"
                name="fecha"
                onChange={handleChange}
                value={formValues.fecha}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-5">
            <div className="form-group d-flex justify-content-center">
              <label className="color-rosa">Nombre del Curso:</label>
            </div>
            <div className="form-group d-flex justify-content-center">
              <input
                type="text"
                name="curso"
                maxLength="40"
                placeholder="Curso"
                className="input-review"
                onChange={handleChange}
                value={formValues.curso}
              />
            </div>
          </div>
          <div className="col-md-5">
            <div className="form-group d-flex justify-content-center">
              <label className="color-rosa">Comentario:</label>
            </div>
            <div className="form-group d-flex justify-content-center">
              <textarea
                name="comentario"
                maxLength="80"
                placeholder="Ingresa aqui tu comentario"
                className="form-control"
                onChange={handleChange}
              >
                {formValues.comentario}
              </textarea>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-5">
            <div className="form-group d-flex justify-content-center">
              <label className="color-rosa">Calificacion:</label>
            </div>
            <div className="form-check-inline d-flex justify-content-center">
              <input
                className="form-check-input"
                type="radio"
                name="calificacion"
                value="5"
                onChange={handleChange}
                defaultChecked
              />
              <label className="form-check-label">5</label>
            </div>
            <div className="form-check-inline d-flex justify-content-center">
              <input
                className="form-check-input"
                type="radio"
                name="calificacion"
                value="4"
                onChange={handleChange}
              />
              <label className="form-check-label">4</label>
            </div>
            <div className="form-check-inline d-flex justify-content-center">
              <input
                className="form-check-input"
                type="radio"
                name="calificacion"
                value="3"
                onChange={handleChange}
              />
              <label className="form-check-label">3</label>
            </div>
            <div className="form-check-inline d-flex justify-content-center">
              <input
                className="form-check-input"
                type="radio"
                name="calificacion"
                value="2"
                onChange={handleChange}
              />
              <label className="form-check-label">2</label>
            </div>
            <div className="form-check-inline d-flex justify-content-center">
              <input
                className="form-check-input"
                type="radio"
                name="calificacion"
                value="1"
                onChange={handleChange}
              />
              <label className="form-check-label">1</label>
            </div>
          </div>
        </div>
        <div className="mt-2 mb-3 d-flex justify-content-around">
          <button className="btn btn-dark mx-auto" onClick={hiddenReview}>
            Cancelar
          </button>
          <button className="btn btn-danger mx-auto" onClick={handleSubmit}>
            Enviar
          </button>
          <button className="btn btn-dark mx-auto" onClick={cleanReview}>
            Resetear
          </button>
        </div>
      </form>
    </div>
  );
}
