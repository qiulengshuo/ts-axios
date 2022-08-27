var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import axios from '../../src/index.js';
// axios.defaults.headers.common['test2'] = 123
// axios({
//   url: '/config/post',
//   method: 'post',
//   data: 'a=1',
//   headers: {
//     test: '321',
//   },
// }).then((res) => {
//   console.log(res.data)
// })
// axios({
//   transformRequest: [
//     function (data) {
//       return { ...data, b: 2 }
//     },
//     ...(axios.defaults.transformRequest as AxiosTransformer[]),
//   ],
//   transformResponse: [
//     ...(axios.defaults.transformResponse as AxiosTransformer[]),
//     function (data) {
//       if (typeof data === 'object') {
//         data.c = 3
//       }
//       return data
//     },
//   ],
//   url: '/config/post',
//   method: 'post',
//   data: {
//     a: 1,
//   },
// }).then((res) => {
//   console.log(res.data)
// })
var instance = axios.create({
    transformRequest: __spreadArray([
        function (data) {
            return 'a=1&b=2';
        }
    ], axios.defaults.transformRequest, true),
    transformResponse: __spreadArray(__spreadArray([], axios.defaults.transformResponse, true), [
        function (data) {
            if (typeof data === 'object') {
                data.c = 3;
            }
            return data;
        },
    ], false),
});
instance({
    url: '/config/post',
    method: 'post',
    data: {
        a: 1,
    },
}).then(function (res) {
    console.log(res.data);
});
