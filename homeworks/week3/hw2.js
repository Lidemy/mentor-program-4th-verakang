/* eslint-disable indent */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
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
    const tmp = lines[0].split(' ');
    function findDigits(n) {
        let digitsCount = 0;
        while (n !== 0) {
            n = Math.floor(n / 10);
            digitsCount += 1;
        }
        return digitsCount;
    }
    function checkNum(n) {
        const realNum = n;
        let addNum = 0;
        while (n !== 0) {
            addNum += (n % 10) ** findDigits(realNum);
            n = Math.floor(n / 10);
        }
        if (addNum === realNum) {
            console.log(realNum);
        }
    }
    for (let i = Number(tmp[0]); i <= Number(tmp[1]); i += 1) {
        checkNum(i);
    }
}

rl.on('close', () => {
    solve(lines);
});
