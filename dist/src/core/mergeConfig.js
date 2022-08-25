import { isPlainObject, deepMerge } from '../helpers/util.js';
var strats = Object.create(null);
// 其他字段使用 config2 / config1 的配置
function defaultStart(val1, val2) {
    return typeof val2 !== 'undefined' ? val2 : val1;
}
function fromVal2Stat(val1, val2) {
    if (typeof val2 !== 'undefined') {
        return val2;
    }
}
// url params data 只使用 config2 自定义配置
var stratKeysFromVal2 = ['url', 'params', 'data'];
stratKeysFromVal2.forEach(function (key) {
    strats[key] = fromVal2Stat;
});
// merge 两个 headers，优先保留 val2
function deepMergeStrat(val1, val2) {
    if (isPlainObject(val2)) {
        return deepMerge(val1, val2);
    }
    else if (typeof val2 !== 'undefined') {
        return val2;
    }
    else if (isPlainObject(val1)) {
        return deepMerge(val1);
    }
    else if (typeof val1 !== 'undefined') {
        return val1;
    }
}
var stratKeysDeepMerge = ['headers'];
stratKeysDeepMerge.forEach(function (key) {
    strats[key] = deepMergeStrat;
});
export default function mergeConfig(config1, config2) {
    if (!config2) {
        config2 = {};
    }
    var config = Object.create(null);
    for (var key in config2) {
        mergeField(key);
    }
    for (var key in config1) {
        if (!config2[key]) {
            mergeField(key);
        }
    }
    function mergeField(key) {
        var strat = strats[key] || defaultStart;
        config[key] = strat(config1[key], config2[key]);
    }
    return config;
}
