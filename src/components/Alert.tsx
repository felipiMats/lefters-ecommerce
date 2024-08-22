import Alert from 'react-bootstrap/Alert';

function AlertCart() {
  return (
    <>
      {[
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark',
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          {variant} Adicionar ao carrinho!
        </Alert>
      ))}
    </>
  );
}

export default AlertCart;