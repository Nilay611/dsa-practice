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
  if (nums.length === 1) return nums[0];

  let dp = new Array(nums.length).fill(-1);
  dp[0] = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const pick = nums[i] + (i > 1 ? dp[i - 2] : 0);
    const noPick = dp[i - 1];

    dp[i] = Math.max(pick, noPick);
  }

  return dp[nums.length - 1];
}

function robHouses(nums) {
  // Iterative & optimized
  if (nums.length === 1) return nums[0];

  let prev = nums[0];
  let prev2 = -1;
  let curr;

  for (let i = 1; i < nums.length; i++) {
    const pick = nums[i] + (i > 1 ? prev2 : 0);
    const noPick = prev;

    curr = Math.max(pick, noPick);
    prev2 = prev;
    prev = curr;
  }

  return curr;
}

function robHousesCircular(nums) {
  // Iterative & optimized & if nums array is circular
  if (nums.length === 1) return nums[0];

  let prev = nums[0];
  let prev2 = -1;
  let curr;

  for (let i = 1; i < nums.length - 1; i++) {
    const pick = nums[i] + (i > 1 ? prev2 : 0);
    const noPick = prev;

    curr = Math.max(pick, noPick);
    prev2 = prev;
    prev = curr;
  }

  prev = nums[1];
  prev2 = -1;
  let curr2;

  for (let i = 2; i < nums.length; i++) {
    const pick = nums[i] + (i > 2 ? prev2 : 0);
    const noPick = prev;

    curr2 = Math.max(pick, noPick);
    prev2 = prev;
    prev = curr2;
  }

  return Math.max(curr, curr2);
}

let numsArr = [2, 3, 5]; // dp = [2, 2, 6, 11] should look something like this
let dpArr = new Array(numsArr.length + 1).fill(-1);
console.log(robHousesM(numsArr, 0, dpArr));
console.log(robHousesI(numsArr));
console.log(robHouses(numsArr));
console.log(robHousesCircular(numsArr));
