import { deepMerge, isPlainObject } from './util.js';
function normalizeHeaderName(headers, normalizedName) {
    if (!headers) {
        return;
    }
    Object.keys(headers).forEach(function (name) {
        if (name !== normalizedName &&
            name.toUpperCase() === normalizedName.toUpperCase()) {
            headers[normalizedName] = headers[name];
            delete headers[name];
        }
    });
}
export function processHeaders(headers, data) {
    normalizeHeaderName(headers, 'Content-Type');
    // 对 对象 默认使用 application/json;charset=utf-8
    if (isPlainObject(data)) {
        if (headers && !headers['Content-Type']) {
            headers['Content-Type'] = 'application/json;charset=utf-8';
        }
    }
    return headers;
}
export function parseHeaders(headers) {
    var parsed = Object.create(null);
    if (!headers) {
        return parsed;
    }
    headers.split('\r\n').forEach(function (line) {
        var _a = line.split(':'), key = _a[0], val = _a[1];
        key = key.trim().toLowerCase();
        if (!key) {
            return;
        }
        if (val) {
            val = val.trim();
        }
        parsed[key] = val;
    });
    return parsed;
}
export function flattenHeaders(headers, method) {
    if (!headers) {
        return headers;
    }
    // merge common对象 和 方法对象 和原来的 headers
    headers = deepMerge(headers.common, headers[method], headers);
    var methodsToDelete = [
        'delete',
        'get',
        'head',
        'options',
        'post',
        'put',
        'patch',
        'common',
    ];
    // 剔除重复的common method对象
    methodsToDelete.forEach(function (method) {
        delete headers[method];
    });
    return headers;
}
