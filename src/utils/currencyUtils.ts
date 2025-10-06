
/*========================================================
  FORMAT PRICE - USA 'en-US' USD | UE 'es-ES' EUR 
========================================================*/
export const formatPrice = (amount: number, locale = 'es-ES', currency = 'EUR'): string => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount/ 100);
};


/*========================================================
  FORMAT PRICE - USA 'en-US' USD | UE 'es-ES' EUR NO FRACTION
========================================================*/
export const formatPriceNoFraction = (amount: number, locale = 'es-ES', currency = 'EUR'): string => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount/ 100);
};
