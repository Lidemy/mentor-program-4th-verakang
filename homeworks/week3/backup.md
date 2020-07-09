作業初版備份

# 1. 好多星星
```
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
    let star = '';
    for (let i = 0; i < lines[0]; i += 1) {
        star += '*';
        console.log(star);
    }
}

rl.on('close', () => {
    solve(lines);
});
```

# 2. 水仙花數
```
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
    const tmp = lines[0].split(' ');
    function findDigits(n) {
        let oldNum = n;
        let digitsCount = 0;
        while (oldNum !== 0) {
            oldNum = Math.floor(oldNum / 10);
            digitsCount += 1;
        }
        return digitsCount;
    }
    function checkNum(n) {
        let oldNum = n;
        let addNum = 0;
        while (oldNum !== 0) {
            addNum += (oldNum % 10) ** findDigits(n);
            oldNum = Math.floor(oldNum / 10);
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
```

# 3. 判斷質數
```
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
```
# 4. 判斷迴文
```
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
```

# 5. 聯誼順序比大小
```
/* eslint-disable indent */
/* eslint-disable no-unused-vars */
/* global BigInt */

const readline = require('readline');

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
```