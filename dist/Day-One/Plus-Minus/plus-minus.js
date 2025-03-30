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
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */
function plusMinus(arr) {
    // Write your code here
    const n = arr.length;
    let positiveCount = 0;
    let negativeCount = 0;
    let zeroCount = 0;
    // Iterate through the array once to count elements
    arr.forEach(num => {
        if (num > 0) {
            positiveCount++;
        }
        else if (num < 0) {
            negativeCount++;
        }
        else {
            zeroCount++;
        }
    });
    // Calculate ratios and print formatted output
    console.log((positiveCount / n).toFixed(6));
    console.log((negativeCount / n).toFixed(6));
    console.log((zeroCount / n).toFixed(6));
}
function main() {
    const n = parseInt(readLine().trim(), 10);
    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    plusMinus(arr);
}
