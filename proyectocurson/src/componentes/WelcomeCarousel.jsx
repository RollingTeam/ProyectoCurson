import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import '../css/Carousel.css'
import Img1 from '../img/teaching.svg'
import Img2 from '../img/agile.svg'
import Img3 from '../img/git.svg'
import Button from 'react-bootstrap/Button'

export default function WelcomeCarousel() {
    return (
        <div className="d-none d-sm-block container-fluid carousel_container" id="inicio">
            <Carousel className="carousel_content">
                <Carousel.Item interval={1000} className="carousel-item-welcome"> 
                    <img
                        className="carousel_item img-fluid w-100"
                        src={Img1}
                        alt="First slide"
                    />
                    <Carousel.Caption className="">
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        <Button className="btn btn-danger">Ver Cursos</Button>  <Button className="btn btn-secondary">Registrarse</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500} className="carousel-item-welcome">
                    <img
                        className="carousel_item img-fluid w-100 img2"
                        src={Img2}
                        alt="Third slide"
                    />
                    <Carousel.Caption className="text-dark">
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <Button className="btn btn-danger">Ver Cursos</Button>  <Button className="btn btn-secondary">Registrarse</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carousel-item-welcome">
                    <img
                        className="carousel_item img-fluid w-100"
                        src={Img3}
                        alt="Third slide"
                    />
                    <Carousel.Caption className="text-dark">
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        <Button className="btn btn-danger">Ver Cursos</Button>  <Button className="btn btn-secondary">Registrarse</Button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
