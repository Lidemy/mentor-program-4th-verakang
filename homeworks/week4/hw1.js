/* eslint-disable indent */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */

// 新的寫法
const request = require('request');

request.get(
    'https://lidemy-book-store.herokuapp.com/books?_limit=10',
    (error, response, books) => {
        const json = JSON.parse(books);
        for (let i = 0; i < json.length; i += 1) {
            console.log(json[i].id, json[i].name);
        }
    },
);


// 舊的寫法（自己留存紀錄用）

/*
const request = require('request');

request.get(
    'https://lidemy-book-store.herokuapp.com/books',
    (error, response, books) => {
        const json = JSON.parse(books);
        for (let i = 0; i < 10; i += 1) {
            console.log(`${json[i].id} ${json[i].name}`);
        }
    },
);
*/
