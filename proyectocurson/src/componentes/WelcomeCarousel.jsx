import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import '../css/Carousel.css'
import Img1 from '../img/teaching.svg'
import Img2 from '../img/agile.svg'
import Img3 from '../img/git.svg'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'

export default function WelcomeCarousel({modalRegisterOpen}) {
    return (
        <div className="d-none d-sm-block container-fluid carousel_container" id="inicio">
            <Carousel className="carousel_content">
                <Carousel.Item interval={3000} className="carousel-item-welcome"> 
                    <img
                        className="carousel_item img-fluid w-100"
                        src={Img1}
                        alt="First slide"
                    />
                    <Carousel.Caption className="">
                        <h3>¡Somos Curson!</h3>
                        <p>Una plataforma online con el propósito de proporcionar un espacio dedicado a estudiantes y mentores.</p>
                        <Button className="btn btn-danger"><Link to="/cursos" className="text-white">Ver Cursos</Link></Button>  <Button className="btn btn-secondary">Registrarse</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000} className="carousel-item-welcome">
                    <img
                        className="carousel_item img-fluid w-100 img2"
                        src={Img2}
                        alt="Third slide"
                    />
                    <Carousel.Caption className="text-dark">
                        <h3>Para estudiantes:</h3>
                        <p>Podrás encontrar gran variedad de cursos de diversas categorías, desde arte y música hasta ciencia y programación</p>
                        <Button className="btn btn-danger"><Link to="/cursos" className="text-white">Ver Cursos</Link></Button>  <Button className="btn btn-secondary">Registrarse</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carousel-item-welcome">
                    <img
                        className="carousel_item img-fluid w-100"
                        src={Img3}
                        alt="Third slide"
                    />
                    <Carousel.Caption className="text-dark">
                        <h3>Para Mentores:</h3>
                        <p>Te brindamos la posibilidad de publicar tu curso en nuestra web</p>
                        <Button className="btn btn-danger"><Link to="/cursos" className="text-white">Ver Cursos</Link></Button>  <Button onClick = {modalRegisterOpen} className="btn btn-secondary">Registrarse</Button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
