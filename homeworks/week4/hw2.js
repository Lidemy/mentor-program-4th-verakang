/* eslint-disable indent */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
/* eslint-disable prefer-template */

const request = require('request');

// node hw2.js list -> 印出前 20 本書的 id 與書名
/*
不太確定這邊是不是要直接在網址寫死？我本來是預期如果輸入 list 的話，
再去指定限制回傳資料量是 20，從這邊去抓取相對應的資料量。
但不直接這樣處理，我能想到的只有用 for 迴圈每筆資料都跑到。^^"
 */

request.get(
    'https://lidemy-book-store.herokuapp.com/books?_limit=20',
    (error, response, books) => {
        const json = JSON.parse(books);
        if (process.argv[2] === 'list') {
            for (let i = 0; i < json.length; i += 1) {
                console.log(`${json[i].id} ${json[i].name}`);
            }
        }
    },
);

// node hw2.js read 3 -> 輸出 id 為 3 的書籍
request.get(
    'https://lidemy-book-store.herokuapp.com/books/' + process.argv[3],
    (error, response, books) => {
        const json = JSON.parse(books);
        console.log(json.name);
    },
);

// node hw2.js delete 1 -> 刪除 id 為 1 的書籍
request.delete('https://lidemy-book-store.herokuapp.com/books/' + process.argv[3]);

// node hw2.js create "I love coding" -> 新增一本名為 I love coding 的書
request.post('https://lidemy-book-store.herokuapp.com/books').form({ name: process.argv[3] });

// node hw2.js update 1 "new name" 更新 id 為 1 的書名為 new name
request.patch('https://lidemy-book-store.herokuapp.com/books/' + process.argv[3]).form({ name: process.argv[4] });
