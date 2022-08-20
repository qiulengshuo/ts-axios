import { transformRequest, transformResponse } from './helpers/data.js';
import { processHeaders } from './helpers/headers.js';
import { buildURL } from './helpers/url.js';
import xhr from './xhr.js';
function axios(config) {
    processConfig(config);
    return xhr(config).then((res) => {
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
    const { url, params } = config;
    return buildURL(url, params);
}
function transformRequestData(config) {
    return transformRequest(config.data);
}
function transformHeaders(config) {
    const { headers = {}, data } = config;
    return processHeaders(headers, data);
}
function transformResponseData(res) {
    res.data = transformResponse(res.data);
    return res;
}
export default axios;
