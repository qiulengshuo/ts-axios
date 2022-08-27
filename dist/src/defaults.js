import { transformRequest, transformResponse } from './helpers/data.js';
import { processHeaders } from './helpers/headers.js';
var defaults = {
    method: 'get',
    timeout: 0,
    headers: {
        common: {
            Accept: 'application/json, text/plain, */*',
        },
    },
    // 默认情况下，config 会对 data headers 做处理
    // 对 response data 会根据情况转化数据
    transformRequest: [
        function (data, headers) {
            processHeaders(headers, data);
            return transformRequest(data);
        },
    ],
    transformResponse: [
        function (data) {
            return transformResponse(data);
        },
    ],
};
var methodsNoData = ['delete', 'get', 'head', 'options'];
methodsNoData.forEach(function (method) {
    defaults.headers[method] = {};
});
var methodsWithData = ['post', 'put', 'patch'];
// 上面三种方法默认 content-type
methodsWithData.forEach(function (method) {
    defaults.headers[method] = {
        'Content-Type': 'application/x-www-form-urlencoded',
    };
});
export default defaults;
