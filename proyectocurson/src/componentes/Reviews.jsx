import React, { useState, useEffect } from "react";
import "../css/reviews.css";
import ReviewList from "./ReviewList";
import Review from "./Review";

export default function Reviews() {
  const [data, setData] = useState({
    datos: [],
  });

  const [loading, setLoading] = useState(true);

  const [visibilidad, setVisibilidad] = useState(false);

  const [reviewForm, setReviewForm] = useState({
    form: {
      id: "",
      curso: "",
      user: "",
      imgUser: "",
      comentario: "",
      fecha: "",
      calificacion: "",
    },
  });

  const [nuevaReview, setNuevaReview] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getData();
  }, [nuevaReview]);

  const showReview = () => {
    setVisibilidad(true);
  };

  const hiddenReview = () => {
    setVisibilidad(false);
  };

  const handleChange = (e) => {
    setReviewForm({
      form: {
        ...reviewForm.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  const cleanReview = (e) => {
    e.preventDefault();
    setReviewForm({
      form: {
        id: "",
        curso: "",
        user: "",
        imgUser: "",
        comentario: "",
        fecha: "",
        calificacion: "",
      },
    });
  };

  // const addReview = (e)=>{
  //   e.preventDefault()
  //   setData({
  //     datos:[
  //       ...data.datos,
  //       reviewForm.form
  //     ]}
  //   )
  //   cleanReview()
  //   hiddenReview()
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setNuevaReview(true);
    try {
      await fetch("http://localhost:3006/data", {
        method: "POST",
        body: JSON.stringify(reviewForm.form),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
    } catch (error) {
      console.warn(error);
    }
    setNuevaReview(false);
    hiddenReview();
  };
  const getData = async () => {
    const resp = await fetch("http://localhost:3006/data");
    const data = await resp.json();
    setData({
      datos: data,
    });
    setLoading(false);
  };
  // const borrarReview=async()=>{
  //   try {
  //     await fetch(`http://localhost:3006/data/EBBBoZN`,{
  //     method:'DELETE',
  //     })
  //   } catch (error) {
  //   }
  // }
  // const getData = ()=>{
  //   setTimeout(() => {
  //     setData({
  //       datos: [ ...data.datos,
  //           {
  //             "id": "01",
  //             "curso": "Introducción al diseño UX",
  //             "user": "Florencia Pistan",
  //             "imgUser":"https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png",
  //             "comentario": "Es un curso completo con informacion util para proyectos",
  //             "fecha": "2020-10-06",
  //             "calificacion": 5
  //           },
  //           {
  //             "id": "02",
  //             "curso": "Caligrafía inglesa de la A a la Z",
  //             "user": "Gabriel Moreira",
  //             "imgUser":"https://c7.uihere.com/files/536/216/964/technical-support-computer-icons-user-avatar-avatar.jpg",
  //             "comentario": "Me parecio un curso super interesante y con informacion muy completa",
  //             "fecha": "2020-09-06",
  //             "calificacion": 4
  //           },
  //           {
  //             "id": "03",
  //             "curso": "Desarrollo Web Responsive HTML y CSS",
  //             "user": "Rodrigo",
  //             "imgUser":"https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png",
  //             "comentario": "Estuvo muy bueno y el material para cada tema esta muy completo",
  //             "fecha": "2020-08-05",
  //             "calificacion": 3
  //           }
  //       ]
  //     })
  //     setLoading(false)
  //   }, 3000);
  // }

  return (
    <>
      <div className="container-fluid my-5" id="reviews">
        <div className="bd-negro d-flex justify-content-center my-5">
          <label className="size-titulo">Reviews</label>
        </div>
        <div className="container">
          <div className="row" id="reviewList">
            {loading ? <h3>Loading...</h3> : <ReviewList data={data.datos} />}
          </div>
          <div className="row">
            <button className="btn btn-danger mx-auto" onClick={showReview}>
              Nueva Review
            </button>
          </div>
          {visibilidad ? (
            <Review
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              formValues={reviewForm.form}
              hiddenReview={hiddenReview}
              cleanReview={cleanReview}
            />
          ) : null}
        </div>
      </div>
    </>
  );
}
