import { isDate, isPlainObject } from './util.js';
function encode(val) {
    return encodeURIComponent(val)
        .replace(/%40/g, '@')
        .replace(/%3A/gi, ':')
        .replace(/%24/g, '$')
        .replace(/%2C/gi, ',')
        .replace(/%20/g, '+')
        .replace(/%5B/gi, '[')
        .replace(/%5D/gi, ']');
}
export function buildURL(url, params) {
    if (!params) {
        return url;
    }
    var parts = [];
    // 遍历 params 的 key
    Object.keys(params).forEach(function (key) {
        // 获取 key 对应的 val
        var val = params[key];
        // 对于 null 或 undefined，直接跳过
        if (val === null || typeof val === 'undefined') {
            return;
        }
        // key: []
        // val 为 数组 -> key[]: []
        // val 为 其他 -> key: [val]
        var values = [];
        if (Array.isArray(val)) {
            values = val;
            key += '[]';
        }
        else {
            values = [val];
        }
        values.forEach(function (val) {
            // val 为日期 -> key: 2023-04-01T05:55:39.030Z
            if (isDate(val)) {
                val = val.toISOString();
            }
            else if (isPlainObject(val)) {
                // val 为对象 -> key: '{ 'a': 1 }'
                val = JSON.stringify(val);
            }
            parts.push("".concat(encode(key), "=").concat(encode(val)));
        });
    });
    var serializedParams = parts.join('&');
    if (serializedParams) {
        // 忽略 # 后面的参数
        var markIndex = url.indexOf('#');
        if (markIndex !== -1) {
            url = url.slice(0, markIndex);
        }
        url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
    }
    return url;
}
