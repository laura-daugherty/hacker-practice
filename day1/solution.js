'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



/*
 * Complete the 'numberOfWays' function below.
 *
 * The function is expected to return a LONG_INTEGER_ARRAY.
 * The function accepts 2D_INTEGER_ARRAY cases as parameter.
 */

function numberOfWays(cases) {
    // Write your code here

}

