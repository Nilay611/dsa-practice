// https://takeuforward.org/data-structure/find-second-smallest-and-second-largest-element-in-an-array/
// Problem Statement: Given an array, find the second smallest and second largest element in the array.
// Print ‘-1’ in the event that either of them doesn’t exist.

function findSecondSmallestAndLargest(arr) {
  if (arr.length < 2) {
    return [-1, -1];
  }

  let minHeap = [];
  let maxHeap = [];

  arr.forEach((n) => {
    minHeap.push(-n);
    maxHeap.push(n);
  });

  minHeap.sort((a, b) => a - b);
  maxHeap.sort((a, b) => a - b);

  let smallest = minHeap.pop();
  let secondSmallest = minHeap.pop();

  let largest = maxHeap.pop();
  let secondLargest = maxHeap.pop();

  return [-secondSmallest, secondLargest];
}

console.log(findSecondSmallestAndLargest([1, 6, 3, 6, 5]));
