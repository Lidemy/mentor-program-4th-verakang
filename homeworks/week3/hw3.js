/* eslint-disable indent */
/* eslint-disable no-unused-vars */
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
});

const lines = [];

rl.on('line', (line) => {
    lines.push(line);
});

function solve(input) {
    const count = lines.length;
    function isPrime(n) {
        if (n === 1) {
            console.log('Composite');
        } else if (n > 1) {
            for (let i = 2; i < n; i += 1) {
                if (n % i === 0) {
                    console.log('Composite');
                    return;
                }
            }
            console.log('Prime');
        }
    }
    for (let i = 1; i < count; i += 1) {
        isPrime(Number(lines[i]));
    }
}

rl.on('close', () => {
    solve(lines);
});
