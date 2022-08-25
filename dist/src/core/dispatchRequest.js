import { transformRequest, transformResponse } from '../helpers/data.js';
import { flattenHeaders, processHeaders } from '../helpers/headers.js';
import { buildURL } from '../helpers/url.js';
import xhr from './xhr.js';
export default function dispatchRequest(config) {
    //  默认情况下，前端与服务器交互的对象都是 json 字符串。
    //  (对象) axios 会对 post data 数据 string 化; 对返回 body 数据 JSON.parse 对象化。
    //  如果有 content-type，以 content-type 为准；responseType 同理。
    processConfig(config);
    return xhr(config).then(function (res) {
        return transformResponseData(res);
    });
}
// 对 config 参数数据做处理
function processConfig(config) {
    config.url = transformURL(config);
    config.headers = transformHeaders(config);
    config.data = transformRequestData(config);
    // 覆盖掉 header，生成最终扁平化过后的 headers。
    config.headers = flattenHeaders(config.headers, config.method);
}
function transformURL(config) {
    var url = config.url, params = config.params;
    return buildURL(url, params);
}
function transformRequestData(config) {
    return transformRequest(config.data);
}
function transformHeaders(config) {
    var _a = config.headers, headers = _a === void 0 ? {} : _a, data = config.data;
    return processHeaders(headers, data);
}
function transformResponseData(res) {
    res.data = transformResponse(res.data);
    return res;
}
