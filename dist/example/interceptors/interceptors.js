import axios from '../../src/index.js';
axios.interceptors.request.use(function (config) {
    config.headers.test += '1';
    return config;
});
axios.interceptors.request.use(function (config) {
    config.headers.test += '2';
    return config;
});
axios.interceptors.request.use(function (config) {
    config.headers.test += '3';
    return config;
});
axios.interceptors.response.use(function (res) {
    res.data += '1';
    return res;
});
var interceptor = axios.interceptors.response.use(function (res) {
    res.data += '2';
    return res;
});
axios.interceptors.response.use(function (res) {
    res.data += '3';
    return res;
});
axios.interceptors.response.eject(interceptor);
axios({
    url: '/interceptor/get',
    method: 'get',
    headers: {
        test: ''
    }
}).then(function (res) {
    console.log(res.data);
});
