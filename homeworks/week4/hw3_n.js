/* eslint-disable indent */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
/* eslint-disable prefer-template */
/* eslint-disable consistent-return */

const request = require('request');

const args = process.argv;
const API_ENDPOINT = 'https://restcountries.eu/rest/v2';

const name = args[2];

// node hw3.js tai -> 可查詢到符合的國家資訊

request(
    `${API_ENDPOINT}/name/${name}`, (error, response, body) => {
        if (!name) {
            return console.log('請輸入國家名稱');
        }
        if (error) {
            return console.log('抓取失敗', error);
        }
        const json = JSON.parse(body);
        if (json.status === 404) {
            return console.log('找不到國家資訊');
        }
        for (let i = 0; i < json.length; i += 1) {
            console.log('==========');
            console.log(`國家：${json[i].name}`);
            console.log(`首都：${json[i].capital}`);
            console.log(`貨幣：${json[i].currencies[0].code}`);
            console.log(`國碼：${json[i].callingCodes[0]}`);
        }
    },
);
