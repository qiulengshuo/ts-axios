import axios from '../../src/index.js'

axios({
    method: 'get',
    url: '/simple/get',
    params: {
        a: 1,
        b: 2,
    },
})
