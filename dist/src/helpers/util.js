var toString = Object.prototype.toString;
export function isDate(val) {
    return toString.call(val) === '[object Date]';
}
// export function isObject(val: any): val is Object {
//   return val !== null && typeof val === 'object'
// }
export function isPlainObject(val) {
    return toString.call(val) === '[object Object]';
}
export function extend(to, from) {
    for (var key in from) {
        ;
        to[key] = from[key];
    }
    return to;
}
