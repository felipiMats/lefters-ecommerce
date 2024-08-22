import { useSelector } from "react-redux";
import { formatCurrencyBRL } from "../utils/formatCurrencyBrl";
import { RootState } from '../redux/store';
import { Button, Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Payment = () => {
    const getData = useSelector((state: RootState) => state.cartReducer.carts);

    const PaymentForm = () => {
      const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const navigate = useNavigate();
    
      const onSubmit = (data: any) => {
        console.log(data);
        // navigate('/');
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
          <div className="row justify-content-center">
            <div className="col-md-6 p-4 bg-blue text-black rounded">
              <h2 className="text-center">Carrinho</h2>
              {getData.map((item) => (
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
                        }}
                      ></span>
                    </div>
                  </div>
                </div>
              ))}
              <div className="d-flex justify-content-between mt-3">
                <h4 className="fw-bold">Total:</h4>
                <h4>{formatCurrencyBRL(getData.reduce((total, item) => total + parseFloat(item.price), 0))}</h4>
              </div>
            </div>
            <div className="col-md-6 p-4 bg-black text-white rounded" style={{ borderRadius: '24px' }}>
              <h2 className="text-center">Formulário de Pagamento</h2>
              <PaymentForm />
            </div>
          </div>
        </div>
      </div>
    );
  };

export default Payment;

