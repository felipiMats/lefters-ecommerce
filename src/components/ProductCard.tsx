import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { formatCurrencyBRL } from '../utils/formatCurrencyBrl';
import { ProductDTO } from '../dtos/ProductDTO';

const ProductCard: React.FC<{ product: ProductDTO }> = ({ product }) => {
  const thumbnailMedia = product.medias.find((media) => media.thumbnail === true);

  return (
    <Card key={product.id} className="border border-dark">
      <Card.Img variant="top" style={{ height: '250' }} src={thumbnailMedia?.url} />
      <Card.Body>
        <Card.Title>{product.title.substring(0, 12)}</Card.Title>
        <Card.Text className='fw-bold'>
          {formatCurrencyBRL(product.price)}
        </Card.Text>
        <Link to={`/products/${product.id}`}> <Button variant="dark">Comprar</Button></Link>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;