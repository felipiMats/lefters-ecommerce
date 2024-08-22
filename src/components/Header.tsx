import React from 'react';
import { Button, Container, Nav, Navbar, OverlayTrigger, Popover } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { REMOVE } from '../redux/actions/action';
import { RootState } from '../redux/store';
import { formatCurrencyBRL } from '../utils/formatCurrencyBrl';
import { ProductDTO } from '../dtos/ProductDTO';

export const Header = () => {
  const getData = useSelector((state: RootState) => state.cartReducer.carts);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const remove = (product: ProductDTO) => {
    dispatch(REMOVE(product));
  };

  const popover = (
    <Popover style={{backgroundColor: '#FFD580'}} id="popover-basic">
      <Popover.Body   >
        {getData.map((item, index) => {
          const thumbnailMedia = item?.medias.find((media) => media.thumbnail === true);

          return (
            <div key={item.id} className="d-flex align-items-start mb-3">
              <img
                src={thumbnailMedia?.url}
                style={{ width: "5rem", height: "5rem", marginRight: "15px" }}
                alt={item.title}
              />
              <div className="d-flex flex-column flex-grow-1">
                <div className="d-flex justify-content-between mb-1">
                  <span className='fw-bold'>{item.title.substring(0, 45)}</span>
                  <span className='text-end'>{formatCurrencyBRL(item.price)}</span>
                </div>
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <div  className='d-flex align-items-center justify-content-center' >
                    <span key={item.selectedSize} className="me-2 badge bg-secondary">{item.selectedSize}</span>
                    <div className="d-inline-block me-2">
                      <span
                        style={{
                          display: 'inline-block',
                          width: '12px',
                          height: '12px',
                          borderRadius: '50%',
                          backgroundColor: item.selectedColor,
                          border: '1px solid black'
                        }}
                      ></span>
                    </div>
                  </div>
                  <Button variant="link" onClick={() => remove(item)} className="text-danger">
                  <i className="fa fa-trash fs-6" aria-hidden="true"></i>
                </Button>
                </div>
              </div>
            </div>
          );
        })}
        <div className="d-flex justify-content-between mt-3">
          <span className="fw-bold">Total:</span>
          <span>{formatCurrencyBRL(getData.reduce((total, item) => total + parseFloat(item.price), 0))}</span>
        </div>
        {
          getData.length > 0 &&
          <Button variant="primary" className="w-100 mt-3" onClick={() => navigate('/payment')}>
            Pagar
          </Button>
          
        }
        
      </Popover.Body>
    </Popover>
  );

  return (
    <div>
      <Navbar bg="dark" variant="dark" className='shadow-sm bg-black py-4 px-5'>
        <Container>
          <div className='d-flex align-items-center justify-content-center'>
            <Nav.Link>
              <Link to="/" style={{ textDecoration: 'none', marginRight: 16 }}>
                <img src={'/leftersLogo.png'} alt="Home" width={24} height={24} />
              </Link>
            </Nav.Link>
            <Link style={{ textDecoration: 'none' }} to='/'> <Navbar.Brand className='fw-bold fs-3'>Lefters Tecnologia</Navbar.Brand></Link>
          </div>
          
          
          <div className="buttons">
            <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
              <Button variant="outline-light" className='me-2'><i className='fa fa-shopping-cart me-2'></i>{getData.length}</Button>
            </OverlayTrigger>
            <Button variant="outline-light" className='me-2'><i className='fa fa-user-plus me-2'></i>Login</Button>
          </div>

        </Container>
      </Navbar>
  </div>
  )
}