import { Button } from 'react-bootstrap';
import HomeCarousel from '../components/HomeCarousel';
import ProductCard from '../components/ProductCard';
import { PRODUCTS } from '../utils/estaticProducts';
import { useEffect, useState } from 'react';
import { ProductDTO } from '../dtos/ProductDTO';

const Home = () => {
  const [filter, setFilter] = useState('All');
  const [products, setProducts] = useState<ProductDTO[]>([]);

  useEffect(() => {
    setProducts(PRODUCTS);
  },[])

  const filterProduct = (cat: string) => {
    const updatedItems = PRODUCTS.filter((item) => item.category === cat);
    updatedItems.length ? setProducts(updatedItems) : setProducts(PRODUCTS); 
    setFilter(cat);
  }

  return (
    <div className="d-flex flex-column">
      <HomeCarousel />
      <div className='container'>
        <div className="d-flex justify-content-center my-4">
          <Button onClick={() => filterProduct("All")} className='me-2' variant="outline-dark">All Brands</Button>
          <Button onClick={() => filterProduct("Fleece")} className='me-2' variant="outline-dark">Fleece</Button>
          <Button onClick={() => filterProduct("Jackets")} className='me-2' variant="outline-dark">Jackets</Button>
          <Button onClick={() => filterProduct("Shirts")} className='me-2' variant="outline-dark">Shirts</Button>
        </div>
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