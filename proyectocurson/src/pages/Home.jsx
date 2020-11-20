import React from 'react'
import CursosDestacados from './component/CursosDestacados'
import TodosCursos from './component/TodosCursos'

export default function Home() {
    return (
        <>
            <TodosCursos />
            <CursosDestacados />
        </>
    )
}
