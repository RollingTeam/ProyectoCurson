import React, { useState, useEffect } from "react";
import CursosInfo from "../componentes/CursosInfo";
import CursosListAdmin from "../componentes/CursosListAdmin";
import NavbarAdminHome from "../componentes/NavbarAdminHome";


export default function CursosAdmin() {
  // const [data, setData] = useState({
  //   cursos: {},
  // });


  // const getData = async () => {
  //   const resp = await fetch("http://localhost:3008/cursos");
  //   const data = await resp.json();
  //   setData({
  //     cursos: data,
  //   });
  // };

  //  const getData = async () => {
  //   const resp = await fetch("http://localhost:3005/curso", {
  //     method: "GET",
  //     headers: {
  //       "Content-type": "application/json; charset=UTF-8"
  //     }
  //   });
  //   const data = await resp.json();
  //   console.log(data)
  //   console.log(data.cursos)
  //   setData({
  //     cursos: data.cursos,
  //   });
  // };
  // console.log(data.cursos)

  return (
    <div>
      <NavbarAdminHome />
      <div className="container">
        <CursosInfo />
        <CursosListAdmin />
      </div>
    </div>
  );
}
