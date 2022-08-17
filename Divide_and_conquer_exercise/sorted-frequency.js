//Given a sorted array and a number, write a function called sortedFrequency that counts the occurrences of the number in the array

// Constraints: Time Complexity: O(log N)


function sortedFrequency(arr, target) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;


    while (leftIdx <= rightIdx) {
        let mid = Math.floor((leftIdx + rightIdx) / 2);
        if (arr[mid] < target) {
            leftIdx = mid + 1;
        } else if (arr[mid] > target) {
            rightIdx = mid - 1;
        } else {
            if (arr[mid - 1] < target) {
                return mid;
            } else {
                rightIdx = mid - 1;
            }
        }
    }
    return -1;
}




console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2)); // 4
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3)); // 1
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1)); // 2
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4)); // -1


module.exports = sortedFrequency;