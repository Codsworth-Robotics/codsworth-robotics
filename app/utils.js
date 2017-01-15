// takes price as integer number of cents
// returns formatted string WITHOUT a dollar sign

export const priceString = (priceInCents) => {
  const priceDollars = Math.floor(priceInCents / 100);
  return priceDollars + '.' + (priceInCents + '').substr(-2);
};
