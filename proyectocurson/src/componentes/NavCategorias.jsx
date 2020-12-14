import React from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import "../css/categorias.css";

export default function NavCategorias() {
  return (
    <div className="my-3">
      <nav className="navbar navbar-expand-lg navbar-light d-flex justify-content-around bd-negro">
        <div>
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active mx-5">
              <a className="nav-link" href="#!">
                Arte
              </a>
            </li>
            <li className="nav-item active mx-5">
              <a className="nav-link" href="#!">
                Tecnologia
              </a>
            </li>
            <li className="nav-item active mx-5">
              <a className="nav-link" href="#!">
                Idiomas
              </a>
            </li>
            <li className="nav-item active mx-5">
              <DropdownButton
                className="btn-categorias"
                title="Mas..."
              >
                <Dropdown.Item eventKey="option-1">option-1</Dropdown.Item>
                <Dropdown.Item eventKey="option-2">option-2</Dropdown.Item>
                <Dropdown.Item eventKey="option-3">option 3</Dropdown.Item>
              </DropdownButton>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
