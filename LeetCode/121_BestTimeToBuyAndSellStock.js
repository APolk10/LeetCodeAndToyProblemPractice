/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {

  let buyStock = prices[0];
  let profit = 0;

  for (var i = 0; i < prices.length; i++) {
      if (prices[i] < buyStock) {
          buyStock = prices[i];
      }

      var currentProfit = prices[i] - buyStock;

      if (currentProfit > profit) {
          profit = currentProfit;
      }
  }

  return profit;
};



/* NOTES:
  I solved this brute force and though it worked the time limit was exceeded for very large arrays passed in. The second solution took some research as to how to pass only one iteration and solve the problem.

*/