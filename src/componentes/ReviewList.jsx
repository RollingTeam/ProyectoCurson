import React from "react";
import "../css/reviews.css";

export default function ReviewList({ data }) {
    return (
        <>
            {data.map((review) => {
                return (
                    <div key={review.id} className="col-md-6 mt-3">
                        <div className="card mb-3 card-multicolor">
                            <div className="row no-gutters d-flex justify-content-center">
                                <div className="col-10 col-md-4 d-flex justify-content-center align-items-center">
                                    <img src={review.imgUser} className="card-img" alt="..." />
                                </div>
                                <div className="col-10 col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title text-center mt-2">{review.curso}</h5>
                                        <p className="card-text">{review.comentario}</p>
                                        <p className="card-text"><small className="color-rosa">{review.user}</small></p>
                                        <p className="card-text"><small className="text-muted">{review.fecha}</small></p>
                                        <p className="card-text"><small className="color-rosa">{review.calificacion}</small></p>
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