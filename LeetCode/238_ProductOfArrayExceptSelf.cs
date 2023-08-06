public class Solution {
    public int[] ProductExceptSelf(int[] nums) {
        int[] products = new int[nums.Length];

        if (nums.Length < 1)
        {
            int[] empty = new int[0];
            return empty;
        }

        int zeroes = 0;
        int subProduct = 1;

        foreach (int num in nums)
        {
            if (num == 0)
            {
                zeroes++;
            }
            else
            {
                subProduct *= num;
            }
        }

        for (int i = 0; i < nums.Length; i++)
        {
            int currentVal = nums[i];
            // if there is a zero in the collection that is NOT the index, or there are multiple zeroes, the product will always be zero
            if (zeroes > 0 && currentVal != 0 || zeroes >= 2 && currentVal == 0)
            {
                products[i] = 0;
            }
            // if there is a zero in the collection but it is the index, the product will not be zero
            else if (zeroes == 1 && currentVal == 0)
            {
                products[i] = subProduct;
            }
            // if there are no zeroes to consider, divide the product by the current value
            else
            {
                products[i] = subProduct / currentVal;
            }

        }

        return products;
    }
}