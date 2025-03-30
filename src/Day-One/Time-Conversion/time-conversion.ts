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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s: string): string {
    // Write your code here

    if (s.endsWith('AM')) {
        return s.substring(0, s.length-2);
    }
    
    if (s.endsWith('PM')) {
        let hours: number;
        let minutes: string;
        let seconds: string;
        
        hours = 12 + Number(s.substring(0, 2));
        minutes = s.substring(3, 5);
        seconds = s.substring(6, 8);
        
        return(hours + ':' + minutes + ':' + seconds);
    }
}

function main() {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

    const s: string = readLine();

    const result: string = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
