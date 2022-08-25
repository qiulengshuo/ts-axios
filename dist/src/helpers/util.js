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
export function deepMerge() {
    var objs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        objs[_i] = arguments[_i];
    }
    var result = Object.create(null);
    objs.forEach(function (obj) {
        if (obj) {
            Object.keys(obj).forEach(function (key) {
                var val = obj[key];
                if (isPlainObject(val)) {
                    // 之前存在过，就 deepMerge
                    if (isPlainObject(result[key])) {
                        result[key] = deepMerge(result[key], val);
                    }
                    else {
                        // 之前不存在，深拷贝
                        result[key] = deepMerge(val);
                    }
                }
                else {
                    // 不是对象，直接赋值
                    result[key] = val;
                }
            });
        }
    });
    return result;
}
