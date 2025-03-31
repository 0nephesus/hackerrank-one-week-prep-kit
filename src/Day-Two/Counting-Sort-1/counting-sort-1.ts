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
 * Complete the 'countingSort' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function countingSort(arr: number[]): number[] {
    // The frequency array needs indices 0 through 99.
    // So, its size must be 100. Initialize all counts to 0.
    // A common constraint for this problem is that numbers are in the range [0, 99]
    const frequencyArr: number[] = new Array(100).fill(0);

    // Iterate through the input array
    for (const num of arr) {
        // Increment the count for the specific number found.
        // We assume 'num' will be within the valid index range [0, 99]
        // based on problem constraints.
        if (num >= 0 && num < 100) { // Optional: Add a check for safety
           frequencyArr[num]++;
        }
    }

    // Return the frequency array itself
    return frequencyArr;
}

function main() {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

    const n: number = parseInt(readLine().trim(), 10);

    const arr: number[] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result: number[] = countingSort(arr);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
