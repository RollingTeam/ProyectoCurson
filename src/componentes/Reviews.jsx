import React, { useState, useEffect } from "react";
import "../css/reviews.css";
import ReviewList from "./ReviewList";
import Review from "./Review";
import md5 from "md5";
import Spinner from 'react-bootstrap/Spinner'

export default function Reviews({ingreso}) {

  const token = JSON.parse(localStorage.getItem("token")) || "";
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibilidad, setVisibilidad] = useState(false);

  const [reviewForm, setReviewForm] = useState({
    form: {
      id: "",
      curso: "",
      user: "",
      img: "",
      comentario: "",
      created_at: "",
      calificacion: "",
    },
  });

  const [nuevaReview, setNuevaReview] = useState(false);

  useEffect(() => {
    getData()
      .then((response) => setData(response))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      setLoading(false);
    }
  }, [data]);

  useEffect(() => {
    getData()
      .then((response) => setData(response))
      .catch((error) => console.log(error));
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
        curso: "",
        user: "",
        img: "",
        comentario: "",
        created_at: "",
        calificacion: "",
      },
    });
  };

  const getUser = async () => {
    let id = JSON.parse(localStorage.getItem("id"));
    try {
      // const resp = await fetch(`http://localhost:3005/usuarios/${id}`);
      const resp = await fetch(`https://afternoon-fjord-84174.herokuapp.com/usuarios/${id}`);
      const data = await resp.json();
      console.log(data);
      const hash = md5(data.usuario.email);
      let imagen = `https://www.gravatar.com/avatar/${hash}?d=identicon`;
      setReviewForm({
        ...reviewForm,
        form: {
          user: data.usuario.nombre,
          img: imagen,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    if (
      reviewForm.form.comentario == "" ||
      reviewForm.form.calificacion == "" ||
      reviewForm.form.curso == ""
    ) {
      alert("Debes completar todos los Campos");
    } else {
      let token = JSON.parse(localStorage.getItem("token"));
      getUser();
      e.preventDefault();
      try {
        // await fetch("http://localhost:3005/review", {
          await fetch("https://afternoon-fjord-84174.herokuapp.com/review", {
          method: "POST",
          body: JSON.stringify(reviewForm.form),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            token: `${token}`,
          },
        });
      } catch (error) {
        console.warn(error);
      }
      hiddenReview();
      setNuevaReview(true);
    }
    console.log(nuevaReview)
  };

  const getData = async () => {
    try {
      // const resp = await fetch("http://localhost:3005/review", {
        const resp = await fetch("https://afternoon-fjord-84174.herokuapp.com/review", {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const data = await resp.json();
      return data.reviews;
    } catch (error) {
      return error;
    }
  };

  return (
    <>
      <div className="container-fluid my-5" id="reviews">
        <div className="bd-negro d-flex justify-content-center my-5">
          <label className="size-titulo">Reviews</label>
        </div>
        <div className="container">
          <div className="row" id="reviewList">
            {loading ?  <Spinner animation="grow" variant="dark" className="mx-auto m-4" /> : <ReviewList data={data} />}
          </div>
          {ingreso.token && (
            <div className="row">
              <button
                className="btn btn-danger mx-auto mt-3"
                onClick={showReview}
              >
                Nueva Review
              </button>
            </div>
          )}
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
