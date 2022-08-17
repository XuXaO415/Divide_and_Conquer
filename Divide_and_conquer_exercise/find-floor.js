/* Write a function called findFloor which accepts a sorted array 
and a value x, and returns the floor of x in the array. 
The floor of x in an array is the largest element in the array 
which is smaller than or equal to x. 
If the floor does not exist, return -1. */

//Time Complexity: O(log N)

function findFloor(arr, x) {
    let low = 0;
    let high = arr.length - 1;
    let mid = 0;

    while (low <= high) {
        mid = Math.floor((low + high) / 2);
        if (arr[mid] === x) {
            return arr[mid];
        } else if (arr[mid] > x) {
            high = mid - 1;
        } else if (arr[mid] < x) {
            low = mid + 1;
        }
    }
    if (arr[mid] < x) {
        return arr[mid];
    }
    return arr[mid - 1] || -1;
}

console.log(findFloor([1, 2, 8, 10, 10, 12, 19], 5)); // 2
console.log(findFloor([1, 2, 8, 10, 10, 12, 19], 9)); // 8
console.log(findFloor([1, 2, 8, 10, 10, 12, 19], 20)); // 19
console.log(findFloor([1, 2, 8, 10, 10, 12, 19], 0)); // -1
console.log(findFloor([12, 454, 565, 654, 765, 876, 987], 454)); // 454
console.log(findFloor([12, 453, 565, 654, 765, 876, 987], 454)); // 453 
console.log(findFloor([12, 454, 565, 654, 765, 876, 987], 0)); // -1

module.exports = findFloor;