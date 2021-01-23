import React, { useState, useEffect } from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import "../css/categorias.css";
import { getCategoria } from "../helpers/Categorias";

export default function NavCategorias() {
  const [cat, setCat] = useState([]);
  const [activeCat, setActiveCat] = useState([]);
  const [arrayCat, setArrayCat] = useState([]);
  const [visibilidad, setVisibilidad] = useState(false);

  useEffect(() => {
    getCategoria()
      .then((response) => setCat(response))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    let categorias = cat.filter((c) => {
      return c.estado === true;
    });
    setActiveCat(categorias);
  }, [cat]);

  useEffect(() => {
    if(activeCat.length>0){
    setVisibilidad(true)}
    let arrayCat = activeCat.filter((c, index)=>{
      return index >2
    })
    setArrayCat(arrayCat)
  }, [activeCat]);

  return (
    <div className="my-3">
      <nav className="navbar navbar-expand-lg navbar-light d-flex justify-content-around bd-negro">
        <div>
          {visibilidad && (
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active mx-5">
                <a className="nav-link" href="#!">
                  {activeCat[0].nombre}
                </a>
              </li>
              <li className="nav-item active mx-5">
                <a className="nav-link" href="#!">
                  {activeCat[1].nombre}
                </a>
              </li>
              <li className="nav-item active mx-5">
                <a className="nav-link" href="#!">
                  {activeCat[2].nombre}
                </a>
              </li>
              <li className="nav-item active mx-5">
                <DropdownButton className="btn-categorias" title="Mas...">
                  {arrayCat.map((categoria, _id) => {
                    return (
                      <Dropdown.Item eventKey={categoria._id}>
                        {categoria.nombre}
                      </Dropdown.Item>
                    );
                  })}
                </DropdownButton>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
}
