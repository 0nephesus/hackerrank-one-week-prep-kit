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
    if (s.endsWith('AM')) {
        return s.substring(0, s.length - 2);
    }
    if (s.endsWith('PM')) {
        let hours;
        let minutes;
        let seconds;
        hours = 12 + Number(s.substring(0, 2));
        minutes = s.substring(3, 5);
        seconds = s.substring(6, 8);
        return (hours + ':' + minutes + ':' + seconds);
    }
}
function main() {
    const ws = (0, fs_1.createWriteStream)(process.env['OUTPUT_PATH']);
    const s = readLine();
    const result = timeConversion(s);
    ws.write(result + '\n');
    ws.end();
}
