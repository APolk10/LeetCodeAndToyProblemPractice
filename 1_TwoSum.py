class Solution(object):
    def containsDuplicate(self, nums):
        """
        :type nums: List[int]
        :rtype: bool
        """
        tracker = {}
        for num in nums:
            if tracker.get(num) is None:
                tracker[num] = True
            else:
                return True


# This is my first Python LeetCode problem! :) Very cool to see something terribly simple in JS work in another language and it was incredibly fun to see how clean Python can be...and there are probably many better ways of approaching this. Very fun first step!