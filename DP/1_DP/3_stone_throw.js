// https://takeuforward.org/data-structure/dynamic-programming-frog-jump-with-k-distances-dp-4/
// Problem statement: There is an array of heights corresponding to 'n' stones.
// You have to reach from stone 1 to stone ‘n’. From stone 'i', it is possible to
// reach stones 'i'+1, ‘i’+2… ‘i’+'k' , and the cost incurred will be | Height[i]-Height[j] |,
// where 'j' is the landing stone. Return the minimum possible total cost incurred in reaching the stone ‘n’.
// This question can also be called frog jump with k distance

function stoneThrowM(n, heights, k, dp) {
  // Memoization
  if (n == 1) return 0;
  if (dp[n] != -1) return dp[n];

  let minCost = Infinity;

  for (let i = 1; i <= k; i++) {
    let cost =
      n - i > 0
        ? stoneThrowM(n - i, heights, k, dp) +
          Math.abs(heights[n - i] - heights[n - i - 1])
        : Infinity;

    minCost = Math.min(minCost, cost);
  }

  dp[n] = minCost;
  return dp[n];
}

function stoneThrowI(n, heights, k) {
  // Iterative

  let dp = new Array(n).fill(-1);
  dp[0] = 0;

  for (let x = 1; x < n; x++) {
    let minCost = Infinity;

    for (let i = 1; i <= k; i++) {
      let cost =
        x - i >= 0
          ? dp[x - i] + Math.abs(heights[x] - heights[x - i])
          : Infinity;

      minCost = Math.min(minCost, cost);
    }
    dp[x] = minCost;
  }
  return dp[n - 1];
}

let nVal = 4;
let heightsArr = [10, 40, 30, 10];
let dpArr = new Array(nVal + 1).fill(-1);
console.log(stoneThrowM(nVal, heightsArr, 2, dpArr));
console.log(stoneThrowI(nVal, heightsArr, 2));
