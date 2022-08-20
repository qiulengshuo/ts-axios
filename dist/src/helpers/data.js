import { isPlainObject } from './util.js';
export function transformRequest(data) {
    // 对于 data 是对象类型会 json 化
    if (isPlainObject(data)) {
        return JSON.stringify(data);
    }
    return data;
}
export function transformResponse(data) {
    // 自己去把 返回响应体的body字符串 转换成 JSON对象 。
    if (typeof data === 'string') {
        try {
            data = JSON.parse(data);
        }
        catch (e) { }
    }
    return data;
}
