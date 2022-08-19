const toString = Object.prototype.toString;
export function isDate(val) {
    return toString.call(val) === '[object Date]';
}
export function isObject(val) {
    return val !== null && typeof val === 'object';
}
