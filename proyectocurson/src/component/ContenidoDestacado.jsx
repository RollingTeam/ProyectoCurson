import React , {useState} from 'react'
import ModalVerMasCurso from './ModalVerMasCurso'

export default function ContenidoDestacado() {
    const [visibilidad, setVisibilidad] = useState(false)

    const showModalCurso = () =>{
        setVisibilidad(true)
    }
    const hiddenModalCurso = ()=>{
        setVisibilidad(false)
    }

    return (
        <div className="col-12 col-md-6 col-lg-4">
            <div className="card-curso m-1">
                <img src="https://picsum.photos/400/200/" className="card-img-top img-fluid p-1" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Este es un curso dedico a la manufactura de telas rupestres siempre y cuando</h5>
                    <span class="badge badge-primary">Primary</span>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button type="button" className="btn-primary-curso float-right" onClick={showModalCurso}>Ver Más</button>
                </div>
                {visibilidad ? <ModalVerMasCurso /> : null}
            </div>
        </div>
    )
}
