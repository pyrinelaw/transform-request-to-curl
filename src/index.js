const querystring = require('querystring');

/**
 * 装换 request 到 curl 语句
 * @param {String} method 方法名
 * @param {String} url
 * @param {Object} data
 * @param {Object} headers
 */
const transformRequestToCurl = (method, url, data, headers) => {
    const curl = [];
    const query = (data instanceof Array) ? JSON.stringify(data) : querystring.stringify(data);

    const methodName = (method || 'get').toLocaleLowerCase();
    if (methodName == 'get') {
        if (query) {
            curl.push(`'${url}${url.indexOf('?') > 0 ? '&' : '?'}${query}'`);
        } else {
            curl.push(`'${url}'`);
        }
    } else {
        curl.push(`-X 'POST' '${url}'`);
        if (query) {
            curl.push(`-d '${query}'`);
        }
    }
    const headerList = Object.keys(headers || {})
        .filter(k => headers[k])
        .map(k => `-H '${k}: ${headers[k]}'`);

    curl.push(headerList.join(' '));

    // console.warn(headers);
    // console.warn('transformRequestToCurl  =====<');

    return (`curl ${curl.join(' ')}`);
};

module.exports = transformRequestToCurl;
