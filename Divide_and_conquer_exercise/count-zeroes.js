//write a function that returns the number of zeroes in an array with a time complexity of O(log n)
// Since we have a constraint with a time complexity of O(log n), we can use binary search to find the number of zeros in the array.

function countZeroes(arr) {
    //leftIdx is where start our array search
    let leftIdx = 0;
    let rightIdx = arr.length - 1;

    while (leftIdx <= rightIdx) {
        let midIdx = Math.floor((leftIdx + rightIdx) / 2);
        if (arr[leftIdx] === 0) {
            // return arr.length - 1;
            return arr.length - leftIdx;
        } else if (arr[midIdx] === 1) {
            leftIdx = midIdx + 1;
        } else if (arr[midIdx - 1] === 1) {
            return arr.length - midIdx;
        } else {
            rightIdx = midIdx - 1;
        }
    }
    return 0;
}


console.log(countZeroes([1, 1, 1, 1, 0, 0])); // 2
console.log(countZeroes([1, 0, 0, 0, 0])); // 4
console.log(countZeroes([0, 0, 0])); // 3
console.log(countZeroes([1, 1, 1, 1])); // 0

module.exports = countZeroes;