function maxStockProfit(pricesArray) {
  /*
   * takes in array of prices as parameter
   * returns the max possible profit of the day
   *
   * what is the best price to buy the stock at
   * what is the best price to sell the stock at?
   *
   * notes: if no profit is possible return -1;
   * a max profit of 0 is treated as any other max profit value
   * */
  let maxProfit = -1,
      buyPrice  = 0,
      sellPrice = 0;
  let changeBuyPrice = true;

  for (let i = 0; i < pricesArray.length; i++) {
    if (changeBuyPrice) buyPrice = pricesArray[i];
    sellPrice = pricesArray[i + 1];

    if (sellPrice < buyPrice) {
      changeBuyPrice = true;
    } else {
      let tempProfit = sellPrice - buyPrice;
      if (tempProfit > maxProfit) {
        maxProfit = tempProfit;
      }
      changeBuyPrice = false;
    }
  }
  return maxProfit;
}

const findStockPrice = maxStockProfit([ 10, 18, 4, 5, 9, 6, 16, 12 ]);
console.log(findStockPrice);
