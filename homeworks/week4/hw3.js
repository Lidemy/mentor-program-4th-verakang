/* eslint-disable indent */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
/* eslint-disable prefer-template */

const request = require('request');

// node hw3.js tai -> 可查詢到符合的國家資訊

// 把輸入的名稱都拼起來，才不會只抓到第一個單字。
let countryName = [];
for (let i = 2; i < process.argv.length; i += 1) {
    countryName.push(process.argv[i]);
} countryName = countryName.join(' ');

request.get(
    'https://restcountries.eu/rest/v2/name/' + countryName,
    (error, response, name) => {
        const json = JSON.parse(name);
        if (response && response.statusCode === 404) {
            console.log('找不到國家資訊');
            return;
        }
        console.log(`國家：${json[0].name}`);
        console.log(`首都：${json[0].capital}`);
        console.log(`貨幣：${json[0].currencies[0].code}`);
        console.log(`國碼：${json[0].callingCodes[0]}`);
    },
);

/*
這邊不太清楚怎麼去設定搜尋的順序，比如說關鍵字是 tai 和 ta，兩個的結果會不一樣，
預期應該都先找出台灣才對，但要完整打到 tai 才會是台灣。
只輸入 ta 會出現 Afghanistan，看起來先從字母順序往下找了，
以這例，該怎樣才可以讓第一個字母為 t 的優先搜尋呢？
*/
