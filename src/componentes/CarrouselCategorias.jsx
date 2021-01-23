import React from "react";
import Carousel from "react-bootstrap/Carousel";
import img1 from '../img/art2-min.jpg'
import img2 from '../img/english1-min.jpg'
import img3 from '../img/english2-min.jpg'
import img4 from '../img/music1-min.jpg'
import img5 from '../img/teach2-min.jpg'
import img6 from '../img/tecnologia1-min.jpg'
import img7 from '../img/tecnologia10-min.jpg'
import img8 from '../img/tecnologia11-min.jpg'
import img9 from '../img/tecnologia12-min.jpg'
import img10 from '../img/tecnologia2-min.jpg'
import img11 from '../img/tecnologia3-min.jpg'
import img12 from '../img/tecnologia4-min.jpg'
import img13 from '../img/tecnologia5-min.jpg'
import img14 from '../img/tecnologia6-min.jpg'
import img15 from '../img/tecnologia7-min.jpg'
import img16 from '../img/tecnologia8-min.jpg'
import img17 from '../img/tecnologia9-min.jpg'

export default function CarrouselCategorias() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div id="carousel" className="col-12 col-md-6 col-lg-6 col-xl-4">
            <Carousel indicators={false} controls={false}>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={img1} alt="img del carousel categorias"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={img2} alt="img del carousel categorias"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={img3} alt="img del carousel categorias"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={img4} alt="img del carousel categorias"
                />
              </Carousel.Item>
            </Carousel>
          </div>
          <div id="carousel" className="col-12 col-md-6 col-lg-4">
            <Carousel indicators={false} controls={false}>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={img5} alt="img del carousel"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={img6} alt="img del carousel"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={img7} alt="img del carousel categorias"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={img8} alt="img del carousel categorias"
                />
              </Carousel.Item>
            </Carousel>
          </div>
          <div id="carousel" className="col-12 col-md-6 col-lg-6 col-xl-4">
            <Carousel indicators={false} controls={false}>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={img9} alt="img del carousel categorias"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={img10} alt="img del carousel categorias"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={img11} alt="img del carousel categorias"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={img12} alt="img del carousel categorias"
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
        <div className="row my-2">
          <div id="carousel" className="col-12 col-md-6 col-lg-6 col-xl-4">
            <Carousel indicators={false} controls={false}>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={img13} alt="img del carousel categorias"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={img14} alt="img del carousel categorias"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={img15} alt="img del carousel categorias"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={img16} alt="img del carousel categorias"
                />
              </Carousel.Item>
            </Carousel>
          </div>
          <div id="carousel" className="col-12 col-md-6 col-lg-4">
            <Carousel indicators={false} controls={false}>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={img17} alt="img del carousel categorias"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={img1} alt="img del carousel categorias"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={img2} alt="img del carousel categorias"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={img3} alt="img del carousel categorias"
                />
              </Carousel.Item>
            </Carousel>
          </div>
          <div id="carousel" className="col-12 col-md-6 col-lg-4">
            <Carousel indicators={false} controls={false}>
              <Carousel.Item>
                <img className="d-block w-100" src={img4} alt="img del carousel categorias" />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={img5} alt="img del carousel categorias"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={img6} alt="img del carousel categorias"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={img7} alt="img del carousel categorias"
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}
