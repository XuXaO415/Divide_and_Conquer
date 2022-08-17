/* Write a function called findRotatedIndex which accepts a rotated array of sorted numbers and an integer. 
The function should return the index of num in the array. If the value is not found, return -1.
*/


// Constraints: Time Complexity: O(log N)

/*
Let 's dive into the details of this algorithm.
A rotated array is a sorted array with a number missing from the array ? ? ? double check this
We start by finding the pivot point or midpoint in an array.
Where does the pivot point start ? Right now, we are assuming the pivot point is the first element in the array.
But, if the array is rotated, the pivot point will be somewhere in the middle of the array.
If the midpoint is the number we 're looking for, return the midpoint.
If the midpoint is greater than the number we 're looking for, 
we can eliminated everything to the right of the midpoint.
If the midpoint is less than the number we 're looking for,
we can eliminate everything to the left of the midpoint.
We repeat this process until we find the number we 're looking for.
 */




function findRotatedIndex(arr, num) {
    // left is the first index of the array, starting at 0
    let left = 0;
    // right is the last index of the array, starting at the last index of the array
    let right = arr.length - 1;

    // while the left index is less than or equal to the right index
    while (left <= right) {
        // mid is the midpoint of the array. We use Math.floor give us the largest integer less than or equal to the midpoint.
        // Then left and right indices are averaged and set to the midpoint. Probably a better way to explain this but this is what I came up with.
        let mid = Math.floor((left + right) / 2);
        // if the midpoint is grater than right
        if (arr[mid] > arr[right]) {
            // set the left index to the midpoint and continue the loop
            left = mid + 1;
            // else... if the midpoint is less than right
        } else {
            // set the right index to the midpoint and continue the loop
            right = mid - 1;
        }
    }
    // the pivot point is the left index
    let pivot = left;
    // left is the first index of the array, starting at 0
    left = 0;
    // right is the last index of the array, starting at the last index of the array
    right = arr.length - 1;

    // if the pivot point is less than or equal to the number AND the number is less than or equal the last index of the array
    if (arr[pivot] <= num && num <= arr[right]) {
        // the left index is the pivot point and starting point [of the binary search]
        left = pivot;
        // else the right index is the last index of the array
    } else {
        right = pivot;
    }
    // while the left index is less than or equal to the right index
    while (left <= right) {
        // mid is the midpoint of the array. We use Math.floor give us the largest integer less than or equal to the midpoint.
        let mid = Math.floor((left + right) / 2);
        // if the midpoint is [strictly] equal to the number we're looking for
        if (arr[mid] === num) {
            // return the mid[point]
            return mid;
        }
        // if the midpoint is greater than the number we're looking for
        if (arr[mid] > num) {
            // set the right index to the midpoint and continue the loop
            right = mid - 1;
            // else... set the left index to the midpoint and continue the loop
        } else {
            left = mid + 1;
        }
    }
    // return -1 if the number is not found
    return -1;
}


console.log(findRotatedIndex([3, 4, 1, 2], 4)); // 1
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8)); // 2
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3)); // 6
console.log(findRotatedIndex([37, 44, 66, 102, 10, 22], 14)); // -1
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12)); // -1
console.log(findRotatedIndex([12, 454, 565, 654, 765, 876, 987], 454)); // 1
console.log(findRotatedIndex([12, 453, 565, 654, 765, 876, 987], 454)); // -1
console.log(findRotatedIndex([12, 454, 565, 654, 765, 876, 987], 0)); // -1

module.exports = findRotatedIndex;