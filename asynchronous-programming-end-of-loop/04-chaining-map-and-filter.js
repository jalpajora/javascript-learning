function getStocksOver(stocks, minPrice) {
  return stocks.filter((stock) => stock.price >= minPrice);
}

var expensiveStocks = getStocksOver(
  [
    { symbol: 'XFX', price: 240.22, volume: 23432 },
    { symbol: 'TNZ', price: 332.19, volume: 234 },
    { symbol: 'JXJ', price: 120.22, volume: 5323 },
  ],
  150
);

console.log(JSON.stringify(expensiveStocks));
