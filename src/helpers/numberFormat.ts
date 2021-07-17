export const numberFormat = (value: number, decimals?: number) => {
  if (!decimals) decimals = 0;
  return value > 0 
    ? value.toLocaleString('en-GB', {minimumFractionDigits: decimals, maximumFractionDigits: decimals}) 
    : value;
}
