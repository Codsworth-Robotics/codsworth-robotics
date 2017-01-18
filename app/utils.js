export const priceString = (priceInCents) => {
  let priceDollars = Math.floor(priceInCents / 100);
  priceDollars = priceDollars.toLocaleString('USD');
  return priceDollars + '.' + (priceInCents + '').substr(-2);
};
