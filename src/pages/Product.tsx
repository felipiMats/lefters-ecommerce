import React, { useState } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ADD } from '../redux/actions/action';

const Product = () => {
  const dispatch = useDispatch()
  const { product }: any = useParams();
  const [loading, setLoading] = useState(false)

  const sendCart = (item: any) => {
    dispatch(ADD(item))
    alert("Item added successfully")
  }

  const ShowProduct = () => {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mt-5">
            <img src={product.image} alt={product.image} height={400} width={500} />
          </div>
          <div className="col-lg-6 mt-5">
              <h4 className='texr-uppercase'>{product.category}</h4>
              <h1 className='display-5'>{product.title}</h1>
              <p className='fw-bolder'>Rating {product.rating && product.rating.rate}</p>
              <h3>$ {product.price}</h3>
              <p>{product.description}</p>
              <Button onClick={() => sendCart(product)} variant="dark">Add to Cart</Button>
              <Button className='ms-3' variant="dark">Go to Cart</Button>
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
        {loading ? <Loading /> : <ShowProduct />}
      </div>
    </div>  
  );
};

export default Product;