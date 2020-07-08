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
    let star = '';
    for (let i = 0; i < lines[0]; i += 1) {
        star += '*';
        console.log(star);
    }
}

rl.on('close', () => {
    solve(lines);
});
