/* eslint-disable indent */
/* eslint-disable no-unused-vars */
const readline = require('readline');
const { connect } = require('http2');

const rl = readline.createInterface({
    input: process.stdin,
});

const lines = [];

rl.on('line', (line) => {
    lines.push(line);
});

function solve(input) {
    let newStr = '';
    const tmp = lines[0].split('');
    for (let i = tmp.length - 1; i >= 0; i -= 1) {
        newStr += tmp[i];
    } if (lines[0] === newStr) {
        console.log('True');
    } else {
        console.log('False');
    }
}

rl.on('close', () => {
    solve(lines);
});
