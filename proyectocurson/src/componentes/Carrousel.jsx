import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Video1 from '../componentes/recursosCarousel/recursonoche.mp4'
import Video2 from '../componentes/recursosCarousel/recursooficina.mp4'
import Video3 from '../componentes/recursosCarousel/recursoofdesenfocada.mp4'

export default function Carrousel() {
    return (
        <div className="container-fluid">
            <Carousel>
  <Carousel.Item interval={1000}>
    
    <video 
      className="d-block w-50 container-fluid"
       autoPlay muted src= {Video1}
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
       autoPlay muted src= {Video2}
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
       autoPlay muted src= {Video3}
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
