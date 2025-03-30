'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on('data', function(inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function(): void {
    inputLines = inputString.split('\n');
    inputString = '';

    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr: number[]): void {
    // Write your code here
    let minVal: number = Infinity;     // Start min high
    let maxVal: number = -Infinity;    // Start max low
    let totalSum: number = 0;          // Use number type (64-bit float)

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
    const minSum: number = totalSum - maxVal;

    // Calculate the maximum sum (sum of all elements except the minimum one)
    const maxSum: number = totalSum - minVal;

    // Print the results separated by a space
    console.log(minSum + ' ' + maxSum);
}



function main() {

    const arr: number[] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}