import { buildURL } from './helpers/url.js';
import xhr from './xhr.js';
function axios(config) {
    processConfig(config);
    xhr(config);
}
// 对 config 参数数据做处理
function processConfig(config) {
    config.url = transformURL(config);
}
function transformURL(config) {
    const { url, params } = config;
    return buildURL(url, params);
}
export default axios;
