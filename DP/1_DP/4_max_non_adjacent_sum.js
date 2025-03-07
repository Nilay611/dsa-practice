// https://takeuforward.org/data-structure/maximum-sum-of-non-adjacent-elements-dp-5/
// Problem Statement: Given an array of ‘N’ positive integers, we need to return the
// maximum sum of the subsequence such that no two elements of the subsequence are adjacent elements in the array.
// Note: A subsequence of an array is a list with elements of the array where some elements are deleted
// ( or not deleted at all) and the elements should be in the same order in the subsequence as in the array.

function maximumNonAdjacentSumM(nums, i, dp) {
  // Memoization
  if (i === nums.length - 1) return nums[i];
  if (i > nums.length - 1) return 0;
  if (dp[i] !== -1) return dp[i];

  const pick = nums[i] + maximumNonAdjacentSumM(nums, i + 2, dp);
  const noPick = 0 + maximumNonAdjacentSumM(nums, i + 1, dp);

  return Math.max(pick, noPick);
}

function maximumNonAdjacentSumI(nums) {
  // Iterative
  const n = nums.length;
  let dp = new Array(n).fill(-1);
  dp[0] = nums[0];

  for (let i = 1; i < n; i++) {
    const pick = nums[i] + (i > 1 ? dp[i - 2] : 0);
    const noPick = dp[i - 1];

    dp[i] = Math.max(pick, noPick);
  }

  return dp[n - 1];
}

function maximumNonAdjacentSum(nums) {
  // Iterative & space optimized
  if (nums.length === 1) return nums[0];

  const n = nums.length;
  let prev = nums[0];
  let prev2 = -1;
  let curr;

  for (let i = 1; i < n; i++) {
    const pick = nums[i] + (i > 1 ? prev2 : 0);
    const noPick = prev;

    curr = Math.max(pick, noPick);
    prev2 = prev;
    prev = curr;
  }

  return curr;
}

const numsArr = [1, 2, 3, 1, 3, 4, 8, 1, 9];
let dpArr = new Array(numsArr.length + 1).fill(-1);
console.log(maximumNonAdjacentSumM(numsArr, 0, dpArr));
console.log(maximumNonAdjacentSumI(numsArr));
console.log(maximumNonAdjacentSum(numsArr));
