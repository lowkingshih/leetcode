// LeetCode 1. Two Sum
// https://leetcode.com/problems/two-sum/
//
// Description:
// Given an array of integers nums and an integer target, return indices of
// the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you
// may not use the same element twice.
//
// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1]
//
// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]
//
// Constraints:
// 2 <= nums.length <= 10^4
// -10^9 <= nums[i] <= 10^9
// -10^9 <= target <= 10^9
//

// Brute Force
// Time: O(n²), Space: O(1)
function twoSum(nums: number[], target: number): number[] {
  for (let left = 0; left < nums.length - 1; left++) {
    for (let right = left + 1; right < nums.length; right++) {
      const leftValue = nums[left];
      const rightValue = nums[right];
      const isMatch = leftValue + rightValue === target;
      if (isMatch) return [left, right];
    }
  }
  return [-1, -1];
}

// Test cases
import { runTests, estimateTimeComplexity } from "../test-utils";

runTests(twoSum, [
  // Basic cases
  {
    input: [[2, 7, 11, 15], 9],
    expected: [0, 1],
    description: "Answer at beginning",
  },
  { input: [[3, 2, 4], 6], expected: [1, 2], description: "Answer in middle" },

  // Edge cases
  {
    input: [[3, 3], 6],
    expected: [0, 1],
    description: "Duplicates, min length",
  },
  {
    input: [[-1, -2, -3, -4], -6],
    expected: [1, 3],
    description: "Negative numbers",
  },
  { input: [[0, 4, 3, 0], 0], expected: [0, 3], description: "Zeros" },
  {
    input: [[1, 2, 3, 4, 5], 9],
    expected: [3, 4],
    description: "Answer at end",
  },
]);

// Time complexity test (optional - uncomment to see O(n²) growth)
// estimateTimeComplexity((n) => {
//   const nums = Array.from({ length: n }, (_, i) => i);
//   twoSum(nums, n * 2); // worst case: no solution
// });
