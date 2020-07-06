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
    const tmp = lines[0].split(' ');
    function findDigits(n) {
        let compareNum = n;
        let digitsCount = 0;
        while (compareNum !== 0) {
            compareNum = Math.floor(compareNum / 10);
            digitsCount += 1;
        }
        return digitsCount;
    }
    function checkNum(n) {
        let compareNum = n;
        let addNum = 0;
        while (checkNum !== 0) {
            addNum += (compareNum % 10) ** findDigits(n);
            compareNum = Math.floor(compareNum / 10);
        }
        if (addNum === n) {
            console.log(n);
        }
    }

    for (let i = Number(tmp[0]); i <= Number(tmp[1]); i += 1) {
        checkNum(i);
    }
}

rl.on('close', () => {
    solve(lines);
});
