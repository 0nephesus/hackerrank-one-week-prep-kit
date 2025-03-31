'use strict';

import { WriteStream, createWriteStream } from "fs";
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
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr: number[][]): number {
    // Write your code here
    // Get the size of the square matrix (number of rows or columns)
    const n: number = arr.length;

    // Initialize sums for both diagonals
    let primaryDiagonalSum: number = 0;
    let secondaryDiagonalSum: number = 0;

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
    const absoluteDifference: number = Math.abs(primaryDiagonalSum - secondaryDiagonalSum);

    // Return the result
    return absoluteDifference;
}

function main() {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

    const n: number = parseInt(readLine().trim(), 10);

    let arr: number[][] = Array(n);

    for (let i: number = 0; i < n; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const result: number = diagonalDifference(arr);

    ws.write(result + '\n');

    ws.end();
}
