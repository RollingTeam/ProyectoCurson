import React from 'react'
import ContenidoDestacado from './ContenidoDestacado'
import Cursos from './Cursos'

export default function CursosDestacados() {
    return (
        <div className="container">
            <h1>Cursos Destacados</h1>
            <div className="row">
                <ContenidoDestacado />
            </div>
        </div>
    )
}
