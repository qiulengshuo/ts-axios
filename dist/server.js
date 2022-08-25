const Koa = require("koa")
const bodyParser = require("koa-bodyparser")
const app = new Koa()
const router = require("koa-router")()

app.use(bodyParser())
app.use(require('koa-static')(__dirname + '/'))

// registerBaseRouter()

// function registerBaseRouter () {
//   router.get("/base/get", async (ctx, next) => {
//     ctx.body = "base/get"
//   })
// }

// registerUrlRouter()

// function registerUrlRouter () {
//   router.get("/url/get", async (ctx, next) => {
//     // 获取 query 参数并返回到 body
//     // body 会 JSON 化
//     ctx.body = ctx.query
//   })

//   router.post("/url/post", async (ctx, next) => {
//     // 通过中间件 koa-bodyparser 解析 request 中的 body 
//     console.log(ctx.request.body)
//     ctx.body = ctx.request.body
//   })
// }

// registerErrorRouter()

// function registerErrorRouter () {
//   // 非200状态码
//   router.get('/error/get', async (ctx, next) => {
//     if (Math.random() > 0.5) {
//       ctx.body = {
//         msg: 'hello world'
//       }
//     } else {
//       ctx.status = 500
//     }
//   })

//   // 超时 封装await promise延迟2s返回
//   router.get('/error/timeout', async (ctx, next) => {
//     function delay (time) {
//       return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//           resolve()
//         }, time)
//       })
//     };
//     await delay(2000)
//     ctx.body = {
//       msg: 'hello world'
//     }
//   })
// }

// registerExtendRouter()

// function registerExtendRouter () {
//   router.get('/extend/get', async (ctx, next) => {
//     ctx.body = 123
//   })

//   router.options('/extend/options', async (ctx, next) => {
//     ctx.body = 'options'
//   })

//   router.delete('/extend/delete', async (ctx, next) => {
//     ctx.body = 'delete'
//   })

//   router.head('/extend/head', async (ctx, next) => {
//     ctx.body = 'head'
//   })

//   router.post('/extend/post', async (ctx, next) => {
//     ctx.body = 'post'
//   })

//   router.put('/extend/put', async (ctx, next) => {
//     ctx.body = 'put'
//   })

//   router.patch('/extend/patch', async (ctx, next) => {
//     ctx.body = 'patch'
//   })

//   router.get('/extend/user', async (ctx, next) => {
//     ctx.body = {
//       code: 0,
//       message: 'ok',
//       result: {
//         name: 'jack',
//         age: 18
//       }
//     }
//   })
// }

// registerInterceptorsRouter()

// function registerInterceptorsRouter () {
//   router.get('/interceptor/get', async (ctx, next) => {
//     ctx.body = "hello"
//   })
// }

registerConfigRouter()

function registerConfigRouter () {
  router.post('/config/post', async (ctx, next) => {
    ctx.body = ctx.request.body
  })
}

app.use(router.routes())

app.listen(3000, () => {
  console.log("监听3000端口")
})