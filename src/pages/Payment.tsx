import { useDispatch, useSelector } from "react-redux";
import { formatCurrencyBRL } from "../utils/formatCurrencyBrl";
import { RootState } from '../redux/store';
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { ProductDTO } from "../dtos/ProductDTO";
import { DELETE, REMOVE } from "../redux/actions/action";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";


const Payment = () => {
  const getData = useSelector((state: RootState) => state.cartReducer.carts);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const removeCartItem = (product: ProductDTO) => {
    dispatch(REMOVE(product));
  };

  const handleClose = () => {
    setShow(false);
    navigate('/');
    dispatch(DELETE());
  };

  const PaymentForm = () => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
  
    const onSubmit = (data: any) => {
      setShow(true);
    };

    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 10 }, (_, i) => currentYear + i);
  
    return (
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3 mt-5" controlId="cardNumber">
          <Form.Label>Número do Cartão</Form.Label>
          <Form.Control
            type="text"
            placeholder="Número do Cartão"
            {...register('cardNumber', { required: true })}
            isInvalid={!!errors.cardNumber}
          />
          <Form.Control.Feedback type="invalid">
            {errors.cardNumber && 'Número do cartão é obrigatório'}
          </Form.Control.Feedback>
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="cardHolder">
          <Form.Label>Titular do Cartão</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nome do Titular"
            {...register('cardHolder', { required: true })}
            isInvalid={!!errors.cardHolder}
          />
          <Form.Control.Feedback type="invalid">
            {errors.cardHolder && 'Nome do titular é obrigatório'}
          </Form.Control.Feedback>
        </Form.Group>
  
        <Row>
          <Col md={4}>
            <Form.Group className="mb-3" controlId="expiryMonth">
              <Form.Label>Mês</Form.Label>
              <Form.Select
                {...register('expiryMonth', { required: true })}
                isInvalid={!!errors.expiryMonth}
              >
                {Array.from({ length: 12 }, (_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                {errors.expiryMonth && 'Mês de validade é obrigatório'}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
  
          <Col md={4}>
            <Form.Group className="mb-3" controlId="expiryYear">
              <Form.Label>Ano</Form.Label>
              <Form.Select
                {...register('expiryYear', { required: true })}
                isInvalid={!!errors.expiryYear}
              >
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                {errors.expiryYear && 'Ano de validade é obrigatório'}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>

          <Col md={4}>
            <Form.Group className="mb-3" controlId="cvv">
              <Form.Label>CVV</Form.Label>
              <Form.Control
                type="text"
                placeholder="CVV"
                {...register('cvv', { required: true })}
                isInvalid={!!errors.cvv}
              />
              <Form.Control.Feedback type="invalid">
                {errors.cvv && 'CVV é obrigatório'}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
  
        <Button variant="primary" type="submit">
          Pagar
        </Button>
      </Form>
    );
  };

  return (
    <div className="d-flex min-vh-100">
      <div className="container mt-5">
        <div className="row justify-content-between px-5">
          <div className="col-md-6 p-4 bg-blue text-black rounded-4" style={{backgroundColor: '#FFD580'}}>
            <h2 className="fw-bold fs-1 text-center">Carrinho</h2>
            {getData.length > 0 ?
              getData.map((item) => (
                <div key={item.id} className="d-flex align-items-start mb-3 mt-5">
                  <img
                    src={item?.medias.find((media) => media.thumbnail)?.url}
                    style={{ width: "5rem", height: "5rem", marginRight: "15px" }}
                    alt={item.title}
                  />
                  <div className="d-flex flex-column flex-grow-1">
                    <span><strong>{item.title}</strong></span>
                    <p>{item.description}</p>
                    <span>{formatCurrencyBRL(item.price)}</span>
                    <div className="d-flex align-items-center">
                      <span key={item.selectedSize} className="me-2 badge bg-secondary">
                        {item.selectedSize}
                      </span>
                      <span
                        style={{
                          display: 'inline-block',
                          width: '12px',
                          height: '12px',
                          borderRadius: '50%',
                          backgroundColor: item.selectedColor,
                          border: '1px solid black',
                          marginRight: 6
                        }}
                      ></span>

                      <button
                        className="btn p-0"
                        onClick={() => removeCartItem(item)}
                        style={{ color: 'red', border: 'none', background: 'none' }}
                      >
                        <i className="fa fa-trash fs-6" aria-hidden="true"></i>
                      </button>
                    </div>
                  </div>
                </div>
              )) :
              <h2 className="fw-regular fs-5 my-5 text-center">Ops, seu carrinho está vazio.</h2>
            }
            {
              getData.length > 0 &&
              <div className="d-flex justify-content-between mt-3">
                <h4 className="fw-bold">Total:</h4>
                <h4>{formatCurrencyBRL(getData.reduce((total, item) => total + parseFloat(item.price), 0))}</h4>
              </div>
            }
          </div>
          <div className="col-md-4 p-4 bg-black text-white rounded-4">
            <h2 className="fw-bold fs-1 text-center">Pagamento</h2>
            <PaymentForm />
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Obrigado pela sua compra!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Seu pedido foi realizado com sucesso.</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Payment;

