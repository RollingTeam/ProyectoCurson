import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import '../css/Carousel.css'
import {Link} from 'react-router-dom'

export default function WelcomeMobile() {
    return (
        <div className="d-block d-sm-none">
            <Jumbotron className="bg-cover text-white mt-1">
                <div className="container">
                    <h1 className="display-4">CursOn</h1>
                    <p className="lead">Somos una plataforma online con el propósito de proporcionar un espacio dedicado a estudiantes y mentores.
                    Podrás encontrar gran variedad de cursos de diversas categorías, desde arte y música hasta ciencia y programación.</p>
                    <hr className="my-4"/>
                    <p className="font-weight-bold">Time to learn!</p>
                    <Button variant="danger"><Link to="/cursos" className="text-white">Ver Cursos</Link></Button>

                </div>
            </Jumbotron>
        </div>
    )
}
