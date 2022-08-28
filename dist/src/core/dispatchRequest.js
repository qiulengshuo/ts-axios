import { flattenHeaders } from '../helpers/headers.js';
import { buildURL } from '../helpers/url.js';
import transform from "./transform.js";
import xhr from './xhr.js';
export default function dispatchRequest(config) {
    throwIfCancellationRequested(config);
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
    config.data = transform(config.data, config.headers, config.transformRequest);
    // 覆盖掉 headers，生成最终扁平化过后的 headers。
    config.headers = flattenHeaders(config.headers, config.method);
}
function transformURL(config) {
    var url = config.url, params = config.params;
    return buildURL(url, params);
}
function transformResponseData(res) {
    res.data = transform(res.data, res.data, res.config.transformResponse);
    return res;
}
function throwIfCancellationRequested(config) {
    if (config.cancelToken) {
        config.cancelToken.throwIfRequested();
    }
}
