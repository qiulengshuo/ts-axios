import { createError } from '../helpers/error.js';
import { parseHeaders } from '../helpers/headers.js';
export default function xhr(config) {
    return new Promise(function (resolve, reject) {
        var _a = config.data, data = _a === void 0 ? null : _a, url = config.url, _b = config.method, method = _b === void 0 ? 'get' : _b, headers = config.headers, responseType = config.responseType, timeout = config.timeout;
        var request = new XMLHttpRequest();
        if (responseType) {
            request.responseType = responseType;
        }
        if (timeout) {
            request.timeout = timeout;
        }
        request.onreadystatechange = function handleLoad() {
            if (request.readyState !== 4) {
                return;
            }
            // 网络错误或者超时错误(无法得到响应, 状态码为0)
            if (request.status === 0) {
                return;
            }
            var responseHeaders = parseHeaders(request.getAllResponseHeaders());
            var responseData = responseType !== 'text' ? request.response : request.responseText;
            var response = {
                data: responseData,
                status: request.status,
                statusText: request.statusText,
                headers: responseHeaders,
                config: config,
                request: request,
            };
            handleResponse(response);
        };
        // 网络错误
        request.onerror = function handleError() {
            reject(createError('Network Error', config, null, request));
        };
        // 超时回调
        request.ontimeout = function handleTimeout() {
            reject(createError("Timeout of ".concat(timeout, " ms exceeded"), config, 'ECONNABORTED', request));
        };
        request.open(method.toUpperCase(), url, true);
        // 添加请求头
        Object.keys(headers).forEach(function (name) {
            if (data === null && name.toLowerCase() === 'content-type') {
                delete headers[name];
            }
            request.setRequestHeader(name, headers[name]);
        });
        // 发生请求体
        request.send(data);
        function handleResponse(response) {
            if (response.status >= 200 && response.status < 300) {
                resolve(response);
            }
            else {
                reject(createError("Request failed with status code ".concat(response.status), config, null, request, response));
            }
        }
    });
}
