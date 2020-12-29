import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Video1 from '../componentes/recursosCarousel/recursoNoche.mp4'
export default function Carrousel() {
    return (
        <div className="container-fluid">
            <Carousel>
  <Carousel.Item interval={1000}>
    
    <video 
      className="d-block w-50 container-fluid"
      controls loop autoPlay src= {Video1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <video 
      className="d-block w-50 container-fluid"
      controls autoPlay muted src="../proyectocurson/src/componentes/recursosCarousel/recursoOficinaDesenfocada.mp4"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <video 
      className="d-block w-50 container-fluid"
      controls autoPlay src="../proyectocurson/src/componentes/recursosCarousel/recursoOficina"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    )
}
