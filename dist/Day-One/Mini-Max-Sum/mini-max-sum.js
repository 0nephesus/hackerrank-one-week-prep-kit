'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
process.stdin.resume();
process.stdin.setEncoding('utf-8');
let inputString = '';
let inputLines = [];
let currentLine = 0;
process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});
process.stdin.on('end', function () {
    inputLines = inputString.split('\n');
    inputString = '';
    main();
});
function readLine() {
    return inputLines[currentLine++];
}
/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */
function miniMaxSum(arr) {
    // Write your code here
    let minVal = Infinity; // Start min high
    let maxVal = -Infinity; // Start max low
    let totalSum = 0; // Use number type (64-bit float)
    // Single pass to find min, max, and total sum
    for (const num of arr) {
        totalSum += num;
        if (num < minVal) {
            minVal = num;
        }
        if (num > maxVal) {
            maxVal = num;
        }
    }
    // Calculate the minimum sum (sum of all elements except the maximum one)
    const minSum = totalSum - maxVal;
    // Calculate the maximum sum (sum of all elements except the minimum one)
    const maxSum = totalSum - minVal;
    // Print the results separated by a space
    console.log(minSum + ' ' + maxSum);
}
function main() {
    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    miniMaxSum(arr);
}
