import axios from '../../src/index.js';
axios({
    method: 'get',
    url: '/base/get',
    params: {
        a: 1,
        b: 2,
    },
});
