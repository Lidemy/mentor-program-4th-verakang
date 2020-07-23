/* eslint-disable indent */
/* eslint-disable no-unused-vars */
/* eslint-disable quote-props */
/* eslint-disable import/no-unresolved */

const request = require('request');

const options = {
    url: 'https://api.twitch.tv/kraken/games/top',
    headers: {
        'Accept': 'application/vnd.twitchtv.v5+json',
        'Client-ID': 'qu8k64o0ycgnn98s7fsphm52by56xp',
    },
};

function callback(error, response, body) {
    if (!error && response.statusCode === 200) {
        const info = JSON.parse(body);
        for (let i = 0; i < info.top.length; i += 1) {
            console.log(info.top[i].viewers, info.top[i].game.name);
        }
    }
}

request(options, callback);

/*
有個小問題
看到第四週補充影片提到 callback(error, response, body) 裡面參數是認位置、順序，不認命名，
那這樣通常在實務上，工作時會特別為這個值修改命名嗎？
像第三個參數，是會乾脆就不改直接用 body，還是有會再另外命名呢？
*/
