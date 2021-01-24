import React, { useState, useEffect } from "react";
import "../css/reviews.css";
import { FaStar, FaRegStar } from "react-icons/fa";

export default function ReviewList({ data }) {
  const [lista, setLista] = useState([]);

  useEffect(() => {
    let lista;
    if (data.length > 0) {
      data.sort(function (a, b) {
        return b.created_at - a.created_at
      });
    }
    console.log(data)
    lista = data.filter((r, index) => {
      return index < 4;
    });
    setLista(lista);
  }, [data]);

  return (
    <>
      {lista.map((review) => {
        return (
          <div key={review.id} className="col-md-6 mt-3">
            <div className="card card-multicolor">
              <div className="row no-gutters d-flex justify-content-center">
                <div className="col-10 col-md-4 d-flex justify-content-center align-items-center">
                  <img src={review.img} className="BadgesListItem__avatar ml-2 mt-2 img-fluid" alt="avatar usuario" />
                </div>
                <div className="col-10 col-md-8">
                  <div className="card-body">
                    <h5 className="card-title text-center mt-2">
                      {review.curso}
                    </h5>
                    <p className="card-text">{review.comentario}</p>
                    <p className="card-text">
                      <small className="color-rosa">{review.user}</small>
                    </p>
                    <p className="card-text">
                      <small className="text-muted">{review.created_at}</small>
                    </p>
                    <p className="card-text">
                      <span className="float-right">
                        {review.calificacion === 1 &&
                          (<>
                            <FaStar className="estilo-icon" />
                            <FaRegStar className="estilo-icon" />
                            <FaRegStar className="estilo-icon" />
                            <FaRegStar className="estilo-icon" />
                            <FaRegStar className="estilo-icon" />
                          </>)}
                        {review.calificacion === 2 &&
                          (<>
                            <FaStar className="estilo-icon" />
                            <FaStar className="estilo-icon" />
                            <FaRegStar className="estilo-icon" />
                            <FaRegStar className="estilo-icon" />
                            <FaRegStar className="estilo-icon" />
                          </>)}
                        {review.calificacion === 3 &&
                          (<>
                            <FaStar className="estilo-icon" />
                            <FaStar className="estilo-icon" />
                            <FaStar className="estilo-icon" />
                            <FaRegStar className="estilo-icon" />
                            <FaRegStar className="estilo-icon" />
                          </>)}
                        {review.calificacion === 4 &&
                          (<>
                            <FaStar className="estilo-icon" />
                            <FaStar className="estilo-icon" />
                            <FaStar className="estilo-icon" />
                            <FaStar className="estilo-icon" />
                            <FaRegStar className="estilo-icon" />
                          </>)}
                        {review.calificacion === 5 &&
                          (<>
                            <FaStar className="estilo-icon" />
                            <FaStar className="estilo-icon" />
                            <FaStar className="estilo-icon" />
                            <FaStar className="estilo-icon" />
                            <FaStar className="estilo-icon" />
                          </>)}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
