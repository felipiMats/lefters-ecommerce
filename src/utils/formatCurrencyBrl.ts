const formatCurrencyBRL = (value: number | string): string => {
  const formattedValue = typeof value === 'number' ? value.toFixed(2) : parseFloat(value).toFixed(2);
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(parseFloat(formattedValue));
}

export {formatCurrencyBRL};