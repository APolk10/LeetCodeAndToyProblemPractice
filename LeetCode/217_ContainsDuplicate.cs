public class Solution {
    public bool ContainsDuplicate(int[] nums) {

        bool flag = false;
        List<int> used = new List<int>();

        for (int i = 0; i < nums.Length; i++)
        {
            int current = nums[i];

            if (used.Contains(current))
            {
                flag = true;
                break;
            }
            else
            {
                used.Add(current);
            }
        }

        return flag;
    }
}