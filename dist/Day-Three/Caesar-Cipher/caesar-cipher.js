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
 * Complete the 'caesarCipher' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER k
 */
function caesarCipher(s, k) {
    // Write your code here
    const lowerAlphabet = 'abcdefghijklmnopqrstuvwxyz';
    const upperAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let encryptedString = '';
    // Normalize k to be within the bounds of the alphabet length
    const effectiveK = k % 26;
    // Use for...of to iterate over the actual characters
    for (const char of s) {
        let newChar = char; // Default to the original character
        if (lowerAlphabet.includes(char)) {
            const originalIndex = lowerAlphabet.indexOf(char);
            // Calculate new index with wrap-around
            const newIndex = (originalIndex + effectiveK) % 26;
            newChar = lowerAlphabet[newIndex];
        }
        else if (upperAlphabet.includes(char)) {
            const originalIndex = upperAlphabet.indexOf(char);
            // Calculate new index with wrap-around
            const newIndex = (originalIndex + effectiveK) % 26;
            newChar = upperAlphabet[newIndex];
        }
        // Non-alphabetic characters remain unchanged (because newChar was initialized to char)
        encryptedString += newChar; // Append the (potentially) modified character
    }
    return encryptedString;
}
function main() {
    const ws = (0, fs_1.createWriteStream)(process.env['OUTPUT_PATH']);
    const n = parseInt(readLine().trim(), 10);
    const s = readLine();
    const k = parseInt(readLine().trim(), 10);
    const result = caesarCipher(s, k);
    ws.write(result + '\n');
    ws.end();
}
