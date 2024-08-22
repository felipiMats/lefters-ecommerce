import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ADD } from '../redux/actions/action';
import { ProductDTO } from '../dtos/ProductDTO';
import { PRODUCTS } from '../utils/estaticProducts';
import { formatCurrencyBRL } from '../utils/formatCurrencyBrl';
import ImageCarousel from '../components/Carousel';

type Params = Record<string, string | undefined>;

const Product = () => {
  const dispatch = useDispatch();
  const {id} = useParams<Params>();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [product, setProduct] = useState<ProductDTO>();
  const products = PRODUCTS;

  const onGetProduct = () => {
    try {
      setLoading(true);
      const getProduct = products.find((p) => p.id === id);
      setProduct(getProduct);
    } finally {
      setLoading(false);
    }
  }

  const sendCart = () => {
    if (selectedColor && selectedSize) {
      const productWithSelection = {
        ...product,
        selectedColor,
        selectedSize,
      };
      dispatch(ADD(productWithSelection));
    } else {
      alert('Por favor, selecione uma cor e um tamanho.');
    }
  };

  useEffect(() => {
    onGetProduct();
  },[id])

  const ShowProduct = () => {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mt-5">
            <ImageCarousel media={product!.medias} />
          </div>
          <div className="col-lg-6 mt-5">
            <h4 className='texr-uppercase'>{product?.category}</h4>
            <h1 className='display-5'>{product?.title}</h1>
            <h3>{product?.price ? formatCurrencyBRL(product?.price) : ''}</h3>
            <p>{product?.description}</p>

            <p>Cor</p>
            <div className="d-flex mb-3">
              {product?.colors.map((color) => (
                <Button 
                  key={color.name} 
                  variant="outline-dark"
                  onClick={() => setSelectedColor(color.color_code)}
                  style={{
                    backgroundColor: color.color_code, 
                    marginRight: 7,
                    width: '30px', 
                    height: '30px', 
                    borderRadius: '50%', 
                    cursor: 'pointer',
                    border: '1px solid black',
                    boxShadow: selectedColor === color.color_code ? '0 0 0 3px rgba(0, 0, 0, 0.5)' : 'none',
                    transform: selectedColor === color.color_code ? 'scale(1.1)' : 'none'
                  }}
                />
              ))}
            </div>

            <p>Tamanho</p>
            <div className="d-flex mb-3">
              {product?.sizes.map((size) => (
                <Button 
                  key={size} 
                  variant={selectedSize === size ? 'dark' : 'outline-dark'} 
                  onClick={() => setSelectedSize(size)}
                  className="me-2"
                >
                  {size}
                </Button>
              ))}
            </div>

            <Button onClick={sendCart} variant="dark">Adicionar no carrinho</Button>
            <Button className='ms-3' variant="dark" onClick={() => navigate('/')}>
              Voltar
            </Button>
          </div>
        </div>
      </div>
    )
  }

  const Loading = () => {
    return (
      <>
        <div className="mt-4">
          <Spinner animation="grow" />
          <Spinner animation="grow" />
          <Spinner animation="grow" />
          <Spinner animation="grow" />
          <Spinner animation="grow" />
          <Spinner animation="grow" />
          <Spinner animation="grow" />
        </div>
      </>
    )
  }

  return (
    <div>
      <div className="container">
        {loading || !product ? <Loading /> : <ShowProduct />}
      </div>
    </div>  
  );
};

export default Product;