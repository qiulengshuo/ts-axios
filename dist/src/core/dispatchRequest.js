import { transformRequest, transformResponse } from '../helpers/data.js';
import { processHeaders } from '../helpers/headers.js';
import { buildURL } from '../helpers/url.js';
import xhr from './xhr.js';
export default function dispatchRequest(config) {
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
