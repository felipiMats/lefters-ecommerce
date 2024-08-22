import React from 'react';
import { Carousel } from 'react-bootstrap';

const HomeCarousel: React.FC = () => {
  return (
    <Carousel style={{height: 350, marginBottom: 16}}>
      <Carousel.Item style={{height: 350}}>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/800x400?text=First+Slide"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Tudo em Um Só Lugar</h3>
          <p>Explore a maior variedade de produtos em um só lugar.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item style={{height: 350}}>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/800x400?text=Second+Slide"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Ofertas Imperdíveis Todos os Dias</h3>
          <p>Aproveite ofertas exclusivas e descontos incríveis em nossa loja online.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item style={{height: 350}}>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/800x400?text=Third+Slide"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Compre com Confiança e Segurança</h3>
          <p>Nossa plataforma oferece uma experiência de compra segura e confiável.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel;