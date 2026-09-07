export function CalculatingDiscount(price: number, discount: number) {
  const finalPrice = Math.round(price * (1 - discount / 100));
  return finalPrice;
}
