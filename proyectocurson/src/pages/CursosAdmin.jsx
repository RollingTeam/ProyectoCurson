import React, { useState,useEffect } from 'react'
import CursosInfo from '../componentes/CursosInfo'
import CursosListAdmin from '../componentes/CursosListAdmin'

export default function CursosAdmin() {
    const [data, setData] = useState({
        cursos: [],
    });

    useEffect(() => {
        getData()
    }, [])

    const getData = async()=>{
        const resp = await fetch("http://localhost:3008/cursos");
        const data = await resp.json();
        setData({
        cursos: data,
        });
    }

    return (
        <div className="container">
            <CursosInfo data={data.cursos}/>
            <CursosListAdmin data={data.cursos}/>
        </div>
    )
}
