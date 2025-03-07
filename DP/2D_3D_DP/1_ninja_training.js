// https://takeuforward.org/data-structure/dynamic-programming-ninjas-training-dp-7/
// Problem Statement: A Ninja has an ‘N’ Day training schedule. He has to perform one of these three
// activities (Running, Fighting Practice, or Learning New Moves) each day. There are merit points
// associated with performing an activity each day. The same activity can’t be performed on two
// consecutive days. We need to find the maximum merit points the ninja can attain in N Days.
// We are given a 2D Array POINTS of size ‘N*3’ which tells us the merit point of specific
// activity on that particular day. Our task is to calculate the maximum number of merit
// points that the ninja can earn.

function ninjaTrainingM(n, points) {
  // Memoization
  let dp = new Array(n);
  for (let i = 0; i < n; i++) {
    dp[i] = new Array(4).fill(-1);
  }

  function findMax(day, last) {
    if (dp[day][last] !== -1) return dp[day][last];

    if (day === 0) {
      let maxPts = 0;
      for (let i = 0; i < 3; i++) {
        if (i !== last) {
          maxPts = Math.max(maxPts, points[0][i]);
        }
      }

      dp[day][last] = maxPts;
      return maxPts;
    }

    let maxPts = 0;
    for (let i = 0; i < 3; i++) {
      if (i !== last) {
        const pts = points[day][i] + findMax(day - 1, i);
        maxPts = Math.max(maxPts, pts);
      }
    }

    dp[day][last] = maxPts;
    return maxPts;
  }
  return findMax(n - 1, 3);
}

function ninjaTrainingI(n, points) {
  // Iterative
  let dp = new Array(n);
  for (let i = 0; i < n; i++) {
    dp[i] = new Array(4).fill(-1);
  }

  dp[0][0] = Math.max(points[0][1], points[0][2]);
  dp[0][1] = Math.max(points[0][0], points[0][2]);
  dp[0][2] = Math.max(points[0][0], points[0][1]);
  dp[0][3] = Math.max(points[0][0], Math.max(points[0][1], points[0][2]));

  for (let day = 1; day < n; day++) {
    for (let last = 0; last < 4; last++) {
      const maxPoints = 0;
      dp[day][last] = 0;

      for (let i = 0; i < 3; i++) {
        if (i !== last) {
          const pts = points[day][i] + dp[day - 1][i];
          dp[day][last] = Math.max(maxPoints, pts);
        }
      }
    }
  }

  return dp[n - 1][3];
}

function ninjaTraining(n, points) {
  // Iterative & space optimized
  let prev = new Array(n).fill(-1);

  prev[0] = Math.max(points[0][1], points[0][2]);
  prev[1] = Math.max(points[0][0], points[0][2]);
  prev[2] = Math.max(points[0][0], points[0][1]);
  prev[3] = Math.max(points[0][0], Math.max(points[0][1], points[0][2]));

  for (let day = 1; day < n; day++) {
    for (let last = 0; last < 4; last++) {
      const maxPoints = 0;
      curr = 0;

      for (let i = 0; i < 3; i++) {
        if (i !== last) {
          const pts = points[day][i] + prev[i];
          curr = Math.max(maxPoints, pts);
          prev[i] = curr;
        }
      }
    }
  }

  return dp[n - 1][3];
}

const nVal = 3;
const pointsArr = [
  [10, 40, 70],
  [20, 50, 80],
  [30, 60, 90],
];

console.log(ninjaTrainingM(nVal, pointsArr));
console.log(ninjaTrainingI(nVal, pointsArr));
