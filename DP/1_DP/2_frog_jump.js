// https://takeuforward.org/data-structure/dynamic-programming-frog-jump-dp-3/
// Problem Statement: Given a number of stairs and a frog, the frog wants to climb
// from the 0th stair to the (N-1)th stair. At a time the frog can climb either one
// or two steps. A height[N] array is also given. Whenever the frog jumps from a stair
// i to stair j, the energy consumed in the jump is abs(height[i] - height[j]), where abs()
// means the absolute difference. We need to return the minimum energy that can be used by the
// frog to jump from stair 0 to stair N-1.

function frogJumpM(n, heights, dp) {
  // Memoization
  if (n == 1) return 0;
  if (dp[n] != -1) return dp[n];

  let oneJump =
    frogJumpM(n - 1, heights, dp) + Math.abs(heights[n - 1] - heights[n - 2]);
  let twoJump =
    n > 2
      ? frogJumpM(n - 2, heights, dp) +
        Math.abs(heights[n - 1] - heights[n - 3])
      : Infinity;

  dp[n] = Math.min(oneJump, twoJump);
  return dp[n];
}

function frogJumpI(n, heights) {
  // Iterative
  let dp = new Array(n).fill(-1);
  dp[0] = 0;

  for (let i = 1; i < n; i++) {
    const oneJump = dp[i - 1] + Math.abs(heights[i] - heights[i - 1]);
    const twoJump =
      i > 1 ? dp[i - 2] + Math.abs(heights[i] - heights[i - 2]) : Infinity;

    dp[i] = Math.min(oneJump, twoJump);
  }

  return dp[n - 1];
}

let nVal = 4;
let heightsArr = [10, 20, 30, 10];
let dpArr = new Array(nVal + 1).fill(-1);
console.log(frogJumpM(nVal, heightsArr, dpArr));
console.log(frogJumpI(nVal, heightsArr));
