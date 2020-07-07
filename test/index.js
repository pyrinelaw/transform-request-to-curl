const transformRequestToCurl = require('../src/index.js');

const url = 'http://www.a.com';
const data = {username: 'lucy', age: 18};
const headers = {
    cookie: 'token=ShbJEhXhuuuhg98o12_CbBc'
}

console.log(transformRequestToCurl('get', url, data, headers));
console.log(transformRequestToCurl('post', url, data, headers));
