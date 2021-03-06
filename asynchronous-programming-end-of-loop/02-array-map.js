function getStockSymbols(stocks) {
  return stocks.map((stock) => stock.symbol);
}

var symbols = getStockSymbols([
  { symbol: 'XFX', price: 240.22, volume: 23432 },
  { symbol: 'TNZ', price: 332.19, volume: 234 },
  { symbol: 'JXJ', price: 120.22, volume: 5323 },
]);

console.log(JSON.stringify(symbols));
