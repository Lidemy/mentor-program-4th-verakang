/* eslint-disable indent */
/* eslint-disable no-unused-vars */
/* eslint-disable quote-props */
/* eslint-disable import/no-unresolved */
/* eslint-disable consistent-return */ // function 需有回傳值
/* eslint-disable no-restricted-syntax */ // ES6新用法 for...of...
/* eslint-disable prefer-template */ // 字串拼接

const request = require('request');

const BASE_URL = 'https://api.twitch.tv/kraken';
const CLIENT_ID = 'qu8k64o0ycgnn98s7fsphm52by56xp';

request({
    mathod: 'GET',
    url: `${BASE_URL}/games/top`,
    headers: {
        'Accept': 'application/vnd.twitchtv.v5+json',
        'Client-ID': CLIENT_ID,
    },
}, (error, response, body) => {
    if (error) {
        return console.log(error);
    }
    const info = JSON.parse(body);
    const games = info.top;
    for (const game of games) {
        console.log(game.viewers + ' ' + game.game.name);
    }
});

// let game of game => ES6 的新用法，很方便，記起來！
