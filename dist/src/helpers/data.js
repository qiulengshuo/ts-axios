import { isPlainObject } from './util.js';
export function transformRequest(data) {
    // 对于 data 是对象类型会 json 化
    if (isPlainObject(data)) {
        return JSON.stringify(data);
    }
    return data;
}
