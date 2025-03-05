// https://takeuforward.org/data-structure/dynamic-programming-climbing-stairs/
// Problem Statement: Given a number of stairs. Starting from the 0th stair we
// need to climb to the “Nth” stair. At a time we can climb either one or two steps.
// We need to return the total number of distinct ways to reach from 0th to Nth stair.

function climbingStairs(n) {
  let dp = new Array(n + 1).fill(-1);

  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i < n + 1; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}

console.log(climbingStairs(5));
