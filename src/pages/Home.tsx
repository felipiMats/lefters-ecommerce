import React from 'react';
import ProductCard from '../components/ProductCard';
import SideBar from '../components/SideBar';
import { PRODUCTS } from '../utils/estaticProducts';

const Home = () => {
  const products = PRODUCTS;

  return (
    <div className="d-flex">
      <SideBar />
      <div className="container">
        <div className="row">
          {products.map(product => (
            <div className="col-md-4 mb-4" key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
    
  );
};

export default Home;