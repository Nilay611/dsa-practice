// https://takeuforward.org/data-structure/dynamic-programming-house-robber-dp-6/
// Problem Statement: You are a professional robber planning to rob houses along a street.
// Each house has a certain amount of money stashed, the only constraint stopping you from
// robbing each of them is that adjacent houses have security systems connected and it will
// automatically contact the police if two adjacent houses were broken into on the same night.
// Given an integer array nums representing the amount of money of each house,
// return the maximum amount of money you can rob tonight without alerting the police.

function robHousesM(nums, i = 0, dp) {
  // Memoization
  if (i === nums.length - 1) return nums[i];
  if (i > nums.length - 1) return 0;
  if (dp[i] != -1) return dp[i];

  const pick = nums[i] + robHousesM(nums, i + 2, dp);
  const noPick = robHousesM(nums, i + 1, dp);

  dp[i] = Math.max(pick, noPick);
  return dp[i];
}

function robHousesI(nums) {
  // Iterative
  let dp = new Array(nums.length).fill(-1);
  dp[0] = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const pick = nums[i] + (i > 1 ? dp[i - 2] : 0);
    const noPick = dp[i - 1];

    dp[i] = Math.max(pick, noPick);
  }

  console.log(nums, dp);
  return dp[nums.length - 1];
}

let numsArr = [2, 1, 4, 9]; // dp = [2, 2, 6, 11] should look something like this
let dpArr = new Array(numsArr.length + 1).fill(-1);
console.log(robHousesM(numsArr, 0, dpArr));
console.log(robHousesI(numsArr));
