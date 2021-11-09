var stocks = [
  { symbol: 'XFX', price: 240.22, volume: 23432 },
  { symbol: 'TNZ', price: 332.19, volume: 234 },
  { symbol: 'JXJ', price: 120.22, volume: 5323 },
];

var results = stocks
  .filter((stock) => stock.price >= 150)
  .map((stock) => stock.symbol);

console.log(JSON.stringify(results));
