import React from 'react';
import { RiDeleteBinLine } from 'react-icons/ri';
import { FaBan } from 'react-icons/fa';
import { IoMdKey } from 'react-icons/io';
import { IconContext } from 'react-icons';

export default function Usuarios() {
    return (
        <div className="container">
            <IconContext.Provider value={{ size: "1.5em" , color:"#EF233C" }}>
                <div className="row d-flex justify-content-center mt-3 mb-3">
                    <table className="table">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">Nombre</th>
                                <th scope="col">Usuario</th>
                                <th scope="col">Estado:
                                    <select name="role" id="estado" onchange="filtrarDatos()">
                                        <option value="0">Todos</option>
                                        <option value="1">Activo</option>
                                        <option value="2">Inactivo</option>
                                    </select>
                                </th>
                                <th scope="col">Rol:
                                    <select name="role" id="role" onchange="filtrarDatos()">
                                        <option value="0">Todos</option>
                                        <option value="1">Admin</option>
                                        <option value="2">Estudiante</option>
                                        <option value="3">Profesor</option>
                                    </select>
                                </th>
                                <th scope="col">Acciones</th>
                            </tr>
                        </thead>
                        <tbody id="cuerpoTabla">
                            <tr>
                                <td>Florencia Pistán</td>
                                <td>florpistan</td>
                                <td>Activo</td>
                                <td>Admin</td>
                                <td><RiDeleteBinLine className="estilo-icon" /> <FaBan className="estilo-icon" /> <IoMdKey className="estilo-icon" /></td>
                            </tr>
                            <tr>
                                <td>Belén Neme</td>
                                <td>belenneme</td>
                                <td>Activo</td>
                                <td>Admin</td>
                                <td><RiDeleteBinLine className="estilo-icon" /> <FaBan className="estilo-icon" /> <IoMdKey className="estilo-icon" /></td>
                            </tr>
                            <tr>
                                <td>Gabriel Moreira</td>
                                <td>gabyarg</td>
                                <td>Activo</td>
                                <td>Admin</td>
                                <td><RiDeleteBinLine className="estilo-icon" /> <FaBan className="estilo-icon" /> <IoMdKey className="estilo-icon" /></td>
                            </tr>
                            <tr>
                                <td>Rodrigo Martinez</td>
                                <td>rodrizio</td>
                                <td>Activo</td>
                                <td>Admin</td>
                                <td><RiDeleteBinLine className="estilo-icon" /> <FaBan className="estilo-icon" /> <IoMdKey className="estilo-icon" /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </IconContext.Provider>
        </div>
    )
}
