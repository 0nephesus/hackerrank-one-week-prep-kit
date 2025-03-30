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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */
function timeConversion(s) {
    // Write your code here
    // Extract parts of the time string
    const ampm = s.slice(-2); // "AM" or "PM"
    let hours = parseInt(s.slice(0, 2), 10); // Hour part as a number
    const minutes = s.slice(3, 5); // Minutes part
    const seconds = s.slice(6, 8); // Seconds part
    // --- Apply conversion logic ---
    if (ampm === 'AM') {
        if (hours === 12) {
            // Special case: 12 AM (midnight) is 00 hours in 24-hour format
            hours = 0;
        }
        // For 1 AM to 11 AM, the hour number remains the same.
    }
    else { // ampm === 'PM'
        if (hours !== 12) {
            // For 1 PM to 11 PM, add 12 to the hour.
            hours += 12;
        }
        // Special case: 12 PM (noon) remains 12 hours in 24-hour format.
    }
    // --- Format the output ---
    // Convert hours back to string, padding with leading zero if needed
    const hoursStr = hours.toString().padStart(2, '0');
    // Construct the final 24-hour format string
    return `${hoursStr}:${minutes}:${seconds}`;
}
function main() {
    const ws = (0, fs_1.createWriteStream)(process.env['OUTPUT_PATH']);
    const s = readLine();
    const result = timeConversion(s);
    ws.write(result + '\n');
    ws.end();
}
