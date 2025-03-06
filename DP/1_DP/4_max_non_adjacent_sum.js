// https://takeuforward.org/data-structure/maximum-sum-of-non-adjacent-elements-dp-5/
// Problem Statement: Given an array of ‘N’ positive integers, we need to return the
// maximum sum of the subsequence such that no two elements of the subsequence are adjacent elements in the array.
// Note: A subsequence of an array is a list with elements of the array where some elements are deleted
// ( or not deleted at all) and the elements should be in the same order in the subsequence as in the array.

function maximumNonAdjacentSum(nums, i) {
  if (i == nums.length - 1) return nums[i];
  if (i > nums.length - 1) return 0;

  const pick = nums[i] + maximumNonAdjacentSum(nums, i + 2);
  const noPick = 0 + maximumNonAdjacentSum(nums, i + 1);

  return Math.max(pick, noPick);
}

console.log(maximumNonAdjacentSum([1, 2, 3, 1, 3, 4, 8, 1, 9], 0));
