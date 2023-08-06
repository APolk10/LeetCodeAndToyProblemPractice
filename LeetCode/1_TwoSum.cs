public class Solution {
    public int[] TwoSum(int[] nums, int target) {

        int[] solution = new int[2];
        List<int> taken = new List<int>();

        for (int i = 0; i < nums.Length - 1; i++)
        {
            int pointer = nums.Length - 1;

            if (taken.Contains(nums[i]))
            {
                continue;
            }

            taken.Add(nums[i]);

            while (pointer > i)
            {
                if (nums[i] + nums[pointer] == target)
                {
                    solution[0] = i;
                    solution[1] = pointer;
                    return solution;
                }
                pointer--;
            }
        }
        return solution;
    }
}