import axios from '../../src/index.js'
var CancelToken = axios.CancelToken
var source = CancelToken.source()
axios
    .get('/cancel/get', {
        cancelToken: source.token,
    })
    .catch(function (e) {
        if (axios.isCancel(e)) {
            console.log('Request canceled', e.message)
        }
    })
setTimeout(function () {
    source.cancel('Operation canceled by the user.')
    axios
        .post('/cancel/post', { a: 1 }, { cancelToken: source.token })
        .catch(function (e) {
            if (axios.isCancel(e)) {
                console.log(e.message)
            }
        })
}, 100)
var cancel
axios
    .get('/cancel/get', {
        cancelToken: new CancelToken(function (c) {
            cancel = c
        }),
    })
    .catch(function (e) {
        if (axios.isCancel(e)) {
            console.log('Request canceled')
        }
    })
setTimeout(function () {
    cancel()
}, 200)
