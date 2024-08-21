import React from 'react';
import { Button, Container, Nav, Navbar, OverlayTrigger, Popover } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { REMOVE } from '../redux/actions/action';
import { RootState } from '../redux/store';

export const Header = () => {
  const getData = useSelector((state: RootState) => state.cartReducer.carts);
  const dispatch = useDispatch();

  const remove = (id: number) => {
    dispatch(REMOVE(id));
  };
  const popover = (
    <Popover id="popover-basic">
      <table>
          <thead>
            <tr>
              <th className='me-5 text-center'>Image</th>
              <th className='me-5 text-center'>Item</th>
            </tr>
          </thead>
          <tbody>
            {
              getData.map((item, index) => {
                return <>
                    
                  {/* <tr className='ms-2'>
                    <td >
                      <img src={item.medias[0].url} style={{ width: "5rem", height: "5rem" ,margin:"15px 15px"}} alt="" />
                    </td>
                    <td>
                      <div className='text-center mt-3 me-3'>
                        <p className='text-center mb-0 fw-bolder'>{item.category}</p>
                        <p className='mb-0'>Price: $ {item.price}</p>
                        <p className='mb-0'>{item.title.substring(0, 45)}</p>
                        <p className='mt-1' onClick={()=>remove(item.id)}> <i className="fa fa-trash fs-4 delete-icon" aria-hidden="true"></i></p>
                      </div>
                    </td>
                  </tr> */}
                      
                </>
              })
            }
          </tbody>
      </table>
    </Popover>
  );

  return (
    <div>
      <Navbar bg="light" variant="light" className='shadow-sm bg-white py-4 '>
        <Container>
          <Link style={{ textDecoration: 'none' }} to='/'> <Navbar.Brand className='fw-bold fs-2'>Lefters Tecnologia</Navbar.Brand></Link>
          <Nav className="me-auto">
            <Nav.Link className='nav-link nav-link-ltr'><Link style={{ textDecoration: 'none' }} to="/">Home</Link></Nav.Link>
          </Nav>
          <div className="buttons">
            <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
              <Button variant="outline-dark" className='me-2'><i className='fa fa-shopping-cart me-2'></i>{getData.length}</Button>
            </OverlayTrigger>
            <Button variant="outline-dark" className='me-2'><i className='fa fa-user-plus me-2'></i>Login</Button>

            <Button variant="outline-dark" className='me-2'><i className='fa fa-sign-in me-2'></i>Register</Button>
          </div>
        </Container>
      </Navbar>
  </div>
  )
}