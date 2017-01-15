export const priceString = (priceInCents) => {
  const priceDollars = Math.floor(priceInCents / 100);
  return priceDollars + '.' + (priceInCents + '').substr(-2);
};
