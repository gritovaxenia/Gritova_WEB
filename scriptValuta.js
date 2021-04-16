function extractCurrencyValue(str) {
   return Number(str.replace('$', ''));
}

console.log('currency $120 === number 120', extractCurrencyValue('$120')===120);
