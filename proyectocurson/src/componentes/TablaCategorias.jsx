import React from 'react'
import { MdDeleteForever } from 'react-icons/md';
import { ImBlocked } from 'react-icons/im';
import { FaEdit } from 'react-icons/fa';
import '../css/iconsTable.css'
export default function TablaCategorias() {
    return (
        <div className="container mt-2 mb-2">
            <h3>Categorías</h3>
            <div className="table-responsive">
                <table className="table table-hover">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Nombre del Curso</th>
                            <th scope="col">Categoría</th>
                            <th scope="col">Estado</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">#2131</th>
                            <td>Intro al FrontEnd</td>
                            <td>Programación</td>
                            <td>Activo</td>
                            <td><MdDeleteForever className="icons-table icons-table__delete" /> <ImBlocked className="icons-table icons-table__block" /> <FaEdit className="icons-table icons-table__edit" /></td>                        </tr>
                        <tr>
                            <th scope="row">#3341</th>
                            <td>Lettering</td>
                            <td>Manualidades</td>
                            <td>Activo</td>
                            <td><MdDeleteForever className="icons-table icons-table__delete" /> <ImBlocked className="icons-table icons-table__block" /> <FaEdit className="icons-table icons-table__edit" /></td>                        </tr>
                        <tr>
                            <th scope="row">#1412</th>
                            <td>Piano Nivel Inicial</td>
                            <td>Música</td>
                            <td>Activo</td>
                            <td><MdDeleteForever className="icons-table icons-table__delete" /> <ImBlocked className="icons-table icons-table__block" /> <FaEdit className="icons-table icons-table__edit" /></td>                        </tr>
                        <tr>
                            <th scope="row">#1412</th>
                            <td>Piano Nivel Inicial</td>
                            <td>Música</td>
                            <td>Activo</td>
                            <td><MdDeleteForever className="icons-table icons-table__delete" /> <ImBlocked className="icons-table icons-table__block" /> <FaEdit className="icons-table icons-table__edit" /></td>
                        </tr>
                        <tr>
                            <th scope="row">#1412</th>
                            <td>Piano Nivel Inicial</td>
                            <td>Música</td>
                            <td>Activo</td>
                            <td><MdDeleteForever className="icons-table icons-table__delete" /> <ImBlocked className="icons-table icons-table__block" /> <FaEdit className="icons-table icons-table__edit" /></td>                        </tr>
                        <tr>
                            <th scope="row">#1412</th>
                            <td>Piano Nivel Inicial</td>
                            <td>Música</td>
                            <td>Activo</td>
                            <td><MdDeleteForever className="icons-table icons-table__delete" /> <ImBlocked className="icons-table icons-table__block" /> <FaEdit className="icons-table icons-table__edit" /></td>                        
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    )
}
