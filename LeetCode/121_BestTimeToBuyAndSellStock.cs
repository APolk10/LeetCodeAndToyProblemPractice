public class Solution {
    public int MaxProfit(int[] prices) {

        // iterate through array
            // keep track of the buy value and the index (day)
            // compare the current buy value with each value proceeding it
            // keep track of the max profit encountered
            // skip any values lower

        int maxProfit = 0;
        int buyPrice = prices[0];

        // only one level of iteration
        for (int i = 0; i < prices.Length; i++)
        {
            int currentPrice = prices[i];

            // if the current index price is lower than the previously saved index price, reassign the value
            if (currentPrice < buyPrice)
            {
                buyPrice = currentPrice;
                continue;
            }

            // if the profit at this stage exceeds the profit previously saved, reassign the value
            // note that the previous if statement would always produce a 0 profit so we skip this check
            if (currentPrice - buyPrice > maxProfit)
            {
                maxProfit = currentPrice - buyPrice;
            }
        }

        return maxProfit;
    }
}