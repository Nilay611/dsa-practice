// https://takeuforward.org/data-structure/check-if-an-array-is-sorted/
// Problem Statement: Given an array of size n, write a program to check
// if the given array is sorted in (ascending / Increasing / Non-decreasing)
// order or not. If the array is sorted then return True, Else return False.

function checkSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] > arr[i]) return false;
  }

  return true;
}

console.log(checkSort([1, 2, 3, 6, 5]));
