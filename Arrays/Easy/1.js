// https://takeuforward.org/data-structure/find-the-largest-element-in-an-array/
// Problem Statement: Given an array, we have to find the largest element in the array.

function findLargest(arr) {
  let max = 0;

  for (let n of arr) {
    max = Math.max(max, n);
  }

  return max;
}

console.log(findLargest([2, 5, 1, 8, 0]));
