/* eslint-disable indent */
/* eslint-disable no-unused-vars */
/* global BigInt */
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
    for (let i = 1; i < lines.length; i += 1) {
        const checkNum = lines[i].split(' ');
        const a = BigInt(checkNum[0]);
        const b = BigInt(checkNum[1]);
        if (a === b) {
            console.log('DRAW');
        }
        if (Number(checkNum[2]) === 1) {
            if (a > b) {
                console.log('A');
            } else if (a < b) {
                console.log('B');
            }
        }
        if (Number(checkNum[2]) === -1) {
            if (a > b) {
                console.log('B');
            } else if (a < b) {
                console.log('A');
            }
        }
    }
}

rl.on('close', () => {
    solve(lines);
});
