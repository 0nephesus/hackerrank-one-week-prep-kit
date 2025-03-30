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
 * Complete the 'lonelyinteger' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */
function lonelyinteger(a) {
    // Write your code here
    for (const num of a) {
        if (a.indexOf(num) === a.lastIndexOf(num)) {
            return num;
        }
    }
}
function main() {
    const ws = (0, fs_1.createWriteStream)(process.env['OUTPUT_PATH']);
    const n = parseInt(readLine().trim(), 10);
    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));
    const result = lonelyinteger(a);
    ws.write(result + '\n');
    ws.end();
}
