import axios from '../../src/index.js';
// params 参数属性有数组类型
axios({
    method: 'get',
    url: '/url/get',
    params: {
        foo: ['bar', 'baz'],
    },
});
// params 参数属性有对象类型
axios({
    method: 'get',
    url: '/url/get',
    params: {
        foo: {
            bar: 'baz',
        },
    },
});
// params 参数属性有日期类型
const date = new Date();
axios({
    method: 'get',
    url: '/url/get',
    params: {
        date,
    },
});
// params 参数属性有不用编译的字符 @:$, 空格->+
axios({
    method: 'get',
    url: '/url/get',
    params: {
        foo: '@:$, ',
    },
});
// params 参数属性有 null or undefined
axios({
    method: 'get',
    url: '/url/get',
    params: {
        foo: 'bar',
        baz: null,
    },
});
// url 有 hash
axios({
    method: 'get',
    url: '/url/get#hash',
    params: {
        foo: 'bar',
    },
});
// url 有 query 参数
axios({
    method: 'get',
    url: '/url/get?foo=bar',
    params: {
        bar: 'baz',
    },
});
