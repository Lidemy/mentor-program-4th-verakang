/* eslint-disable indent */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
});

const lines = [];

rl.on('line', (line) => {
    lines.push(line);
});

function solve(input) {
    function compare(a, b, c) {
        if (a === b) return 'DRAW';
        if (c === -1) {
            const backupNum = a;
            a = b;
            b = backupNum;
        }
        const aLength = a.length;
        const bLength = b.length;

        if (aLength !== bLength) {
            return aLength > bLength ? 'A' : 'B';
        }
        return a > b ? 'A' : 'B';
    }

    for (let i = 1; i < lines.length; i += 1) {
        const tmp = lines[i].split(' ');
        const a = tmp[0];
        const b = tmp[1];
        const c = tmp[2];
        console.log(compare(a, b, c));
    }
}

rl.on('close', () => {
    solve(lines);
});
