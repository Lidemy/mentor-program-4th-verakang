/* eslint-disable indent */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
/* eslint-disable consistent-return */

// 作業修正
const request = require('request');

request.get(
    'https://lidemy-book-store.herokuapp.com/books?_limit=10',
    (error, response, books) => {
        if (error) {
            return console.log('抓取失敗', error);
        } let json;
        try {
            json = JSON.parse(books);
        } catch (err) {
            return console.log(err);
        }
        for (let i = 0; i < json.length; i += 1) {
            console.log(json[i].id, json[i].name);
        }
    },
);


// 新的寫法
/*
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
*/


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
