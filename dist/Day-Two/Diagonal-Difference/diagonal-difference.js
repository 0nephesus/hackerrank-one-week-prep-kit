'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
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
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */
function diagonalDifference(arr) {
    // Write your code here
    // Get the size of the square matrix (number of rows or columns)
    const n = arr.length;
    // Initialize sums for both diagonals
    let primaryDiagonalSum = 0;
    let secondaryDiagonalSum = 0;
    // Iterate through the rows of the matrix
    for (let i = 0; i < n; i++) {
        // Add the element from the primary diagonal (top-left to bottom-right)
        // Elements are at index [i][i]
        primaryDiagonalSum += arr[i][i];
        // Add the element from the secondary diagonal (top-right to bottom-left)
        // Elements are at index [i][n - 1 - i]
        secondaryDiagonalSum += arr[i][n - 1 - i];
    }
    // Calculate the absolute difference between the two sums
    const absoluteDifference = Math.abs(primaryDiagonalSum - secondaryDiagonalSum);
    // Return the result
    return absoluteDifference;
}
function main() {
    const ws = (0, fs_1.createWriteStream)(process.env['OUTPUT_PATH']);
    const n = parseInt(readLine().trim(), 10);
    let arr = Array(n);
    for (let i = 0; i < n; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }
    const result = diagonalDifference(arr);
    ws.write(result + '\n');
    ws.end();
}
