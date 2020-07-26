/* eslint-disable indent */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
/* eslint-disable prefer-template */
/* eslint-disable consistent-return */

const request = require('request');

const args = process.argv;
const API_ENDPOINT = 'https://lidemy-book-store.herokuapp.com';

const action = args[2];
const params = args[3];

// node hw2.js list -> 印出前 20 本書的 id 與書名
function listBooks() {
    request.get(
        `${API_ENDPOINT}/books?_limit=20`, (error, response, books) => {
            if (error) {
                return console.log('抓取失敗', error);
            }
            const json = JSON.parse(books);
            for (let i = 0; i < json.length; i += 1) {
                console.log(`${json[i].id} ${json[i].name}`);
            }
        },
    );
}

// node hw2.js read 3 -> 輸出 id 為 3 的書籍
function readBook(id) {
    request.get(
        `${API_ENDPOINT}/books/${id}`, (error, response, books) => {
            if (error) {
                return console.log('抓取失敗', error);
            }
            const json = JSON.parse(books);
            console.log(json);
        },
    );
}

// node hw2.js delete 1 -> 刪除 id 為 1 的書籍
function deleteBook(id) {
    request.delete(
        `${API_ENDPOINT}/books/${id}`, (error, response, books) => {
            if (error) {
                return console.log('抓取失敗', error);
            }
            console.log('刪除成功');
        },
    );
}

// node hw2.js create "I love coding" -> 新增一本名為 I love coding 的書
function createBook(name) {
    request.post({
        url: `${API_ENDPOINT}/books`,
        form: {
            name,
        },
    }, (error, response) => {
        if (error) {
            return console.log('新增失敗', error);
        }
        console.log('新增成功');
    });
}

// node hw2.js update 1 "new name" 更新 id 為 1 的書名為 new name
function updateBook(id, name) {
    request.patch({
        url: `${API_ENDPOINT}/books/${id}`,
        form: {
            name,
        },
    }, (error, response) => {
        if (error) {
            return console.log('更新失敗', error);
        }
        console.log('更新成功');
    });
}

switch (action) {
    case 'list':
        listBooks();
        break;
    case 'read':
        readBook(params);
        break;
    case 'delete':
        deleteBook(params);
        break;
    case 'create':
        createBook(params);
        break;
    case 'update':
        updateBook(params, args[4]);
        break;
    default:
        console.log('Available commands: list, read, delete, create and update');
}
