//Write a function called findRotationCount which accepts an array of distinct numbers sorted in increasing order. 
//The array has been rotated counter-clockwise n number of times. Given such an array, find the value of n.

/* 
Constraints: Time Complexity: O(log N)
*/

function findRotationCount(arr) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] < arr[mid - 1]) {
            return mid;
        } else if (arr[mid] >= arr[mid]) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return 0;
}


console.log(findRotationCount([15, 18, 2, 3, 6, 12])); // 2
console.log(findRotationCount([7, 9, 11, 12, 5])); // 4
console.log(findRotationCount([7, 9, 11, 12, 15])); // 0


module.exports = findRotationCount;