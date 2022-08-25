import axios, { AxiosError } from '../../src/index.js'

// // params 参数属性有数组类型
// axios({
//   method: 'get',
//   url: '/url/get',
//   params: {
//     foo: ['bar', 'baz'],
//   },
// })

// // params 参数属性有对象类型
// axios({
//   method: 'get',
//   url: '/url/get',
//   params: {
//     foo: {
//       bar: 'baz',
//     },
//   },
// })

// // params 参数属性有日期类型
// const date = new Date()

// axios({
//   method: 'get',
//   url: '/url/get',
//   params: {
//     date,
//   },
// })

// // params 参数属性有不用编译的字符 @:$, 空格->+
// axios({
//   method: 'get',
//   url: '/url/get',
//   params: {
//     foo: '@:$, ',
//   },
// })

// // params 参数属性有 null or undefined
// axios({
//   method: 'get',
//   url: '/url/get',
//   params: {
//     foo: 'bar',
//     baz: null,
//   },
// })

// // url 有 hash
// axios({
//   method: 'get',
//   url: '/url/get#hash',
//   params: {
//     foo: 'bar',
//   },
// })

// // url 有 query 参数
// axios({
//   method: 'get',
//   url: '/url/get?foo=bar',
//   params: {
//     bar: 'baz',
//   },
// })

// // data 为对象
// axios({
//   method: 'post',
//   url: '/url/post',
//   data: {
//     a: 1,
//     b: 2,
//   },
// })

// // 给 data 为对象的情况添加 application/json;charset=utf-8
// axios({
//   method: 'post',
//   url: '/url/post',
//   data: {
//     a: 1,
//     b: 2,
//   },
// })

// // 当 data 为对象并且 content-type 有值
// axios({
//   method: 'post',
//   url: '/url/post',
//   headers: {
//     'content-type': 'application/json;charset=utf-8',
//   },
//   data: {
//     a: 1,
//     b: 2,
//   },
// })

// // 当 data 为其他对象，浏览器会自动加 content-type

// const paramsString = 'q=URLUtils.searchParams&topic=api'
// const searchParams = new URLSearchParams(paramsString)
// axios({
//   method: 'post',
//   url: '/url/post',
//   data: searchParams,
// })

// 返回的类型默认是字符串
// axios({
//   method: 'post',
//   url: '/url/post',
//   data: {
//     a: 1,
//     b: 2,
//   },
// }).then((res) => {
//   console.log(res)
// })

// // 设置返回类型是 json 对象
// axios({
//   method: 'post',
//   url: '/url/post',
//   responseType: 'json',
//   data: {
//     a: 1,
//     b: 2,
//   },
// }).then((res) => {
//   console.log(res)
// })

// // 404
// axios({
//   method: 'get',
//   url: '/error/get1',
// })
//   .then((res) => {
//     console.log(res)
//   })
//   .catch((e) => {
//     console.log(e)
//   })

// // 非200状态码
// axios({
//   method: 'get',
//   url: '/error/get',
// })
//   .then((res) => {
//     console.log(res)
//   })
//   .catch((e) => {
//     console.log(e)
//   })

// // 网络错误
// setTimeout(() => {
//   axios({
//     method: 'get',
//     url: '/error/get',
//   })
//     .then((res) => {
//       console.log(res)
//     })
//     .catch((e) => {
//       console.log(e)
//     })
// }, 5000)

// // 超时错误
// axios({
//   method: 'get',
//   url: '/error/timeout',
//   timeout: 1000,
// })
//   .then((res) => {
//     console.log(res)
//   })
//   .catch((e: AxiosError) => {
//     console.log(e.message)
//     console.log(e.code)
//     console.log(e.isAxiosError)
//     console.log(e.config)
//     console.log(e.request)
//   })
