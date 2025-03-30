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
    let min = arr[0];
    let max = arr[0];
    arr.forEach(num => {
        if (num > max) {
            max = num;
        }
        else if (num < min) {
            min = num;
        }
    });
    let minSum = 0;
    let maxSum = 0;
    arr.forEach(num => {
        if (num !== max) {
            minSum += num;
        }
        if (num !== min) {
            maxSum += num;
        }
    });
    console.log(minSum + ' ' + maxSum);
}
function main() {
    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    miniMaxSum(arr);
}
