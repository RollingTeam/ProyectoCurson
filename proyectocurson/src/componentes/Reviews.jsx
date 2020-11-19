import React,{useState,useEffect} from 'react'
import "../css/reviews.css";
import ReviewList from "./ReviewList"

export default function Reviews() {
    const [data, setData] = useState({
        datos: []
        // loading:true 
    });
    
    useEffect(() => {
        getData()
    },[])
    
    // const getData= async ()=>{
    //     const resp= await fetch("http://localhost:3006/data")
    //     const data = await resp.json()
    //     console.log(data)
    //     setData({
    //     datos:data,
    //     loading:false
    //     })
    // }

    const getData=()=>{
        setData({
            datos: [
                {
                  "id": "01",
                  "cursoName": "Introducción al diseño UX",
                  "userName": "Florencia Pistan",
                  "imgUser":"https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png",
                  "comentario": "Es un curso completo con informacion util para proyectos",
                  "fecha": "2020-10-06",
                  "calificacion": 5
                },
                {
                  "id": "02",
                  "cursoName": "Caligrafía inglesa de la A a la Z",
                  "userName": "Gabriel Moreira",
                  "imgUser":"https://c7.uihere.com/files/536/216/964/technical-support-computer-icons-user-avatar-avatar.jpg",
                  "comentario": "Me parecio un curso super interesante y con informacion muy completa",
                  "fecha": "2020-09-06",
                  "calificacion": 4
                },
                {
                  "id": "03",
                  "cursoName": "Desarrollo Web Responsive HTML y CSS",
                  "userName": "Rodrigo",
                  "imgUser":"https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png",
                  "comentario": "Estuvo muy bueno y el material para cada tema esta muy completo",
                  "fecha": "2020-08-05",
                  "calificacion": 3
                }      
              ]
        })
    }
    return (
    <>
      <div className="container">
        <label class="color-rosa size-review">Reviews</label>
        <div className="row">
            {/* {data.loading ? <h3>Loading...</h3> :  */}
            <ReviewList data={data.datos} />
            {/* } */}
        </div>
      </div>
    </>
    );
}
