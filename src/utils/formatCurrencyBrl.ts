export function formatCurrencyBRL(price: string): string {
  const value = parseFloat(price);
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });
}